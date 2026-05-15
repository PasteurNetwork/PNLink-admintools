# PNLink Data Model — Reference for the Static Dashboard

> Documents the structure of the PNLink Excel export consumed by `assets/js/app.js`, the columns the dashboard actually uses, the derived fields it computes, and the assumptions it makes when data is missing or noisy.

This is a **descriptive** document. It reflects the real shape of `docs/users_export_42385.xlsx` (3 052 user rows, 139 columns) and the parsing behavior currently coded in the app. Future agents must keep this file in sync with code changes.

---

## 1. Source

- **File inspected:** `docs/users_export_42385.xlsx`
- **Workbook:** single sheet named `Sheet`
- **Header row:** row 1 (139 columns)
- **Data rows:** 3 052
- **Encoding:** Excel Open XML, inline strings (no `sharedStrings.xml`)

The dashboard reads only the **first sheet** of any uploaded file (`workbook.SheetNames[0]`). Only the first sheet is documented here.

---

## 2. Required columns (current parsing)

These are the columns the existing code treats as load-bearing. If any of them is missing, the parser falls back via name normalization (`findField` + `getColumnValueCaseInsensitive`); if a column is truly absent, the value becomes empty/`null` and downstream KPIs degrade gracefully (no crash).

| Logical field | Source column(s) accepted | Example value | Fill rate observed |
|---|---|---|---|
| `email` | `Primary email` | `hicham.ben-hassine@pasteur.fr` | **100 %** |
| `firstName` | `First name`, `Given name`, `Prénom`, `Prenom` | `Hichem` | 100 % |
| `lastName` | `Last name`, `Family name`, `Surname`, `Nom` | `Ben Hassine` | 100 % |
| `invitationDate` | `Invitation email sent at` | `2025-08-25 09:07:50 UTC` | **93.8 %** |
| `activationDate` | `Account activation date` | `2025-08-25 09:11:00 UTC` | **35.9 %** |
| `lastLoginDate` | `Last log in date` | `2026-04-12 12:53:21 UTC` | 35.9 % |
| `creationDate` | `Creation date` | `2025-06-30 15:58:09 UTC` | 100 % |
| `country` | `Live Location:Country`, `Work Postal Address:Country/Region` | `France` | **36.4 %** (Live Location only — Work address is empty in this export) |
| `company` | `Last Job:Company:Name` | `Institut Pasteur (Paris)` | 16 % |
| `role` | `Role:Name` | `Members` (3 051 / 3 052) | 100 % but low signal |
| `score` | `Engagement Scoring:Current score` | `3069` | 34.7 % (only activated users) |
| `affiliation` | `_7ae915fc_Which_member_of_the_Pasteur_Network_are_you_affiliated_to_` | `Pasteur Network` | **10.9 %** with 170+ free-text variants for ~30 institutes |

> Date strings in the export use the `YYYY-MM-DD HH:MM:SS UTC` ISO format. The parser uses SheetJS' `cellDates: true` plus a tolerant `parseExcelDate` helper.

---

## 3. Optional columns now exploited

Columns **read by the enriched parser** to power new insights. All have safe fallbacks (empty string / `null`).

| Logical field | Source column | Fill rate | Used for |
|---|---|---|---|
| `subNetworks` | `SubNetworks:Title` (comma-separated) | **99.2 %** | SubNetwork performance section, follow-up segmentation |
| `industries` | `Industries:Industries` (comma-separated) | 26.6 % | Profile completeness signal |
| `countryCode` | `Live Location:Country code` (ISO-2) | 36.4 % | Optional display next to country |
| `city` | `Live Location:City` | 29.6 % | Profile completeness signal |
| `language` | `Language` (`en` / `fr` / `pt-BR`) | 48.8 % | Communication targeting |
| `visits` | `Count of visits` (integer) | **100 %** | Engagement tier (Power / Active / Light / Dormant) |
| `lastVisitedDate` | `Last visited at` | 35.9 % | Dormancy signal in addition to last login |
| `updatedDate` | `Updated at` | 100 % | Profile freshness |
| `notificationsOff` | `User has turned off all notifications and communications` | 100 % | Detect **unreachable users** (38 in this export) |
| `linkedinUrl` | `LinkedIn profile url` | 16.7 % | Profile completeness |
| `orcid` | `_16814279_ORCID` | 17.6 % | Profile completeness |
| `position` | `Last Job:Position` | 16.2 % | Profile completeness |
| `groupsCount` | `Groups Member:Group Member` (comma-separated IDs, count of items) | 15.9 % | Engagement signal |
| `privateProfile` | `Privacy Settings:Private profile` | 100 % | Visibility flag |
| `optOutDirectory` | `Privacy Settings:Opt out of directory` | 100 % | Visibility flag |

---

## 4. Columns deliberately ignored

These columns are present but provide no actionable signal in this export:

| Column | Reason |
|---|---|
| `Work Postal Address:Country/Region` | 0 % filled in the inspected file |
| `_5b266b00_What_is_your_position_` | 0 % filled |
| `Longest active membership subscription:*` | 0 % filled (no paid memberships) |
| `Not blocked` | 100 % `true` — the export already excludes blocked users |
| `Deceased` | 100 % `false` — the export already excludes deceased users |
| `Notifications:*` (16 boolean columns) | Per-channel preferences; only the **global** `User has turned off all notifications and communications` flag is exposed at dashboard level |
| Privacy / sharing toggles | Out of scope for engagement KPIs |
| Personal addresses, phone numbers, social profiles other than LinkedIn/ORCID | Not relevant to activation KPIs and would distort exports |

If a future export starts populating any of these, the parser can be extended without breaking existing logic — see *Section 9: Adding a new column safely*.

---

## 5. Derived fields

Computed in `processWorkbook` for every row:

| Derived field | Formula |
|---|---|
| `domain` | substring of `email` after `@` |
| `domainType` | `Personnel` if domain ∈ `PERSONAL_DOMAINS`, `Institutionnel` if it matches Pasteur/FIOCRUZ/INRS/etc. or generic `.org/.edu/.ac./.gov/.int`, else `Inconnu / autre` |
| `active` | `true` iff `activationDate` is set |
| `invitationAge` (days) | days between `invitationDate` and now |
| `loginAge` (days) | days between `lastLoginDate` and now |
| `invitationBucket` | for inactive users only: `≤30 jours`, `31–90 jours`, `>90 jours`, `Jamais envoyée` |
| `realProblem` | inactive **and** `invitationBucket = >90 jours` **and** not technical |
| `technical` | empty/invalid email **or** duplicate email **or** matches token blacklist (`test`, `demo`, `admin`, `system`, `noreply`, …) |
| `duplicateEmail` | `Primary email` appears more than once in the file |
| `mappedInstitution` | best-effort mapping via affiliation → company → email domain against `STAFF_REFERENCE` aliases |
| `mappingConfidence` | `Fort` / `Moyen` / `Faible` |
| `neverLogged` | `active && !lastLoginDate` |
| `longInactive` | `active && loginAge > 180` |
| **`engagementTier`** | `Dormant` if `visits == 0`, `Light` if 1–9, `Active` if 10–49, `Power` if ≥ 50 (only meaningful for activated users) |
| **`profileCompleteness`** (0–6) | sum of: has country, has city, has industries, has linkedin, has orcid, has position |
| **`unreachable`** | `notificationsOff && !active` — invited people who can't be re-contacted by email |
| **`dormantActivated`** | `active && visits == 0` — activated but never used the platform |
| **`stalePresence`** | `active && lastVisitedDate older than 180 days` |

---

## 6. Priority logic (transparent and tunable)

Two levels of priority are exposed:

### 6.1 Per-user priority (`getUserPriorityLevel`)
Called for the modal user table and exports.
- `priorityHigh` if score ≥ 4 with the following components:
  - +2 if `realProblem`
  - +2 if `unreachable`
  - +1 if `longInactive`
  - +1 if `neverLogged`
  - +1 if invitation `>90d` without activation
- `priorityMedium` if score ≥ 2
- `priorityLow` otherwise

### 6.2 Per-institute priority (`priorityLabel`)
Used in the consolidated table.
- `priorityBad` if `realProblems > 0` or activation rate < 35 %
- `priorityWatch` if activation rate < 55 % or coverage < 20 %
- `priorityGood` otherwise

### 6.3 Follow-up scoring (`getFollowUpPriority`)
Numeric ranking used for the **Follow-up Priority List** export. Higher = contact first.
```
 + 1000 if real problem
 +  300 if activated but never logged in
 +  250 if activated but inactive >180d
 +  180 if invitation 31–90d, still inactive
 +  120 if never invited
 +  min(invitationAge, 365)
 +  min(loginAge, 365)
 +  max(0, 100 - engagement_score)
```

---

## 7. Decision insights — generation rules

`buildDecisionInsights(summary)` returns a list of `{ level, title, text, action? }` items. Insights are **generated from the filtered rows**, never hard-coded.

| Trigger | Resulting insight |
|---|---|
| `invitedOld > 0` | "Relancer X comptes invités depuis plus de 90 jours et toujours inactifs" |
| `unreachable > 0` | "X utilisateurs sont injoignables (notifications désactivées + non activés) — contact direct nécessaire" |
| `dormantActivated > 0` | "X utilisateurs activés ne se sont jamais connectés — campagne de réactivation" |
| `stalePresence > 0` | "X utilisateurs activés sans connexion depuis 180 jours" |
| Any country with ≥ 10 users and activation < 30 % | "Le pays X a un taux d'activation faible (Y %) — soutien local recommandé" |
| Any institute with ≥ 5 inactive `>90d` | "L'institut X concentre N comptes inactifs >90j" |
| `affiliationMissing / total > 70 %` | "L'affiliation est rarement renseignée — fiabiliser la collecte côté PNLink" |
| `noCountry > 30 % of activated` | "X utilisateurs activés n'ont pas de pays — limite le ciblage géographique" |
| `duplicateEmail > 0` | "X doublons d'email détectés" |
| `affiliation distinct values > 3 × institutes` | "Trop de variantes libres dans l'affiliation — normalisation recommandée" |

The thresholds are documented inline in `buildDecisionInsights` and easy to tune without touching downstream code.

---

## 8. Data quality flags

The Data Quality section surfaces **clickable** cards. Each card opens the modal with the offending rows.

| Flag key | Definition |
|---|---|
| `missingEmail` | `email` is empty |
| `invalidEmail` | `email` does not match `^[^\s@]+@[^\s@]+\.[^\s@]+$` |
| `duplicateEmail` | email appears more than once |
| `missingInstitution` | `mappedInstitution === 'Non rattaché'` |
| `missingCountry` | `country` empty (only for activated users — to keep the figure actionable) |
| `notifOff` | `notificationsOff` true |
| `noisyAffiliation` | filled `affiliation` that didn't match any reference institute (`mappingConfidence === 'Faible'`) |

---

## 9. Adding a new column safely

Procedure for future agents:

1. Add the column source (and any reasonable aliases) to `REQUIRED_FIELD_HINTS` if it must drive a logical field, **or** read it directly via `getColumnValueCaseInsensitive(row, [...])` for soft optional fields.
2. Compute any derived values inside the row enrichment block in `processWorkbook` (around line 700). Always default to empty string / `null`.
3. Add aggregate calculations in `buildSummary`. Never assume a column exists — guard with `?? ''` / `?? null`.
4. Render new insight in `renderDashboard`. **Wrap any new filter key** in `detailRowsForFilter` if you want a clickable KPI.
5. Update this file (`PNLINK_DATA_MODEL.md`) — note the column, its observed fill rate, and the new derived signal.
6. Add a French translation in `translateUiToFrench` for any new English string introduced.

**Never** hard-code values that come from the Excel. **Never** invent counts when a column is missing.

---

## 10. Known limitations

- The free-text affiliation column (`_7ae915fc_…`) has 170+ unique values for roughly 30 institutes. Mapping relies on `STAFF_REFERENCE` aliases; unmatched users fall back to `Non rattaché` and surface in the Data Quality report rather than being silently dropped.
- The `Live Location:Country` column is filled for ~36 % of users — the country breakdown is naturally limited to that subset and the dashboard says so.
- The `Engagement Scoring:Current score` is only populated for activated users, so the score-based components of the priority logic are noisy for inactive users (treated as missing → no penalty).
- All dates are interpreted as UTC. Sub-day precision is preserved but not displayed.
