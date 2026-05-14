    const STAFF_REFERENCE = [
      { name: "Centre Pasteur du Cameroun", global: 269, scientific: 170, support: 99, aliases: ["centre pasteur du cameroun", "centre pasteur cameroun", "centre pasteur cameroun", "cpc"], domains: ["pasteur-yaounde.org"] },
      { name: "Institut Pasteur de Bangui", global: 110, scientific: null, support: 110, aliases: ["institut pasteur de bangui", "bangui"], domains: ["pasteur-bangui.cf"] },
      { name: "Centre de Recherche Médicale et Sanitaire (CERMES Niger)", global: 88, scientific: 42, support: 46, aliases: ["cermes", "cermes niger", "centre de recherche medicale et sanitaire"], domains: ["cermes.org"] },
      { name: "Institut Pasteur de Côte d'Ivoire", global: 146, scientific: 90, support: 56, aliases: ["institut pasteur de cote d'ivoire", "institut pasteur de côte d'ivoire", "côte d'ivoire", "cote d'ivoire", "ipc"], domains: ["pasteur.ci"] },
      { name: "Institut Pasteur de Dakar", global: 650, scientific: null, support: null, aliases: ["institut pasteur de dakar", "dakar"], domains: ["pasteur.sn"] },
      { name: "Institut Pasteur de Guinée", global: 30, scientific: 19, support: 11, aliases: ["institut pasteur de guinee", "institut pasteur de guinée", "guinee", "guinée"], domains: ["pasteur-guinee.org"] },
      { name: "Institut Pasteur de Madagascar", global: 597, scientific: 103, support: 494, aliases: ["institut pasteur de madagascar", "madagascar"], domains: ["pasteur.mg"] },
      { name: "INRS - Centre Armand-Frappier Santé Biotechnologie", global: 343, scientific: 318, support: 25, aliases: ["inrs", "armand-frappier", "armand frappier", "inrs - centre armand-frappier santé biotechnologie", "inrs - armand-frappier santé biotechnologie research centre"], domains: ["iaf.inrs.ca", "inrs.ca"] },
      { name: "Institut Pasteur de la Guadeloupe", global: 63, scientific: 43, support: 20, aliases: ["guadeloupe", "institut pasteur de la guadeloupe"], domains: ["pasteur-guadeloupe.fr"] },
      { name: "Institut Pasteur de la Guyane", global: 80, scientific: 70, support: 10, aliases: ["guyane", "institut pasteur de la guyane"], domains: ["pasteur-cayenne.fr"] },
      { name: "Institut Pasteur de Montevideo", global: 320, scientific: 260, support: 60, aliases: ["montevideo", "pasteur montevideo", "ipmontevideo", "institut pasteur de montevideo"], domains: ["pasteur.edu.uy"] },
      { name: "Oswaldo Cruz Foundation (FIOCRUZ)", global: 11934, scientific: 3500, support: 8334, aliases: ["fiocruz", "fundação oswaldo cruz", "fundacao oswaldo cruz", "oswaldo cruz foundation"], domains: ["fiocruz.br", "ioc.fiocruz.br", "bio.fiocruz.br"] },
      { name: "Institut Pasteur de São Paulo", global: null, scientific: null, support: null, aliases: ["institut pasteur de sao paulo", "institut pasteur de são paulo", "sao paulo"], domains: [] },
      { name: "University of Hong Kong - Pasteur Research Pole (HKU-PRP)", global: 55, scientific: 48, support: 7, aliases: ["hku-pasteur research pole", "hku pasteur research pole", "hku-pasteur", "hku pasteur", "hku-prp", "university of hong kong -pasteur research pole"], domains: ["hku.hk", "connect.hku.hk"] },
      { name: "Institut Pasteur de Nouvelle-Calédonie", global: 37, scientific: 27, support: 5, aliases: ["institut pasteur de nouvelle-caledonie", "institut pasteur de nouvelle-calédonie", "nouvelle-caledonie", "nouvelle-calédonie"], domains: ["pasteur.nc"] },
      { name: "Institut Pasteur du Cambodge", global: null, scientific: null, support: null, aliases: ["institut pasteur du cambodge", "cambodge"], domains: ["pasteur-kh.org"] },
      { name: "Institut Pasteur du Laos", global: 68, scientific: 37, support: 31, aliases: ["institut pasteur du laos", "laos"], domains: ["pasteur.la"] },
      { name: "Institut Pasteur in Ho Chi Minh City", global: 250, scientific: null, support: 250, aliases: ["pasteur institute in ho chi minh city", "institut pasteur in ho chi minh city", "ho chi minh city"], domains: ["pasteurhcm.edu.vn"] },
      { name: "Institut Pasteur in Iran", global: 1300, scientific: 500, support: 800, aliases: ["institut pasteur in iran", "pasteur institute of iran", "iran", "ipi"], domains: [] },
      { name: "Institut Pasteur in Nha Trang", global: 151, scientific: 113, support: 38, aliases: ["institut pasteur in nha trang", "nha trang"], domains: [] },
      { name: "Institut Pasteur Korea", global: 97, scientific: 71, support: 26, aliases: ["institut pasteur korea", "ip korea"], domains: ["ip-korea.org"] },
      { name: "National Institute of Hygiene and Epidemiology (NIHE)", global: 303, scientific: 204, support: 99, aliases: ["nihe", "national institute of hygiene and epidemiology"], domains: ["nihe.org.vn"] },
      { name: "Institut Pasteur (Paris)", global: 2796, scientific: 2044, support: 752, aliases: ["institut pasteur paris", "institut pasteur (paris)", "institut pasteur", "paris"], domains: ["pasteur.fr"] },
      { name: "Hellenic Pasteur Institute", global: 73, scientific: 39, support: 34, aliases: ["hellenic pasteur institute", "hpi"], domains: ["pasteur.gr"] },
      { name: "Institut Pasteur de Lille", global: 800, scientific: null, support: 50, aliases: ["institut pasteur de lille", "pasteur lille", "lille"], domains: ["pasteur-lille.fr"] },
      { name: "Istituto Pasteur Italia - Cenci Bolognetti Foundation", global: 146, scientific: 140, support: 6, aliases: ["istituto pasteur italia", "cenci bolognetti", "institut pasteur in italy", "istituto pasteur.it"], domains: ["istitutopasteur.it", "uniroma1.it"] },
      { name: "Institut Pasteur in Saint Petersburg", global: 339, scientific: 144, support: 195, aliases: ["saint-petersburg pasteur institute", "saint petersburg", "st petersburg"], domains: ["pasteurorg.ru"] },
      { name: "Sciensano", global: 861, scientific: 583, support: 278, aliases: ["sciensano"], domains: ["sciensano.be"] },
      { name: "Stephan Angeloff Institute of Microbiology", global: 248, scientific: 248, support: null, aliases: ["stephan angeloff institute of microbiology", "microbiology bas"], domains: ["microbio.bas.bg"] },
      { name: "Institut Pasteur d'Algérie", global: 1032, scientific: 530, support: 502, aliases: ["institut pasteur d'algerie", "institut pasteur d'algérie", "algeria", "ipa"], domains: ["pasteur.dz"] },
      { name: "Institut Pasteur du Maroc", global: 201, scientific: 100, support: 40, aliases: ["institut pasteur du maroc", "morocco", "ipm"], domains: ["pasteur.ma"] },
      { name: "Institut Pasteur de Tunis", global: 449, scientific: 308, support: 40, aliases: ["institut pasteur de tunis", "institut pasteur tunis", "tunis"], domains: ["pasteur.tn", "pasteur.utm.tn"] },
      { name: "Pasteur Network", global: null, scientific: null, support: null, aliases: ["pasteur network"], domains: [] }
    ];

    const PERSONAL_DOMAINS = new Set([
      'gmail.com','yahoo.com','yahoo.fr','outlook.com','hotmail.com','live.com','icloud.com','aol.com','proton.me','protonmail.com','gmx.com','mail.com','orange.fr','wanadoo.fr','free.fr'
    ]);

    // ISO 3166-1 alpha-2 → continent. Static, derived from public data — never user-generated.
    // Used by continentOf() to produce per-row `continent` for the Region/Continent dimension.
    const ISO_TO_CONTINENT = {
      // Africa
      AO:'Africa', BF:'Africa', BI:'Africa', BJ:'Africa', BW:'Africa', CD:'Africa', CF:'Africa', CG:'Africa',
      CI:'Africa', CM:'Africa', CV:'Africa', DJ:'Africa', DZ:'Africa', EG:'Africa', EH:'Africa', ER:'Africa',
      ET:'Africa', GA:'Africa', GH:'Africa', GM:'Africa', GN:'Africa', GQ:'Africa', GW:'Africa', KE:'Africa',
      KM:'Africa', LR:'Africa', LS:'Africa', LY:'Africa', MA:'Africa', MG:'Africa', ML:'Africa', MR:'Africa',
      MU:'Africa', MW:'Africa', MZ:'Africa', NA:'Africa', NE:'Africa', NG:'Africa', RE:'Africa', RW:'Africa',
      SC:'Africa', SD:'Africa', SH:'Africa', SL:'Africa', SN:'Africa', SO:'Africa', SS:'Africa', ST:'Africa',
      SZ:'Africa', TD:'Africa', TG:'Africa', TN:'Africa', TZ:'Africa', UG:'Africa', YT:'Africa', ZA:'Africa',
      ZM:'Africa', ZW:'Africa',
      // Asia
      AE:'Asia', AF:'Asia', AM:'Asia', AZ:'Asia', BD:'Asia', BH:'Asia', BN:'Asia', BT:'Asia', CN:'Asia',
      CY:'Asia', GE:'Asia', HK:'Asia', ID:'Asia', IL:'Asia', IN:'Asia', IO:'Asia', IQ:'Asia', IR:'Asia',
      JO:'Asia', JP:'Asia', KG:'Asia', KH:'Asia', KP:'Asia', KR:'Asia', KW:'Asia', KZ:'Asia', LA:'Asia',
      LB:'Asia', LK:'Asia', MM:'Asia', MN:'Asia', MO:'Asia', MV:'Asia', MY:'Asia', NP:'Asia', OM:'Asia',
      PH:'Asia', PK:'Asia', PS:'Asia', QA:'Asia', SA:'Asia', SG:'Asia', SY:'Asia', TH:'Asia', TJ:'Asia',
      TL:'Asia', TM:'Asia', TR:'Asia', TW:'Asia', UZ:'Asia', VN:'Asia', YE:'Asia',
      // Europe
      AD:'Europe', AL:'Europe', AT:'Europe', AX:'Europe', BA:'Europe', BE:'Europe', BG:'Europe', BY:'Europe',
      CH:'Europe', CZ:'Europe', DE:'Europe', DK:'Europe', EE:'Europe', ES:'Europe', FI:'Europe', FO:'Europe',
      FR:'Europe', GB:'Europe', GG:'Europe', GI:'Europe', GR:'Europe', HR:'Europe', HU:'Europe', IE:'Europe',
      IM:'Europe', IS:'Europe', IT:'Europe', JE:'Europe', LI:'Europe', LT:'Europe', LU:'Europe', LV:'Europe',
      MC:'Europe', MD:'Europe', ME:'Europe', MK:'Europe', MT:'Europe', NL:'Europe', NO:'Europe', PL:'Europe',
      PT:'Europe', RO:'Europe', RS:'Europe', RU:'Europe', SE:'Europe', SI:'Europe', SJ:'Europe', SK:'Europe',
      SM:'Europe', UA:'Europe', VA:'Europe', XK:'Europe',
      // North America
      AG:'North America', AI:'North America', AW:'North America', BB:'North America', BL:'North America',
      BM:'North America', BS:'North America', BZ:'North America', CA:'North America', CR:'North America',
      CU:'North America', CW:'North America', DM:'North America', DO:'North America', GD:'North America',
      GL:'North America', GP:'North America', GT:'North America', HN:'North America', HT:'North America',
      JM:'North America', KN:'North America', KY:'North America', LC:'North America', MF:'North America',
      MQ:'North America', MS:'North America', MX:'North America', NI:'North America', PA:'North America',
      PM:'North America', PR:'North America', SV:'North America', SX:'North America', TC:'North America',
      TT:'North America', US:'North America', VC:'North America', VG:'North America', VI:'North America',
      // South America
      AR:'South America', BO:'South America', BR:'South America', CL:'South America', CO:'South America',
      EC:'South America', FK:'South America', GF:'South America', GY:'South America', PE:'South America',
      PY:'South America', SR:'South America', UY:'South America', VE:'South America',
      // Oceania
      AS:'Oceania', AU:'Oceania', CC:'Oceania', CK:'Oceania', CX:'Oceania', FJ:'Oceania', FM:'Oceania',
      GU:'Oceania', KI:'Oceania', MH:'Oceania', MP:'Oceania', NC:'Oceania', NF:'Oceania', NR:'Oceania',
      NU:'Oceania', NZ:'Oceania', PF:'Oceania', PG:'Oceania', PN:'Oceania', PW:'Oceania', SB:'Oceania',
      TK:'Oceania', TO:'Oceania', TV:'Oceania', UM:'Oceania', VU:'Oceania', WF:'Oceania', WS:'Oceania',
      // Antarctica / Antarctic territories
      AQ:'Antarctica', BV:'Antarctica', GS:'Antarctica', HM:'Antarctica', TF:'Antarctica'
    };

    // Scientific-profile classification (see PNLINK_DATA_MODEL.md §5 — approved 2026-05-10).
    // Each row keeps a `scientificReason` string for auditability.
    const SCIENTIFIC_POSITION_RE = /(research|scientist|chercheur|scientifique|investigator|professor|pi[^a-z]|principal investigator|post-?doc|director of research|directeur de recherche|phd)/i;
    const NON_SCIENTIFIC_POSITION_RE = /(admin|communication|marketing|finance|hr |human resources|operations|it support|legal|procurement|secretar)/i;

    const REQUIRED_FIELD_HINTS = {
      email: ['Primary email'],
      invitation: ['Invitation email sent at'],
      activation: ['Account activation date'],
      lastLogin: ['Last log in date'],
      creation: ['Creation date'],
      country: ['Live Location:Country', 'Work Postal Address:Country/Region'],
      company: ['Last Job:Company:Name'],
      role: ['Role:Name'],
      score: ['Engagement Scoring:Current score'],
      affiliation: ['_7ae915fc_Which_member_of_the_Pasteur_Network_are_you_affiliated_to_']
    };

    const dashboardEl = document.getElementById('dashboard');
    const sidebarNavEl = document.getElementById('sidebarNav');
    const fileInput = document.getElementById('excelFile');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const clearFileBtn = document.getElementById('clearFileBtn');
    const fileNameLabel = document.getElementById('fileNameLabel');
    const charts = {};
    const detailModalEl = document.getElementById('detailModal');
    const detailModalTitleEl = document.getElementById('detailModalTitle');
    const detailModalMetaEl = document.getElementById('detailModalMeta');
    const detailModalBodyEl = document.getElementById('detailModalBody');
    const detailModalCloseEl = document.getElementById('detailModalClose');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavBackdropEl = document.getElementById('mobileNavBackdrop');

    let currentLang = 'en';
    let baseRows = [];
    let currentSummary = null;
    let currentFileMeta = null;
    let filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all', cluster: 'all', profileType: 'all', scientific: 'all', field: 'all', continent: 'all', activity: 'all' };
    let currentDetailRows = [];
    let currentDetailTitle = '';
    let tableSortState = { institutes: { key: 'totalUsers', dir: 'desc' }, domains: { key: 'totalUsers', dir: 'desc' }, consolidated: { key: 'realProblems', dir: 'desc' } };
    let hasBoundMultiSelectEvents = false;
    // Global-search index — rebuilt every time renderDashboard runs (cheap, ~5k items max).
    let currentSearchIndex = [];
    let sidebarScrollHandler = null;

    function openMobileSidebar() {
      document.body.classList.add('mobile-sidebar-open');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
      if (mobileNavBackdropEl) mobileNavBackdropEl.hidden = false;
    }

    function closeMobileSidebar() {
      document.body.classList.remove('mobile-sidebar-open');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
      if (mobileNavBackdropEl) mobileNavBackdropEl.hidden = true;
    }

    function toggleMobileSidebar() {
      if (document.body.classList.contains('mobile-sidebar-open')) closeMobileSidebar();
      else openMobileSidebar();
    }

    const STATIC_TEXT = {
      fr: {
        title: 'Tableau de suivi de l’engagement des utilisateurs',
        heroTitle: 'Tableau de suivi de l’engagement des utilisateurs',
        heroDescription: 'Importe un export Excel des utilisateurs PNLink pour afficher automatiquement les KPI, les alertes, les analyses par institut, les analyses par domaine email et les recommandations d’action.',
        heroInstruction: 'Depuis PNLink, exportez le fichier le plus récent via “<a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">Export history > Export all users</a>”, en cochant tous les champs.',
        toolbarImport: 'Import Excel local',
        toolbarPilotage: 'Pilotage activation & adoption',
        uploadLabel: 'Importer un export Excel',
        uploadHint: 'Le dashboard lit la première feuille du fichier et applique automatiquement les règles de calcul.',
        importLoading: 'Analyse du fichier en cours…',
        initialEmpty: 'Charge un fichier Excel pour afficher le dashboard interactif.',
        close: 'Fermer',
        clear: 'Vider',
        chooseFile: 'Choisir un fichier',
        noFile: 'Aucun fichier sélectionné',
        siteDescription: 'Portail PNLink'
      },
      en: {
        title: 'User Engagement Dashboard',
        heroTitle: 'User Engagement Dashboard',
        heroDescription: 'Import a PNLink users Excel export to automatically display KPIs, alerts, institute analysis, email domain analysis and action recommendations.',
        heroInstruction: 'From PNLink, export the most recent file via “<a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">Export history > Export all users</a>” making sure all fields are selected.',
        toolbarImport: 'Local Excel import',
        toolbarPilotage: 'Activation & adoption tracking',
        uploadLabel: 'Import an Excel export',
        uploadHint: 'The dashboard reads the first sheet of the file and automatically applies the calculation rules.',
        importLoading: 'Processing the file…',
        initialEmpty: 'Load an Excel file to display the interactive dashboard.',
        close: 'Close',
        clear: 'Clear',
        chooseFile: 'Choose file',
        noFile: 'No file selected',
        siteDescription: 'Engagement Hub'
      }
    };

    const UI_TEXT = {
      fr: {
        detail: 'Détail',
        emptySegment: 'Aucune ligne à afficher pour ce segment.',
        noUsableRows: 'Le fichier ne contient aucune ligne exploitable.',
        usersForInstituteTitle: name => `Utilisateurs — ${name}`,
        rowsForInstitute: count => `${formatInt(count)} ligne(s) pour cet institut.`,
        rowsFilter: count => `${formatInt(count)} ligne(s) — clique sur un KPI ou un graphique pour voir les utilisateurs derrière le chiffre.`,
        rowsSegment: count => `${formatInt(count)} ligne(s) — vue détaillée de ce segment.`,
        rowsDomain: count => `${formatInt(count)} ligne(s) pour ce type de domaine email.`,
        rowsGeneric: count => `${formatInt(count)} ligne(s).`,
        domainBreakdownTitle: type => `Répartition domaine — ${type}`,
        exportCsv: 'Exporter CSV',
        exportExcel: 'Exporter Excel',
        searchName: 'Recherche par nom',
        searchEmail: 'Recherche par email',
        keyMessagesTitle: 'Message clé',
        keyActivationLow: rate => `Le taux d’activation est de ${formatPct(rate)} et reste à renforcer.`,
        keyActivationGood: rate => `Le taux d’activation atteint ${formatPct(rate)}.`,
        keyInactiveRecent: pct => `${formatPct(pct)} des comptes inactifs sont encore récents.`,
        keyRealProblems: count => `${formatInt(count)} vrais problèmes demandent une relance immédiate.`,
        lastUpdateTitle: 'Dernière mise à jour',
        importedFile: 'Fichier importé',
        importDate: 'Date et heure d’import',
        fileModified: 'Dernière modification du fichier',
        notAvailable: 'Non disponible',
        globalFiltersTitle: 'Filtres globaux',
        filterHint: 'Le dashboard entier se met à jour selon les filtres choisis.',
        filterInstitution: 'Institut',
        filterCountry: 'Pays',
        filterDomainType: 'Type de domaine email',
        filterStatus: 'Statut',
        resetFilters: 'Réinitialiser les filtres',
        exportConsolidated: 'Exporter le tableau consolidé',
        all: 'Tous',
        active: 'Activé',
        inactive: 'Inactif',
        institutional: 'Institutionnel',
        personal: 'Personnel',
        unknownOther: 'Inconnu / autre',
        focusActivation: 'Activation rate',
        focusProblems: 'Real problems',
        focusActivationSub: 'Activés / total filtré',
        focusProblemsSub: 'Comptes à traiter maintenant',
        priority: 'Priorité',
        priorityGood: 'Bon',
        priorityWatch: 'À surveiller',
        priorityBad: 'Priorité',
        instituteViewTitle: 'Vue institut active',
        instituteViewSubtitle: 'Lecture simplifiée du segment actuellement filtré.',
        filteredUsers: 'Utilisateurs filtrés',
        selectedInstitute: 'Institut sélectionné',
        activeFilters: 'Filtres actifs',
        noActiveFilters: 'Aucun filtre actif',
        exportSegmentTitle: 'Export du segment courant',
        exportVisibleUsers: 'Export users visible',
        exportInstituteView: 'Export institute view',
        exportFollowUpList: 'Export follow-up list',
        followUpListTitle: 'Users needing follow-up',
        priorityScore: 'Priority',
        priorityHigh: 'High',
        priorityMedium: 'Medium',
        priorityLow: 'Low',
        filterBadgeInstitute: 'Institute',
        filterBadgeCountry: 'Country',
        filterBadgeDomain: 'Domain type',
        filterBadgeStatus: 'Status',
        clickToViewPeople: 'Cliquer pour voir les personnes',
        noInstituteViewAvailable: 'Sélectionne un institut pour activer cette vue.',
        rulesNote: "Règles : activé = date d’activation renseignée ; inactif = pas de date d’activation ; vrai problème = inactif avec invitation >90 jours, hors compte technique. Le mapping institut utilise d’abord l’affiliation, puis l’organisation déclarée, puis le domaine email. Les valeurs manquantes ne sont jamais inventées.",
        // ===== New decision-support strings =====
        executiveSummaryTitle: 'Synthèse exécutive',
        decisionInsightsTitle: 'Insights de décision',
        decisionInsightsSub: 'Recommandations générées à partir des chiffres filtrés',
        countryPerfTitle: 'Performance par pays',
        countryPerfSub: 'Basé sur la localisation déclarée par l’utilisateur',
        subnetPerfTitle: 'Performance par sous-réseau',
        subnetPerfSub: 'Basé sur la colonne SubNetworks:Title (multi-valeurs)',
        engagementTiersTitle: 'Tiers d’engagement',
        engagementTiersSub: 'Selon le nombre de visites des comptes activés',
        dataQualityTitle: 'Qualité des données',
        dataQualitySub: 'Anomalies détectées dans le fichier importé',
        tierPower: 'Power users (≥50 visites)',
        tierActive: 'Actifs (10–49 visites)',
        tierLight: 'Légers (1–9 visites)',
        tierDormant: 'Dormants (0 visite)',
        unreachableLabel: 'Injoignables',
        unreachableSub: 'Notifications désactivées + non activés',
        dormantActivatedLabel: 'Activés sans visite',
        dormantActivatedSub: 'Compte activé mais 0 connexion',
        stalePresenceLabel: 'Présence ancienne',
        stalePresenceSub: 'Pas de visite depuis 180 jours',
        notifOffLabel: 'Notifications coupées',
        notifOffSub: 'Tous canaux désactivés',
        missingEmailLabel: 'Email manquant',
        invalidEmailLabel: 'Email invalide',
        duplicateEmailLabel: 'Doublons d’email',
        missingInstitutionLabel: 'Institut non rattaché',
        missingCountryLabel: 'Pays manquant (activés)',
        noisyAffiliationLabel: 'Affiliation libre non reconnue',
        profileIncompleteLabel: 'Profils peu complets',
        countryColumn: 'Pays',
        countryCodeColumn: 'Code',
        usersColumn: 'Utilisateurs',
        activatedColumn: 'Activés',
        inactiveColumn: 'Inactifs',
        activationRateColumn: 'Taux d’activation',
        realProblemsColumn: 'Vrais problèmes',
        unreachableColumn: 'Injoignables',
        subnetColumn: 'Sous-réseau',
        exportCountrySummary: 'Exporter pays',
        exportSubnetSummary: 'Exporter sous-réseaux',
        exportDataQuality: 'Exporter anomalies',
        exportDecisionReport: 'Exporter rapport décisions',
        // Insight templates (FR)
        insightOldInvitationsTitle: 'Relances >90 jours',
        insightOldInvitations: count => `Relancer ${formatInt(count)} compte(s) invité(s) depuis plus de 90 jours et toujours inactifs.`,
        insightUnreachableTitle: 'Comptes injoignables',
        insightUnreachable: count => `${formatInt(count)} utilisateur(s) injoignable(s) (notifications désactivées + non activés) — contact direct nécessaire.`,
        insightDormantActivatedTitle: 'Activés sans aucune visite',
        insightDormantActivated: count => `${formatInt(count)} compte(s) activé(s) ne se sont jamais connectés — campagne de réactivation.`,
        insightStalePresenceTitle: 'Activés sans connexion récente',
        insightStalePresence: count => `${formatInt(count)} utilisateur(s) activé(s) sans visite depuis plus de 180 jours.`,
        insightWeakCountriesTitle: 'Pays à soutenir',
        insightWeakCountries: (count, sample) => `${formatInt(count)} pays affichent un taux d’activation < 30 % avec un volume significatif. Ex. : ${sample}.`,
        insightHeavyInstitutesTitle: 'Instituts à campagne',
        insightHeavyInstitutes: (count, sample) => `${formatInt(count)} institut(s) concentrent ≥5 invitations >90j. Ex. : ${sample}.`,
        insightDuplicatesTitle: 'Doublons d’email',
        insightDuplicates: count => `${formatInt(count)} ligne(s) avec un email en doublon — vérifier les fusions de comptes.`,
        insightNoisyAffiliationTitle: 'Affiliations à normaliser',
        insightNoisyAffiliation: count => `Le champ d’affiliation contient ${formatInt(count)} valeurs distinctes — normalisation à proposer côté PNLink.`,
        insightMissingCountryTitle: 'Pays manquants',
        insightMissingCountry: count => `${formatInt(count)} utilisateur(s) activé(s) sans pays renseigné — ciblage géographique limité.`,
        insightProfileIncompleteTitle: 'Profils peu remplis',
        insightProfileIncomplete: count => `${formatInt(count)} profil(s) activé(s) sont peu complets (< 3 champs sur 6).`,
        // Step 4 — new decision insights
        insightSlowFunnelTitle: 'Funnel d’activation lent',
        insightSlowFunnel: (p50, p90) => `Délai médian invitation→activation : ${p50} jour(s) ; 90e percentile : ${p90} jour(s) — funnel à accélérer.`,
        insightActivatedNoInvitationTitle: 'Activations sans invitation enregistrée',
        insightActivatedNoInvitation: count => `${formatInt(count)} utilisateur(s) activé(s) n’ont aucune date d’invitation lisible — vérifier la provenance.`,
        insightAmbassadorsTitle: 'Candidats ambassadeurs',
        insightAmbassadors: count => `${formatInt(count)} utilisateur(s) à profil scientifique fort, plusieurs sous-réseaux et engagement Actif/Power — campagne community.`,
        insightChurnSlippingTitle: 'Désengagement en cours',
        insightChurnSlipping: count => `${formatInt(count)} utilisateur(s) anciennement actifs glissent vers l’inactivité (90–180 jours sans connexion).`,
        insightLastJobEndedTitle: 'Poste précédent terminé',
        insightLastJobEnded: count => `${formatInt(count)} utilisateur(s) ont déclaré la fin de leur poste — signal de turnover potentiel.`,
        insightAllGoodTitle: 'Aucune alerte critique',
        insightAllGood: 'Sur ce périmètre filtré, aucun signal de décision urgent n’est détecté.',
        // ===== Step 5 — User-intelligence UI labels =====
        userProfileTitle: 'Profil utilisateur',
        userProfileSub: 'Type de profil et classification scientifique',
        profileAdminLabel: 'Admin',
        profileScientificLabel: 'Scientifique',
        profileMemberUnknownLabel: 'Membre — non précisé',
        scientificScientificLabel: 'Scientifique',
        scientificNonLabel: 'Non scientifique',
        scientificUnknownLabel: 'À vérifier',
        activityTitle: 'Activité & engagement',
        activitySub: 'Activité récente, ambassadeurs et désengagement',
        activeIn30Label: 'Actifs (30 j)',
        activeIn30Sub: 'Connectés ≤ 30 jours',
        activeIn90Label: 'Actifs (90 j)',
        activeIn90Sub: 'Connectés ≤ 90 jours',
        activeIn180Label: 'Actifs (180 j)',
        activeIn180Sub: 'Connectés ≤ 180 jours',
        ambassadorLabel: 'Candidats ambassadeurs',
        ambassadorSub: 'Sci. fort, ≥ 2 sous-réseaux, Active/Power',
        churnSlippingLabel: 'Désengagement en cours',
        churnSlippingSub: 'Anciennement actifs (90–180 j)',
        funnelTitle: 'Funnel d’activation',
        funnelSub: 'Délais invitation → activation',
        funnelP50Label: 'Médiane (jours)',
        funnelP90Label: '90e percentile (jours)',
        funnelWithin7Label: 'Activés ≤ 7 j',
        funnelWithin14Label: 'Activés ≤ 14 j',
        funnelWithin30Label: 'Activés ≤ 30 j',
        funnelSamplesSub: count => `/ ${formatInt(count)} échantillons`,
        cohortTitle: 'Cohortes par mois de création',
        cohortSub: 'Activation et rétention 90 j par cohorte',
        cohortMonthColumn: 'Mois',
        cohortCreatedColumn: 'Créés',
        cohortActivatedColumn: 'Activés',
        cohortRetention90Column: 'Actifs 90 j',
        cohortRetentionRateColumn: 'Rétention 90 j',
        continentTitle: 'Utilisateurs par continent',
        continentSub: 'Continent dérivé du code pays ISO-3166',
        continentColumn: 'Continent',
        scientificColumn: 'Scientifiques',
        clusterTitle: 'Utilisateurs par cluster',
        clusterSub: 'Sous-réseau (SubNetworks:Title, multi-valeurs)',
        clusterActiveIn90Column: 'Actifs 90 j',
        fieldTitle: 'Domaines d’expertise',
        fieldSub: 'Top 15 + long tail (Industries:Industries)',
        fieldColumn: 'Domaine',
        fieldLongTailLabel: 'Long tail (autres)',
        fieldLongTailHint: n => `${formatInt(n)} valeurs distinctes`,
        languageTitle: 'Langue de communication',
        languageSub: 'Préférence déclarée (en / fr / pt-br)',
        languageColumn: 'Langue',
        // Filter dropdown labels
        filterCluster: 'Cluster',
        filterProfileType: 'Type de profil',
        filterScientific: 'Profil scientifique',
        filterField: 'Domaine d’expertise',
        filterContinent: 'Continent',
        filterActivity: 'Activité',
        activityRecent: 'Actifs récemment',
        activityDormant: 'Non actifs récemment',
        // Filter badges
        filterBadgeCluster: 'Cluster',
        filterBadgeProfile: 'Type de profil',
        filterBadgeScientific: 'Profil sci.',
        filterBadgeField: 'Domaine',
        filterBadgeContinent: 'Continent',
        filterBadgeActivity: 'Activité',
        // Exports
        exportContinent: 'Exporter continents',
        exportField: 'Exporter domaines',
        exportLanguage: 'Exporter langues',
        exportCohort: 'Exporter cohortes',
        exportCluster: 'Exporter clusters',
        // Insight cluster Undefined
        insightUndefinedClusterTitle: 'Cluster non précisé',
        insightUndefinedCluster: (count, pct) => `${formatInt(count)} utilisateur(s) (${pct.toFixed(0)} %) ont un sous-réseau "Undefined" — l’analyse par cluster ne couvre qu’une partie de la base. À porter à PNLink pour fiabiliser la collecte.`,
        // Tooltips
        tipAmbassador: 'Profil scientifique fort + ≥ 2 sous-réseaux + Engagement Active ou Power.',
        tipChurnSlipping: 'Anciennement actifs (≥ 10 visites), dernière connexion 90–180 jours.',
        tipActiveIn30: 'Connectés sur les 30 derniers jours (parmi les activés).',
        tipActiveIn90: 'Connectés sur les 90 derniers jours (parmi les activés).',
        tipActiveIn180: 'Connectés sur les 180 derniers jours (parmi les activés).',
        tipFunnelMedian: 'Médiane du délai invitation → activation (jours).',
        tipFunnelP90: '90 % des utilisateurs activés le font en moins de ce nombre de jours.',
        tipFunnelWithin: 'Nombre d’utilisateurs activés dans le délai indiqué après leur invitation.',
        tipProfileType: 'Admin = rôle « full access ». Scientifique = règle ORCID/RG/PubMed/Scholar/Academia OU mot-clé scientifique sur le poste. Sinon Membre — non précisé.',
        tipScientific: 'Profil scientifique selon ORCID / ResearchGate / PubMed / Google Scholar / Academia.edu OU mots-clés (chercheur, scientist, post-doc, PI, professor, PhD, …). Sinon "À vérifier".',
        // Étape D — exports orientés action
        exportPlaybookBtn: 'Exporter playbook outreach',
        exportDataQualityReport: 'Exporter rapport qualité données',
        // Reasons / actions for the outreach playbook (used by getOutreachReasonAndAction)
        reasonRealProblem: 'Inactif >90 jours après invitation',
        reasonNeverLogged: 'Activé sans s’être connecté',
        reasonLongInactive: 'Sans connexion depuis >180 jours',
        reasonUnreachable: 'Notifications coupées + non activé',
        reasonInvitedAging: 'Invitation entre 31 et 90 jours, toujours inactif',
        reasonInvitedOld: 'Invitation >90 jours, toujours inactif',
        reasonChurnSlipping: 'Anciennement actif (90–180 j sans connexion)',
        reasonAmbassador: 'Profil scientifique fort, multi-réseaux, haute activité',
        actionRelance90: 'Relance ciblée + offre d’aide à l’activation',
        actionOnboarding: 'Email d’onboarding personnalisé',
        actionReengage: 'Email de réactivation',
        actionDirectContact: 'Contact direct (téléphone ou autre canal)',
        actionFollowUpAging: 'Relance ferme + question sur le blocage',
        actionAmbassador: 'Nomination ambassadeur / sollicitation contenu',
        actionFollowUpNormal: 'Suivi normal',
        // Recherche globale
        searchTitle: 'Recherche globale',
        searchSub: 'Personne, institut, cluster, pays, continent, domaine, langue, cohorte',
        searchPlaceholder: 'Tapez au moins 2 caractères…',
        searchNoResults: 'Aucun résultat',
        searchType_user: 'Personnes',
        searchType_institute: 'Instituts',
        searchType_cluster: 'Clusters',
        searchType_country: 'Pays',
        searchType_continent: 'Continents',
        searchType_field: 'Domaines d’expertise',
        searchType_language: 'Langues',
        searchType_cohort: 'Cohortes',
        searchUsersSub: count => `${formatInt(count)} utilisateur(s)`,
        searchOnePerson: '1 personne',
        execSummary: ({ total, active, rate, invitedOld, realProblems, unreachable, dormant, topCountry, topInstitute }) =>
          `${total} utilisateurs sur ce périmètre, dont ${active} activés (${rate}). ${invitedOld} invitations >90j sans activation et ${realProblems} vrais problèmes nécessitent une action. ${unreachable} comptes sont injoignables (notifications coupées + non activés) et ${dormant} comptes activés ne se sont jamais connectés. Top volume : ${topInstitute} ; pays principal : ${topCountry}.`
      },
      en: {
        detail: 'Detail',
        emptySegment: 'No rows to display for this segment.',
        noUsableRows: 'The file does not contain any usable rows.',
        usersForInstituteTitle: name => `Users — ${name}`,
        rowsForInstitute: count => `${formatInt(count)} row(s) for this institute.`,
        rowsFilter: count => `${formatInt(count)} row(s) — click a KPI or a chart to see the users behind the figure.`,
        rowsSegment: count => `${formatInt(count)} row(s) — detailed view for this segment.`,
        rowsDomain: count => `${formatInt(count)} row(s) for this email domain type.`,
        rowsGeneric: count => `${formatInt(count)} row(s).`,
        domainBreakdownTitle: type => `Domain breakdown — ${type}`,
        exportCsv: 'Export CSV',
        exportExcel: 'Export Excel',
        searchName: 'Search by name',
        searchEmail: 'Search by email',
        keyMessagesTitle: 'Key message',
        keyActivationLow: rate => `Activation rate is ${formatPct(rate)} and remains low.`,
        keyActivationGood: rate => `Activation rate reaches ${formatPct(rate)}.`,
        keyInactiveRecent: pct => `${formatPct(pct)} of inactive accounts are still recent.`,
        keyRealProblems: count => `${formatInt(count)} real problems need follow-up now.`,
        lastUpdateTitle: 'Last update',
        importedFile: 'Imported file',
        importDate: 'Import date and time',
        fileModified: 'File last modified',
        notAvailable: 'Not available',
        globalFiltersTitle: 'Global filters',
        filterHint: 'The whole dashboard updates according to the selected filters.',
        filterInstitution: 'Institute',
        filterCountry: 'Country',
        filterDomainType: 'Email domain type',
        filterStatus: 'Status',
        resetFilters: 'Reset filters',
        exportConsolidated: 'Export consolidated table',
        all: 'All',
        active: 'Active',
        inactive: 'Inactive',
        institutional: 'Institutional',
        personal: 'Personal',
        unknownOther: 'Unknown / other',
        focusActivation: 'Activation rate',
        focusProblems: 'Real problems',
        focusActivationSub: 'Active / filtered total',
        focusProblemsSub: 'Accounts to handle now',
        priority: 'Priority',
        priorityGood: 'Good',
        priorityWatch: 'Watch',
        priorityBad: 'Priority',
        instituteViewTitle: 'Active institute view',
        instituteViewSubtitle: 'Simplified reading of the currently filtered segment.',
        filteredUsers: 'Filtered users',
        selectedInstitute: 'Selected institute',
        activeFilters: 'Active filters',
        noActiveFilters: 'No active filter',
        exportSegmentTitle: 'Export current segment',
        exportVisibleUsers: 'Export users visible',
        exportInstituteView: 'Export institute view',
        exportFollowUpList: 'Export follow-up list',
        followUpListTitle: 'Users needing follow-up',
        priorityScore: 'Priority',
        priorityHigh: 'High',
        priorityMedium: 'Medium',
        priorityLow: 'Low',
        filterBadgeInstitute: 'Institute',
        filterBadgeCountry: 'Country',
        filterBadgeDomain: 'Domain type',
        filterBadgeStatus: 'Status',
        clickToViewPeople: 'Click to view people',
        noInstituteViewAvailable: 'Select one institute to enable this view.',
        rulesNote: "Rules: active = activation date filled in; inactive = no activation date; real problem = inactive with invitation >90 days, excluding technical accounts. Institute mapping uses affiliation first, then declared organization, then email domain. Missing values are never invented.",
        // ===== New decision-support strings =====
        executiveSummaryTitle: 'Executive summary',
        decisionInsightsTitle: 'Decision insights',
        decisionInsightsSub: 'Recommendations generated from the filtered numbers',
        countryPerfTitle: 'Country performance',
        countryPerfSub: 'Based on the user-declared Live Location',
        subnetPerfTitle: 'Sub-network performance',
        subnetPerfSub: 'Based on the SubNetworks:Title column (multi-value)',
        engagementTiersTitle: 'Engagement tiers',
        engagementTiersSub: 'Based on Count of visits for activated users',
        dataQualityTitle: 'Data quality',
        dataQualitySub: 'Anomalies detected in the imported file',
        tierPower: 'Power users (≥50 visits)',
        tierActive: 'Active (10–49 visits)',
        tierLight: 'Light (1–9 visits)',
        tierDormant: 'Dormant (0 visit)',
        unreachableLabel: 'Unreachable',
        unreachableSub: 'Notifications off + not activated',
        dormantActivatedLabel: 'Activated, never used',
        dormantActivatedSub: 'Activated account but 0 visit',
        stalePresenceLabel: 'Stale presence',
        stalePresenceSub: 'No visit in the last 180 days',
        notifOffLabel: 'Notifications off',
        notifOffSub: 'All channels disabled',
        missingEmailLabel: 'Missing email',
        invalidEmailLabel: 'Invalid email',
        duplicateEmailLabel: 'Duplicate emails',
        missingInstitutionLabel: 'Unmapped institute',
        missingCountryLabel: 'Missing country (activated)',
        noisyAffiliationLabel: 'Free-text affiliation not recognized',
        profileIncompleteLabel: 'Incomplete profiles',
        countryColumn: 'Country',
        countryCodeColumn: 'Code',
        usersColumn: 'Users',
        activatedColumn: 'Activated',
        inactiveColumn: 'Inactive',
        activationRateColumn: 'Activation rate',
        realProblemsColumn: 'Real problems',
        unreachableColumn: 'Unreachable',
        subnetColumn: 'Sub-network',
        exportCountrySummary: 'Export country summary',
        exportSubnetSummary: 'Export sub-networks',
        exportDataQuality: 'Export data quality issues',
        exportDecisionReport: 'Export decision report',
        // Insight templates (EN)
        insightOldInvitationsTitle: 'Follow up >90 days',
        insightOldInvitations: count => `Follow up with ${formatInt(count)} account(s) invited more than 90 days ago and still inactive.`,
        insightUnreachableTitle: 'Unreachable accounts',
        insightUnreachable: count => `${formatInt(count)} user(s) are unreachable (notifications off + not activated) — direct contact required.`,
        insightDormantActivatedTitle: 'Activated, never used',
        insightDormantActivated: count => `${formatInt(count)} activated account(s) have never logged in — re-engagement campaign needed.`,
        insightStalePresenceTitle: 'Stale activated users',
        insightStalePresence: count => `${formatInt(count)} activated user(s) have no visit in the last 180 days.`,
        insightWeakCountriesTitle: 'Countries needing support',
        insightWeakCountries: (count, sample) => `${formatInt(count)} country(ies) show an activation rate below 30 % with meaningful volume. e.g. ${sample}.`,
        insightHeavyInstitutesTitle: 'Institutes for campaigns',
        insightHeavyInstitutes: (count, sample) => `${formatInt(count)} institute(s) concentrate ≥5 invitations >90 days. e.g. ${sample}.`,
        insightDuplicatesTitle: 'Duplicate emails',
        insightDuplicates: count => `${formatInt(count)} row(s) with a duplicate email — review account merges.`,
        insightNoisyAffiliationTitle: 'Affiliation to normalize',
        insightNoisyAffiliation: count => `The affiliation field contains ${formatInt(count)} distinct values — normalization should be raised with PNLink.`,
        insightMissingCountryTitle: 'Missing country',
        insightMissingCountry: count => `${formatInt(count)} activated user(s) have no country set — geographic targeting is limited.`,
        insightProfileIncompleteTitle: 'Sparse profiles',
        insightProfileIncomplete: count => `${formatInt(count)} activated profile(s) are sparse (< 3 fields out of 6).`,
        // Step 4 — new decision insights
        insightSlowFunnelTitle: 'Slow activation funnel',
        insightSlowFunnel: (p50, p90) => `Median invitation→activation lag is ${p50} day(s); 90th percentile is ${p90} day(s) — funnel is slow.`,
        insightActivatedNoInvitationTitle: 'Activations without invitation',
        insightActivatedNoInvitation: count => `${formatInt(count)} activated user(s) have no parseable invitation date — review provenance.`,
        insightAmbassadorsTitle: 'Ambassador candidates',
        insightAmbassadors: count => `${formatInt(count)} user(s) with a strong scientific profile, multiple sub-networks and Active/Power engagement — community campaign.`,
        insightChurnSlippingTitle: 'Slipping engagement',
        insightChurnSlipping: count => `${formatInt(count)} formerly-active user(s) are slipping toward inactivity (90–180 days since last login).`,
        insightLastJobEndedTitle: 'Previous job ended',
        insightLastJobEnded: count => `${formatInt(count)} user(s) declared an end date on their last position — potential turnover signal.`,
        insightAllGoodTitle: 'No critical alert',
        insightAllGood: 'No urgent decision signal detected on the current filtered scope.',
        // ===== Step 5 — User-intelligence UI labels =====
        userProfileTitle: 'User profile',
        userProfileSub: 'Profile type and scientific classification',
        profileAdminLabel: 'Admin',
        profileScientificLabel: 'Scientific',
        profileMemberUnknownLabel: 'Member — Unknown',
        scientificScientificLabel: 'Scientific',
        scientificNonLabel: 'Non-scientific',
        scientificUnknownLabel: 'To verify',
        activityTitle: 'Activity & engagement',
        activitySub: 'Recent activity, ambassadors and slipping users',
        activeIn30Label: 'Active (30 d)',
        activeIn30Sub: 'Logged in ≤ 30 days',
        activeIn90Label: 'Active (90 d)',
        activeIn90Sub: 'Logged in ≤ 90 days',
        activeIn180Label: 'Active (180 d)',
        activeIn180Sub: 'Logged in ≤ 180 days',
        ambassadorLabel: 'Ambassador candidates',
        ambassadorSub: 'Strong sci., ≥ 2 sub-networks, Active/Power',
        churnSlippingLabel: 'Slipping engagement',
        churnSlippingSub: 'Formerly active, drifting (90–180 d)',
        funnelTitle: 'Activation funnel',
        funnelSub: 'Invitation → activation lag',
        funnelP50Label: 'Median (days)',
        funnelP90Label: '90th percentile (days)',
        funnelWithin7Label: 'Activated ≤ 7 d',
        funnelWithin14Label: 'Activated ≤ 14 d',
        funnelWithin30Label: 'Activated ≤ 30 d',
        funnelSamplesSub: count => `/ ${formatInt(count)} samples`,
        cohortTitle: 'Cohorts by creation month',
        cohortSub: 'Activation and 90-day retention by cohort',
        cohortMonthColumn: 'Month',
        cohortCreatedColumn: 'Created',
        cohortActivatedColumn: 'Activated',
        cohortRetention90Column: 'Active 90 d',
        cohortRetentionRateColumn: '90-day retention',
        continentTitle: 'Users by continent',
        continentSub: 'Continent derived from ISO-3166 country code',
        continentColumn: 'Continent',
        scientificColumn: 'Scientific',
        clusterTitle: 'Users by cluster',
        clusterSub: 'Sub-network (SubNetworks:Title, multi-value)',
        clusterActiveIn90Column: 'Active 90 d',
        fieldTitle: 'Fields of expertise',
        fieldSub: 'Top 15 + long tail (Industries:Industries)',
        fieldColumn: 'Field',
        fieldLongTailLabel: 'Long tail (other)',
        fieldLongTailHint: n => `${formatInt(n)} distinct values`,
        languageTitle: 'Communication language',
        languageSub: 'Declared preference (en / fr / pt-br)',
        languageColumn: 'Language',
        // Filter dropdown labels
        filterCluster: 'Cluster',
        filterProfileType: 'Profile type',
        filterScientific: 'Scientific profile',
        filterField: 'Field of expertise',
        filterContinent: 'Continent',
        filterActivity: 'Activity',
        activityRecent: 'Recently active',
        activityDormant: 'Not recently active',
        // Filter badges
        filterBadgeCluster: 'Cluster',
        filterBadgeProfile: 'Profile',
        filterBadgeScientific: 'Scientific',
        filterBadgeField: 'Field',
        filterBadgeContinent: 'Continent',
        filterBadgeActivity: 'Activity',
        // Exports
        exportContinent: 'Export continents',
        exportField: 'Export fields',
        exportLanguage: 'Export languages',
        exportCohort: 'Export cohorts',
        exportCluster: 'Export clusters',
        // Undefined-cluster insight
        insightUndefinedClusterTitle: 'Undefined cluster',
        insightUndefinedCluster: (count, pct) => `${formatInt(count)} user(s) (${pct.toFixed(0)} %) have a sub-network value of "Undefined" — cluster-based analysis only covers part of the base. Worth raising with PNLink to fix collection.`,
        // Tooltips
        tipAmbassador: 'Strong scientific profile + ≥ 2 sub-networks + Active or Power engagement.',
        tipChurnSlipping: 'Formerly active (≥ 10 visits), last login 90–180 days ago.',
        tipActiveIn30: 'Logged in within the last 30 days (among activated users).',
        tipActiveIn90: 'Logged in within the last 90 days (among activated users).',
        tipActiveIn180: 'Logged in within the last 180 days (among activated users).',
        tipFunnelMedian: 'Median invitation → activation delay (days).',
        tipFunnelP90: '90 % of activated users do so within this number of days.',
        tipFunnelWithin: 'Number of users activated within the given delay after their invitation.',
        tipProfileType: 'Admin = role "full access". Scientific = ORCID/RG/PubMed/Scholar/Academia rule OR scientific keyword on position. Else Member — Unknown.',
        tipScientific: 'Scientific profile via ORCID / ResearchGate / PubMed / Google Scholar / Academia.edu OR keywords (researcher, scientist, post-doc, PI, professor, PhD, …). Else "To verify".',
        // Étape D — action-oriented exports
        exportPlaybookBtn: 'Export outreach playbook',
        exportDataQualityReport: 'Export data quality report',
        reasonRealProblem: 'Inactive >90 days after invitation',
        reasonNeverLogged: 'Activated but never logged in',
        reasonLongInactive: 'No login in >180 days',
        reasonUnreachable: 'Notifications off + not activated',
        reasonInvitedAging: 'Invitation 31–90 days, still inactive',
        reasonInvitedOld: 'Invitation >90 days, still inactive',
        reasonChurnSlipping: 'Formerly active, slipping (90–180 d)',
        reasonAmbassador: 'Strong scientific profile, multi-network, active',
        actionRelance90: 'Targeted follow-up + activation help',
        actionOnboarding: 'Personalized onboarding email',
        actionReengage: 'Re-engagement email',
        actionDirectContact: 'Direct contact (phone or other channel)',
        actionFollowUpAging: 'Firm follow-up + ask about blockers',
        actionAmbassador: 'Ambassador nomination / content solicitation',
        actionFollowUpNormal: 'Normal follow-up',
        // Global search
        searchTitle: 'Global search',
        searchSub: 'Person, institute, cluster, country, continent, field, language, cohort',
        searchPlaceholder: 'Type at least 2 characters…',
        searchNoResults: 'No results',
        searchType_user: 'People',
        searchType_institute: 'Institutes',
        searchType_cluster: 'Clusters',
        searchType_country: 'Countries',
        searchType_continent: 'Continents',
        searchType_field: 'Fields of expertise',
        searchType_language: 'Languages',
        searchType_cohort: 'Cohorts',
        searchUsersSub: count => `${formatInt(count)} user(s)`,
        searchOnePerson: '1 person',
        execSummary: ({ total, active, rate, invitedOld, realProblems, unreachable, dormant, topCountry, topInstitute }) =>
          `${total} users on this scope, ${active} of which are activated (${rate}). ${invitedOld} invitations older than 90 days with no activation and ${realProblems} real problems require action. ${unreachable} accounts are unreachable (notifications off + not activated) and ${dormant} activated users have never logged in. Top volume: ${topInstitute}; main country: ${topCountry}.`
      }
    };

    function tUI(key, ...args) {
      const pack = UI_TEXT[currentLang] || UI_TEXT.en;
      const value = pack[key];
      return decodeUiValue(typeof value === 'function' ? value(...args) : value);
    }

    const BUSINESS_TEXT = {
      status: {
        'Données incomplètes': { en: 'Incomplete data', fr: 'Données incomplètes' },
        'Bon': { en: 'Good', fr: 'Bon' },
        'Moyen': { en: 'Watch', fr: 'Moyen' },
        'Faible': { en: 'Low', fr: 'Faible' },
        'À vérifier': { en: 'To review', fr: 'À vérifier' }
      },
      action: {
        'Suivi normal': { en: 'Normal follow-up', fr: 'Suivi normal' },
        'Relance ciblée >90 jours': { en: 'Targeted follow-up >90 days', fr: 'Relance ciblée >90 jours' },
        'Campagne d’activation prioritaire': { en: 'Priority activation campaign', fr: 'Campagne d’activation prioritaire' },
        'Améliorer la collecte d’affiliation': { en: 'Improve affiliation data collection', fr: 'Améliorer la collecte d’affiliation' }
      },
      mappingConfidence: {
        'Fort': { en: 'High', fr: 'Fort' },
        'Moyen': { en: 'Medium', fr: 'Moyen' },
        'Faible': { en: 'Low', fr: 'Faible' },
        'Fort/Moyen': { en: 'High/Medium', fr: 'Fort/Moyen' }
      },
      mappingSource: {
        'Affiliation': { en: 'Affiliation', fr: 'Affiliation' },
        'Organisation déclarée': { en: 'Declared organization', fr: 'Organisation déclarée' },
        'Domaine email': { en: 'Email domain', fr: 'Domaine email' },
        'Aucun indice fiable': { en: 'No reliable signal', fr: 'Aucun indice fiable' }
      },
      invitationBucket: {
        'Jamais envoyée': { en: 'Never sent', fr: 'Jamais envoyée' },
        '≤30 jours': { en: '≤30 days', fr: '≤30 jours' },
        '31–90 jours': { en: '31–90 days', fr: '31–90 jours' },
        '>90 jours': { en: '>90 days', fr: '>90 jours' },
        'N/A': { en: 'N/A', fr: 'N/A' }
      },
      alerts: {
        activationGoodTitle: { en: 'Strong activation momentum', fr: 'Bonne dynamique d’activation' },
        activationGoodText: rate => currentLang === 'fr'
          ? `Le taux d’activation global atteint ${formatPct(rate)}.`
          : `Overall activation rate reaches ${formatPct(rate)}.`,
        activationWarnTitle: { en: 'Overall activation needs attention', fr: 'Activation globale à renforcer' },
        activationWarnText: rate => currentLang === 'fr'
          ? `Le taux d’activation global est de ${formatPct(rate)}, ce qui laisse une marge importante d’amélioration.`
          : `Overall activation rate is ${formatPct(rate)}, which leaves significant room for improvement.`,
        realProblemsTitle: { en: 'Accounts to handle immediately', fr: 'Comptes à traiter immédiatement' },
        realProblemsText: count => currentLang === 'fr'
          ? `${formatInt(count)} utilisateurs sont inactifs depuis plus de 90 jours après invitation.`
          : `${formatInt(count)} users remain inactive more than 90 days after invitation.`
      },
      recommendations: {
        oldAccountsTitle: { en: 'Follow up accounts >90 days', fr: 'Relancer les comptes >90 jours' },
        oldAccountsText: count => currentLang === 'fr'
          ? `${formatInt(count)} comptes sont à traiter en priorité car ils restent non activés malgré une invitation ancienne.`
          : `${formatInt(count)} accounts require priority follow-up because they remain inactive despite an old invitation.`,
        technicalTitle: { en: 'Clean technical or inconsistent accounts', fr: 'Nettoyer les comptes techniques ou incohérents' },
        technicalText: count => currentLang === 'fr'
          ? `${formatInt(count)} lignes présentent des signaux de doublon, email invalide ou compte test/système.`
          : `${formatInt(count)} rows show duplicate, invalid email, or test/system account signals.`,
        affiliationTitle: { en: 'Improve institute affiliation capture', fr: 'Améliorer la collecte de l’affiliation institut' },
        affiliationText: count => currentLang === 'fr'
          ? `${formatInt(count)} comptes sans affiliation explicite limitent la qualité de pilotage réseau.`
          : `${formatInt(count)} accounts without explicit affiliation reduce network monitoring quality.`
      }
    };

    function localizeBusinessText(group, value) {
      const pack = BUSINESS_TEXT[group] || {};
      const entry = pack[value];
      return decodeUiValue(entry ? (entry[currentLang] || entry.en || value) : value);
    }

    function localizeBusinessComputed(group, key, ...args) {
      const pack = BUSINESS_TEXT[group] || {};
      const entry = pack[key];
      if (!entry) return '';
      if (typeof entry === 'function') return entry(...args);
      return entry[currentLang] || entry.en || '';
    }

    selectFileBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    clearFileBtn.addEventListener('click', clearLoadedFile);
    detailModalCloseEl.addEventListener('click', closeDetailModal);
    detailModalEl.addEventListener('click', event => { if (event.target === detailModalEl) closeDetailModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && detailModalEl.classList.contains('open')) closeDetailModal(); });
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
    if (mobileNavBackdropEl) mobileNavBackdropEl.addEventListener('click', closeMobileSidebar);
    window.addEventListener('resize', () => { if (window.innerWidth > 880) closeMobileSidebar(); });

    if (typeof window.XLSX === "undefined") {
      dashboardEl.innerHTML = `<div class="empty">SheetJS (XLSX) could not be loaded. Check <code>assets/vendor/xlsx.full.min.js</code> or internet access for CDN fallback.</div>`;
      throw new Error("XLSX library not loaded");
    }

    if (typeof window.Chart === "undefined") {
      dashboardEl.innerHTML = `<div class="empty">Chart.js could not be loaded. Check <code>assets/vendor/chart.umd.js</code> or internet access for CDN fallback.</div>`;
      throw new Error("Chart library not loaded");
    }
    updateStaticTexts();
    renderEmptyState();

    function updateStaticTexts() {
      const langPack = STATIC_TEXT[currentLang];
      document.documentElement.lang = currentLang;
      document.title = langPack.title;
      const ids = {
        heroTitle: langPack.heroTitle,
        heroDescription: langPack.heroDescription,
        toolbarImportPill: langPack.toolbarImport,
        toolbarPilotagePill: langPack.toolbarPilotage,
        uploadLabel: langPack.uploadLabel,
        uploadHint: langPack.uploadHint,
        importSpinnerLabel: langPack.importLoading,
        detailModalClose: langPack.close,
        clearFileBtn: langPack.clear,
        selectFileBtn: langPack.chooseFile,
        fileNameLabel: fileInput.files && fileInput.files[0] ? fileInput.files[0].name : langPack.noFile,
        siteDescription: langPack.siteDescription
      };
      Object.entries(ids).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      });
      const heroInstructionEl = document.getElementById('heroInstruction');
      if (heroInstructionEl) heroInstructionEl.innerHTML = langPack.heroInstruction;
      document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === currentLang));
    }

    function setLanguage(lang) {
      currentLang = lang === 'fr' ? 'fr' : 'en';
      updateStaticTexts();
      if (baseRows.length) applyFiltersAndRender();
      else renderEmptyState();
      if (detailModalEl.classList.contains('open')) rerenderCurrentDetail();
    }

    function normalize(value) {
      return String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/&#39;/g, "'")
        .replace(/[^a-z0-9@.\-\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function parseExcelDate(value) {
      if (value === null || value === undefined || value === '') return null;
      if (value instanceof Date && !isNaN(value)) return value;
      if (typeof value === 'number') {
        const utcDays = Math.floor(value - 25569);
        return new Date(utcDays * 86400 * 1000);
      }
      const date = new Date(String(value).trim());
      return isNaN(date) ? null : date;
    }

    function daysBetween(dateA, dateB = new Date()) {
      if (!dateA) return null;
      return Math.floor((dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24));
    }

    function continentOf(countryCode) {
      if (!countryCode) return '';
      return ISO_TO_CONTINENT[String(countryCode).trim().toUpperCase()] || '';
    }

    // Scientific classification — see PNLINK_DATA_MODEL.md §5.
    // Returns { profile, reason } so a row carrying this result is auditable in the modal drill-down.
    function classifyScientific(position, signals) {
      const strongHits = [];
      if (signals.hasOrcid) strongHits.push('ORCID');
      if (signals.hasResearchGate) strongHits.push('ResearchGate');
      if (signals.hasPubMed) strongHits.push('PubMed');
      if (signals.hasScholar) strongHits.push('Google Scholar');
      if (signals.hasAcademia) strongHits.push('Academia.edu');
      const positionScientific = !!position && SCIENTIFIC_POSITION_RE.test(position);
      const positionNonScientific = !!position && NON_SCIENTIFIC_POSITION_RE.test(position);
      if (strongHits.length > 0) {
        return { profile: 'Scientific', reason: 'Academic profile: ' + strongHits.join(', ') };
      }
      if (positionScientific) {
        const m = position.match(SCIENTIFIC_POSITION_RE);
        return { profile: 'Scientific', reason: 'Position keyword: ' + (m ? m[0] : '') };
      }
      if (positionNonScientific) {
        const m = position.match(NON_SCIENTIFIC_POSITION_RE);
        return { profile: 'Non-scientific', reason: 'Position keyword: ' + (m ? m[0] : '') };
      }
      return { profile: 'Unknown / To verify', reason: position ? 'No scientific signal' : 'No position, no academic profile' };
    }

    function visitRecencyBucketOf(days) {
      if (days === null || days === undefined) return 'No visit recorded';
      if (days <= 30) return '0-30 days';
      if (days <= 60) return '31-60 days';
      if (days <= 90) return '61-90 days';
      if (days <= 180) return '91-180 days';
      if (days <= 365) return '181-365 days';
      return '365+ days';
    }

    function cohortMonthOf(date) {
      if (!date || !(date instanceof Date) || isNaN(date)) return '';
      const y = date.getUTCFullYear();
      const m = String(date.getUTCMonth() + 1).padStart(2, '0');
      return y + '-' + m;
    }

    function findField(columns, logicalName) {
      const options = REQUIRED_FIELD_HINTS[logicalName] || [];
      for (const wanted of options) if (columns.includes(wanted)) return wanted;
      const normalizedColumns = columns.map(c => ({ original: c, n: normalize(c) }));
      const normalizedWanted = options.map(normalize);
      for (const candidate of normalizedColumns) if (normalizedWanted.includes(candidate.n)) return candidate.original;
      return null;
    }

    function safeNumber(value) {
      const n = Number(value);
      return Number.isFinite(n) ? n : null;
    }

    function parseBool(value) {
      if (value === true) return true;
      if (value === false || value === null || value === undefined) return false;
      const s = String(value).trim().toLowerCase();
      return s === 'true' || s === '1' || s === 'yes' || s === 'oui';
    }

    function getDomain(email) {
      if (!email) return '';
      const match = String(email).toLowerCase().trim().match(/@([^@]+)$/);
      return match ? match[1] : '';
    }

    function isInvitationBucket(value, variants) {
      const current = normalize(decodeMojibakeText(value || ''));
      return variants.some(variant => current === normalize(decodeMojibakeText(variant)));
    }

    function isInvitedRecentBucket(value) {
      return isInvitationBucket(value, ['≤30 jours', 'â‰¤30 jours']);
    }

    function isInvitedAgingBucket(value) {
      return isInvitationBucket(value, ['31–90 jours', '31â€“90 jours']);
    }

    function isNeverInvitedBucket(value) {
      return isInvitationBucket(value, ['Jamais envoyée', 'Jamais envoyÃ©e']);
    }

    function isTestOrSystem(row, email, company, role) {
      const hay = normalize([email, company, role, row['First name'], row['Last name']].join(' '));
      return ['test', 'demo', 'sample', 'admin', 'system', 'fake', 'dummy', 'noreply', 'do not use'].some(token => hay.includes(token));
    }

    function isEmailValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
    }

    function classifyDomain(domain) {
      if (!domain) return 'Inconnu / autre';
      if (PERSONAL_DOMAINS.has(domain)) return 'Personnel';
      if (domain.includes('pasteur') || domain.includes('fiocruz') || domain.includes('inrs') || domain.includes('hku') || domain.includes('sciensano') || domain.includes('nihe') || domain.includes('microbio')) return 'Institutionnel';
      if (domain.includes('.org') || domain.includes('.edu') || domain.includes('.ac.') || domain.includes('.gov') || domain.includes('.int')) return 'Institutionnel';
      return 'Inconnu / autre';
    }

    function mapInstitution(affiliation, company, domain) {
      const textAff = normalize(affiliation);
      const textCompany = normalize(company);
      const textDomain = normalize(domain);
      for (const ref of STAFF_REFERENCE) {
        if (textAff && (normalize(ref.name) === textAff || ref.aliases.some(a => textAff.includes(normalize(a))))) return { name: ref.name, confidence: 'Fort', source: 'Affiliation', ref };
      }
      for (const ref of STAFF_REFERENCE) {
        if (textCompany && (normalize(ref.name) === textCompany || ref.aliases.some(a => textCompany.includes(normalize(a))))) return { name: ref.name, confidence: 'Moyen', source: 'Organisation déclarée', ref };
      }
      for (const ref of STAFF_REFERENCE) {
        if (textDomain && ref.domains.some(d => textDomain === normalize(d))) return { name: ref.name, confidence: 'Moyen', source: 'Domaine email', ref };
      }
      return { name: 'Non rattaché', confidence: 'Faible', source: 'Aucun indice fiable', ref: null };
    }

    function formatInt(value) {
      return new Intl.NumberFormat('fr-FR').format(value || 0);
    }

    function formatPct(value) {
      if (value === null || value === undefined || isNaN(value)) return '—';
      return `${Number(value).toFixed(1)} %`;
    }

    function formatDateTime(value) {
      if (!value) return tUI('notAvailable');
      const d = value instanceof Date ? value : new Date(value);
      if (isNaN(d)) return tUI('notAvailable');
      return d.toLocaleString(currentLang === 'fr' ? 'fr-FR' : 'en-GB');
    }

    function decodeMojibakeText(text) {
      if (typeof text !== 'string' || !text) return text;
      return text
        .replace(/â€™/g, '’')
        .replace(/â€˜/g, '‘')
        .replace(/â€œ/g, '“')
        .replace(/â€/g, '”')
        .replace(/â€“/g, '–')
        .replace(/â€”/g, '—')
        .replace(/â€¦/g, '…')
        .replace(/â€¢/g, '•')
        .replace(/â†’/g, '→')
        .replace(/â†/g, '←')
        .replace(/â‰¥/g, '≥')
        .replace(/â‰¤/g, '≤')
        .replace(/â‰ /g, '≠')
        .replace(/â–²/g, '▲')
        .replace(/â–¼/g, '▼')
        .replace(/Â«/g, '«')
        .replace(/Â»/g, '»')
        .replace(/Â·/g, '·')
        .replace(/Â§/g, '§')
        .replace(/Ã€/g, 'À')
        .replace(/Ã‚/g, 'Â')
        .replace(/Ã‡/g, 'Ç')
        .replace(/Ãˆ/g, 'È')
        .replace(/Ã‰/g, 'É')
        .replace(/ÃŠ/g, 'Ê')
        .replace(/ÃŽ/g, 'Î')
        .replace(/Ã”/g, 'Ô')
        .replace(/Ã™/g, 'Ù')
        .replace(/Ã›/g, 'Û')
        .replace(/Ãœ/g, 'Ü')
        .replace(/Ã /g, 'à')
        .replace(/Ã¡/g, 'á')
        .replace(/Ã¢/g, 'â')
        .replace(/Ã£/g, 'ã')
        .replace(/Ã§/g, 'ç')
        .replace(/Ã¨/g, 'è')
        .replace(/Ã©/g, 'é')
        .replace(/Ãª/g, 'ê')
        .replace(/Ã«/g, 'ë')
        .replace(/Ã´/g, 'ô')
        .replace(/Ã¶/g, 'ö')
        .replace(/Ã¹/g, 'ù')
        .replace(/Ã»/g, 'û')
        .replace(/Ã¼/g, 'ü')
        .replace(/Ã±/g, 'ñ')
        .replace(/Ã/g, 'à');
    }

    function decodeUiValue(value) {
      if (typeof value === 'string') return decodeMojibakeText(value);
      if (Array.isArray(value)) return value.map(decodeUiValue);
      return value;
    }

    function escapeHtml(text) {
      return String(decodeMojibakeText(text ?? ''))
        .replace(/â€”/g, '-')
        .replace(/â€“/g, '-')
        .replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
    }

    function destroyCharts() {
      Object.values(charts).forEach(chart => chart && chart.destroy && chart.destroy());
      Object.keys(charts).forEach(key => delete charts[key]);
    }

    function getColumnValueCaseInsensitive(row, candidates) {
      const keys = Object.keys(row || {});
      for (const candidate of candidates) {
        const direct = keys.find(k => normalize(k) === normalize(candidate));
        if (direct && row[direct] !== undefined && row[direct] !== null && String(row[direct]).trim() !== '') return String(row[direct]).trim();
      }
      return '';
    }

    function priorityClass(label) {
      const text = normalize(label);
      if (text.includes('bon') || text.includes('good')) return 'priority-good';
      if (text.includes('priorite') || text.includes('priority')) return 'priority-bad';
      return 'priority-watch';
    }

    function priorityLabel(item) {
      if (item.realProblems > 0 || (item.activationRate || 0) < 35) return tUI('priorityBad');
      if ((item.activationRate || 0) < 55) return tUI('priorityWatch');
      return tUI('priorityGood');
    }

    function getUserPriorityLevel(row) {
      // Transparent priority — see PNLINK_DATA_MODEL.md §6.1
      let score = 0;
      if (row.realProblem) score += 2;
      if (row.unreachable) score += 2;
      if (row.longInactive) score += 1;
      if (row.neverLogged) score += 1;
      if (!row.active && row.invitationBucket === '>90 jours') score += 1;
      if (!row.hasAffiliation) score += 1;
      if (score >= 4) return tUI('priorityHigh');
      if (score >= 2) return tUI('priorityMedium');
      return tUI('priorityLow');
    }

    function getFollowUpRows(rows) {
      return (rows || []).filter(r => !r.technical && (r.realProblem || r.neverLogged || r.longInactive || (!r.active && r.invitationBucket !== '≤30 jours' && r.invitationBucket !== 'N/A')));
    }

    function getSelectedInstituteSummary(summary) {
      if (!summary || filterState.institution === 'all') return null;
      return (summary.institutes || []).find(i => i.institution === filterState.institution) || null;
    }

    function localizeDomainType(type) {
      const map = { 'Institutionnel': tUI('institutional'), 'Personnel': tUI('personal'), 'Inconnu / autre': tUI('unknownOther') };
      return map[type] || type;
    }

    function getActiveFilterBadges() {
      const badges = [];
      if (filterState.institution !== 'all') badges.push({ label: tUI('filterBadgeInstitute'), value: filterState.institution });
      if (filterState.country !== 'all') badges.push({ label: tUI('filterBadgeCountry'), value: filterState.country });
      if (filterState.domainType !== 'all') badges.push({ label: tUI('filterBadgeDomain'), value: localizeDomainType(filterState.domainType) });
      if (filterState.status !== 'all') badges.push({ label: tUI('filterBadgeStatus'), value: filterState.status === 'active' ? tUI('active') : tUI('inactive') });
      // Step 5 — new filter badges
      if (filterState.cluster !== 'all') badges.push({ label: tUI('filterBadgeCluster'), value: Array.isArray(filterState.cluster) ? filterState.cluster.join(', ') : filterState.cluster });
      if (filterState.profileType !== 'all') badges.push({ label: tUI('filterBadgeProfile'), value: filterState.profileType });
      if (filterState.scientific !== 'all') badges.push({ label: tUI('filterBadgeScientific'), value: filterState.scientific });
      if (filterState.field !== 'all') badges.push({ label: tUI('filterBadgeField'), value: Array.isArray(filterState.field) ? filterState.field.join(', ') : filterState.field });
      if (filterState.continent !== 'all') badges.push({ label: tUI('filterBadgeContinent'), value: filterState.continent });
      if (filterState.activity !== 'all') badges.push({ label: tUI('filterBadgeActivity'), value: filterState.activity === 'recent' ? tUI('activityRecent') : tUI('activityDormant') });
      return badges;
    }

    function renderActiveFilterBadges() {
      const badges = getActiveFilterBadges();
      if (!badges.length) return `<div class="active-filter-badges"><div class="filter-badge"><span>${escapeHtml(tUI('activeFilters'))}</span>${escapeHtml(tUI('noActiveFilters'))}</div></div>`;
      return `<div class="active-filter-badges">${badges.map(b => `<div class="filter-badge"><span>${escapeHtml(b.label)}:</span>${escapeHtml(b.value)}</div>`).join('')}</div>`;
    }

    function renderInstituteViewBanner(summary) {
      const selected = getSelectedInstituteSummary(summary);
      if (!selected) return '';
      return `
        <div class="institute-view-banner">
          <div class="institute-view-head">
            <div>
              <h3 class="institute-view-title">${escapeHtml(tUI('instituteViewTitle'))}</h3>
              <div class="institute-view-sub">${escapeHtml(tUI('instituteViewSubtitle'))}</div>
            </div>
            ${renderActiveFilterBadges()}
          </div>
          <div class="institute-view-grid">
            <div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('selectedInstitute'))}</div><div class="institute-stat-value">${escapeHtml(selected.institution)}</div></div>
            <div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('filteredUsers'))}</div><div class="institute-stat-value">${formatInt(summary.totals.total)}</div></div>
            <div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('focusActivation'))}</div><div class="institute-stat-value">${formatPct(summary.totals.activationRate)}</div></div>
            <div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('focusProblems'))}</div><div class="institute-stat-value">${formatInt(summary.totals.realProblems)}</div></div>
          </div>
          <div class="segment-export-bar">
            <button type="button" id="exportVisibleUsersBtn" class="export-btn">${escapeHtml(tUI('exportVisibleUsers'))}</button>
            <button type="button" id="exportInstituteViewBtn" class="export-btn">${escapeHtml(tUI('exportInstituteView'))}</button>
            <button type="button" id="exportFollowUpListBtn" class="export-btn">${escapeHtml(tUI('exportFollowUpList'))}</button>
          </div>
        </div>
      `;
    }

    function renderSegmentExportBar(summary) {
      const selected = getSelectedInstituteSummary(summary);
      if (!selected) return '';
      return `
        <div class="card" style="margin-bottom:18px;">
          <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('exportSegmentTitle'))}</h2><span>${escapeHtml(tUI('activeFilters'))}</span></div>
          ${renderActiveFilterBadges()}
          <div class="segment-export-bar" style="margin-top:14px;">
            <button type="button" id="exportVisibleUsersBtn" class="export-btn">${escapeHtml(tUI('exportVisibleUsers'))}</button>
            <button type="button" id="exportInstituteViewBtn" class="export-btn">${escapeHtml(tUI('exportInstituteView'))}</button>
            <button type="button" id="exportFollowUpListBtn" class="export-btn">${escapeHtml(tUI('exportFollowUpList'))}</button>
          </div>
        </div>
      `;
    }

    function renderEmptyState() {
      dashboardEl.innerHTML = `<div class="empty" id="initialEmpty">${escapeHtml(STATIC_TEXT[currentLang].initialEmpty)}</div>`;
      refreshSidebarNavigation();
    }

    function slugifySectionLabel(label, index) {
      const fallback = `section-${index + 1}`;
      const slug = normalize(label)
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return slug || fallback;
    }

    function refreshSidebarNavigation() {
      if (!sidebarNavEl) return;
      if (sidebarScrollHandler) {
        window.removeEventListener('scroll', sidebarScrollHandler);
        sidebarScrollHandler = null;
      }

      const items = [{ id: 'section-excel-import', label: currentLang === 'fr' ? 'Import Excel' : 'Excel import' }];
      const sectionTitles = [
        ...dashboardEl.querySelectorAll(':scope > .section-title'),
        ...dashboardEl.querySelectorAll('.dashboard-nav-card > .section-title')
      ];
      const seen = new Set(items.map(item => item.id));
      const hiddenNavLabels = new Set([
        'executive summary', 'header', 'management reading', 'engagement tiers', 'activation funnel', 'detected columns and rules',
        'en-tête', 'lecture managériale', 'niveaux d\'engagement', 'entonnoir d\'activation', 'colonnes détectées et règles', 'aide à la décision'
      ]);

      sectionTitles.forEach((titleEl, index) => {
        const h2 = titleEl.querySelector('h2');
        const label = h2 ? h2.textContent.trim() : '';
        if (!label) return;
        const normalizedLabel = label.toLowerCase();
        const id = titleEl.id || `dashboard-section-${slugifySectionLabel(label, index)}`;
        titleEl.id = id;
        titleEl.classList.add('scroll-anchor');
        if (hiddenNavLabels.has(normalizedLabel)) return;
        if (!seen.has(id)) {
          seen.add(id);
          items.push({ id, label });
        }
      });

      const activeFilters = Object.values(filterState).filter(value => value && value !== 'all').length;
      const contextLabel = activeFilters
        ? (currentLang === 'fr' ? `${activeFilters} filtre(s) actif(s)` : `${activeFilters} active filter(s)`)
        : (currentLang === 'fr' ? 'Vue globale' : 'Global view');

      sidebarNavEl.innerHTML = `
        <div class="sidebar-nav-context">${escapeHtml(contextLabel)}</div>
        ${items.map((item, index) => `<a href="#${escapeHtml(item.id)}" class="sidebar-link ${index === 0 ? 'active' : ''}" data-section-target="${escapeHtml(item.id)}">${escapeHtml(item.label)}</a>`).join('')}
      `;

      const links = Array.from(sidebarNavEl.querySelectorAll('.sidebar-link[data-section-target]'));
      const setActive = id => {
        links.forEach(link => link.classList.toggle('active', link.dataset.sectionTarget === id));
      };

      links.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const targetId = link.dataset.sectionTarget;
          const target = document.getElementById(targetId);
          if (!target) return;
          closeMobileSidebar();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActive(targetId);
        });
      });

      sidebarScrollHandler = () => {
        let activeId = items[0]?.id || '';
        items.forEach(item => {
          const target = document.getElementById(item.id);
          if (!target) return;
          const rect = target.getBoundingClientRect();
          if (rect.top <= 130) activeId = item.id;
        });
        if (activeId) setActive(activeId);
      };
      window.addEventListener('scroll', sidebarScrollHandler, { passive: true });
      sidebarScrollHandler();
    }

    // Import spinner — shown while the file is being parsed + enriched + rendered.
    // The heavy work is synchronous (XLSX.read → enrichRows → buildSummary → renderDashboard),
    // so we must yield to the browser via requestAnimationFrame before running it, otherwise
    // the spinner never gets painted and the user sees a frozen UI.
    function showImportSpinner() {
      const el = document.getElementById('importSpinner');
      if (el) el.style.display = 'flex';
    }
    function hideImportSpinner() {
      const el = document.getElementById('importSpinner');
      if (el) el.style.display = 'none';
    }

    function clearLoadedFile() {
      fileInput.value = '';
      fileNameLabel.textContent = STATIC_TEXT[currentLang].noFile;
      baseRows = [];
      currentSummary = null;
      currentFileMeta = null;
      filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all', cluster: 'all', profileType: 'all', scientific: 'all', field: 'all', continent: 'all', activity: 'all' };
      destroyCharts();
      closeDetailModal();
      hideImportSpinner();
      renderEmptyState();
    }

    function handleFileSelect(event) {
      const file = event.target.files?.[0];
      fileNameLabel.textContent = file ? file.name : STATIC_TEXT[currentLang].noFile;
      if (!file) return;
      currentFileMeta = {
        fileName: file.name,
        importedAt: new Date(),
        lastModified: file.lastModified ? new Date(file.lastModified) : null
      };
      showImportSpinner();
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        // Double-RAF — the first frame lets the browser actually paint the spinner,
        // the second frame runs the heavy synchronous work. Without this, the spinner
        // CSS is set but never repainted before the JS thread blocks for 1–2 s.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            try {
              const workbook = XLSX.read(data, { type: 'array', cellDates: true });
              const firstSheetName = workbook.SheetNames[0];
              const sheet = workbook.Sheets[firstSheetName];
              const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
              processWorkbook(file.name, rows, firstSheetName);
            } finally {
              hideImportSpinner();
            }
          });
        });
      };
      reader.readAsArrayBuffer(file);
    }

    // Étape B — reusable enrichment pipeline. Used by both the current snapshot (processWorkbook)
    // and the previous snapshot (processPreviousWorkbook) so deltas are computed against
    // identically-shaped row objects. Keep these in lockstep — never enrich one path without the other.
    function enrichRows(rows, sheetName) {
      const columns = Object.keys(rows[0] || {});
      const fields = {
        email: findField(columns, 'email'),
        invitation: findField(columns, 'invitation'),
        activation: findField(columns, 'activation'),
        lastLogin: findField(columns, 'lastLogin'),
        creation: findField(columns, 'creation'),
        country: findField(columns, 'country'),
        company: findField(columns, 'company'),
        role: findField(columns, 'role'),
        score: findField(columns, 'score'),
        affiliation: findField(columns, 'affiliation')
      };
      const emailCounts = new Map();
      rows.forEach(row => {
        const email = String(row[fields.email] || '').trim().toLowerCase();
        if (email) emailCounts.set(email, (emailCounts.get(email) || 0) + 1);
      });

      return rows.map(row => {
        const email = String(row[fields.email] || '').trim();
        const firstName = getColumnValueCaseInsensitive(row, ['First name', 'First Name', 'Given name', 'Given Name', 'Prénom', 'Prenom']);
        const lastName = getColumnValueCaseInsensitive(row, ['Last name', 'Last Name', 'Family name', 'Family Name', 'Surname', 'Nom']);
        const domain = getDomain(email);
        const invitationDate = parseExcelDate(row[fields.invitation]);
        const activationDate = parseExcelDate(row[fields.activation]);
        const lastLoginDate = parseExcelDate(row[fields.lastLogin]);
        const creationDate = parseExcelDate(row[fields.creation]);
        const company = String(row[fields.company] || '').trim();
        const role = String(row[fields.role] || '').trim();
        const affiliation = String(row[fields.affiliation] || '').trim();
        const country = String(row[fields.country] || '').trim();
        const score = safeNumber(row[fields.score]);
        const active = !!activationDate;
        const invitationAge = daysBetween(invitationDate);
        const loginAge = daysBetween(lastLoginDate);
        const emailValid = isEmailValid(email);
        const duplicateEmail = email ? (emailCounts.get(email.toLowerCase()) || 0) > 1 : false;
        const technical = !email || !emailValid || duplicateEmail || isTestOrSystem(row, email, company, role);
        let invitationBucket = 'N/A';
        if (!active) {
          if (!invitationDate) invitationBucket = 'Jamais envoyée';
          else if (invitationAge <= 30) invitationBucket = '≤30 jours';
          else if (invitationAge <= 90) invitationBucket = '31–90 jours';
          else invitationBucket = '>90 jours';
        }
        const realProblem = !active && invitationBucket === '>90 jours' && !technical;
        const mapped = mapInstitution(affiliation, company, domain);
        let scoreBand = 'Non renseigné';
        if (score !== null) scoreBand = score >= 70 ? 'Élevé' : score >= 40 ? 'Moyen' : 'Faible';
        // Optional / soft fields — read with case-insensitive lookup so the dashboard
        // tolerates small column-name drift in future PNLink exports.
        const subNetworksRaw = getColumnValueCaseInsensitive(row, ['SubNetworks:Title']);
        const subNetworks = subNetworksRaw ? subNetworksRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
        const industriesRaw = getColumnValueCaseInsensitive(row, ['Industries:Industries']);
        const industries = industriesRaw ? industriesRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
        const countryCode = getColumnValueCaseInsensitive(row, ['Live Location:Country code']);
        const city = getColumnValueCaseInsensitive(row, ['Live Location:City']);
        const language = getColumnValueCaseInsensitive(row, ['Language']);
        const visits = safeNumber(getColumnValueCaseInsensitive(row, ['Count of visits'])) ?? 0;
        const lastVisitedDate = parseExcelDate(getColumnValueCaseInsensitive(row, ['Last visited at']));
        const updatedDate = parseExcelDate(getColumnValueCaseInsensitive(row, ['Updated at']));
        const notificationsOff = parseBool(getColumnValueCaseInsensitive(row, ['User has turned off all notifications and communications']));
        const linkedinUrl = getColumnValueCaseInsensitive(row, ['LinkedIn profile url', 'Linkedin profile url']);
        const orcid = getColumnValueCaseInsensitive(row, ['_16814279_ORCID', 'ORCID']);
        const position = getColumnValueCaseInsensitive(row, ['Last Job:Position']);
        const groupsRaw = getColumnValueCaseInsensitive(row, ['Groups Member:Group Member']);
        const groupsCount = groupsRaw ? groupsRaw.split(',').filter(s => s.trim()).length : 0;
        const privateProfile = parseBool(getColumnValueCaseInsensitive(row, ['Privacy Settings:Private profile']));
        const optOutDirectory = parseBool(getColumnValueCaseInsensitive(row, ['Privacy Settings:Opt out of directory']));
        // ===== Step 3 — previously unused columns =====
        // All reads use case-insensitive lookup with empty-string fallback so a missing column never crashes.
        const id = getColumnValueCaseInsensitive(row, ['ID']);
        const timezone = getColumnValueCaseInsensitive(row, ['Timezone']);
        const state = getColumnValueCaseInsensitive(row, ['Live Location:State/Region/Province']);
        const requestToJoinDate = parseExcelDate(getColumnValueCaseInsensitive(row, ['Request to Join:Created on']));
        const lastJobFrom = parseExcelDate(getColumnValueCaseInsensitive(row, ['Last Job:From']));
        const lastJobTo = parseExcelDate(getColumnValueCaseInsensitive(row, ['Last Job:To']));
        const jobFunction = getColumnValueCaseInsensitive(row, ['Last Job:Job Function:Name']);
        const educationDegree = getColumnValueCaseInsensitive(row, ['Last Education:Degree']);
        const educationSchool = getColumnValueCaseInsensitive(row, ['Last Education:School']);
        const educationField = getColumnValueCaseInsensitive(row, ['Last Education:Field of study']);
        const educationFrom = parseExcelDate(getColumnValueCaseInsensitive(row, ['Last Education:From']));
        const educationTo = parseExcelDate(getColumnValueCaseInsensitive(row, ['Last Education:To']));
        const researchGateUrl = getColumnValueCaseInsensitive(row, ['_5e0677d5_ResearchGate_URL', 'ResearchGate URL', 'ResearchGate']);
        const pubmedUrl = getColumnValueCaseInsensitive(row, ['_eac9d316_PubMed', 'PubMed']);
        const googleScholarUrl = getColumnValueCaseInsensitive(row, ['_4b8023d1_Google_Scholar', 'Google Scholar']);
        const academiaUrl = getColumnValueCaseInsensitive(row, ['_4447e2c2_Academia_edu', 'Academia.edu']);
        const secondaryEmail = getColumnValueCaseInsensitive(row, ['Secondary email']);
        const personalMobile = getColumnValueCaseInsensitive(row, ['Personal mobile']);

        // ===== Engagement tier (only meaningful for activated users — visits is 0 for non-activated) =====
        let engagementTier = null;
        if (active) {
          if (visits >= 50) engagementTier = 'Power';
          else if (visits >= 10) engagementTier = 'Active';
          else if (visits >= 1) engagementTier = 'Light';
          else engagementTier = 'Dormant';
        }
        // Profile completeness — extended to 9 fields (added LinkedIn was 6, now scientific URLs count too is intentional).
        // Keep the historical 6-field score for backwards compatibility, expose the extended one separately.
        const profileCompleteness =
          (country ? 1 : 0) + (city ? 1 : 0) + (industries.length ? 1 : 0) +
          (linkedinUrl ? 1 : 0) + (orcid ? 1 : 0) + (position ? 1 : 0);
        const visitedAge = daysBetween(lastVisitedDate);
        const unreachable = notificationsOff && !active;
        const dormantActivated = active && visits === 0;
        const stalePresence = active && visitedAge !== null && visitedAge > 180;

        // ===== Step 3 — derived fields =====
        // Geographic — continent derived from ISO-3166 alpha-2 via static lookup. Empty string when code is missing.
        const continent = continentOf(countryCode);

        // Scientific signals (booleans) — used by classifyScientific() and the future "Scientific signal count" KPI.
        const hasOrcid = !!orcid;
        const hasResearchGate = !!researchGateUrl;
        const hasPubMed = !!pubmedUrl;
        const hasScholar = !!googleScholarUrl;
        const hasAcademia = !!academiaUrl;
        const scientificSignalCount =
          (hasOrcid ? 1 : 0) + (hasResearchGate ? 1 : 0) + (hasPubMed ? 1 : 0) +
          (hasScholar ? 1 : 0) + (hasAcademia ? 1 : 0);

        // Scientific classification — rule documented in PNLINK_DATA_MODEL.md §5 (approved 2026-05-10).
        const sci = classifyScientific(position, { hasOrcid, hasResearchGate, hasPubMed, hasScholar, hasAcademia });
        const scientificProfile = sci.profile;       // 'Scientific' | 'Non-scientific' | 'Unknown / To verify'
        const scientificReason = sci.reason;          // human-readable audit trail

        // Profile type — 3-bucket derivation. Admin from Role:Name; Scientific from sci above; else Member — Unknown.
        const isAdmin = /full access/i.test(role);
        const profileType = isAdmin ? 'Admin'
          : scientificProfile === 'Scientific' ? 'Scientific'
          : 'Member — Unknown';

        // Activation funnel lags (days, null when either endpoint is missing).
        const activationLagDays = (invitationDate && activationDate) ? daysBetween(invitationDate, activationDate) : null;
        const creationToActivationDays = (creationDate && activationDate) ? daysBetween(creationDate, activationDate) : null;
        const requestToActivationDays = (requestToJoinDate && activationDate) ? daysBetween(requestToJoinDate, activationDate) : null;

        // Cohort grouping by creation month ('YYYY-MM' string).
        const cohortMonth = cohortMonthOf(creationDate);

        // Activity recency (only meaningful for activated users — uses Last log in date).
        const activeInLast30d = active && loginAge !== null && loginAge <= 30;
        const activeInLast90d = active && loginAge !== null && loginAge <= 90;
        // Visit recency bucket (based on Last visited at).
        const visitRecencyBucket = active ? visitRecencyBucketOf(visitedAge) : 'Not activated';

        // Soft churn signal — populated `Last Job:To` suggests the user has left their declared position.
        const lastJobEnded = !!lastJobTo;
        return {
          raw: row, id, firstName, lastName, email, domain,
          domainType: classifyDomain(domain),
          invitationDate, activationDate, lastLoginDate, creationDate, invitationAge, loginAge,
          company, role, affiliation, country, score, scoreBand,
          active, technical, duplicateEmail, emailValid, invitationBucket, realProblem,
          mappedInstitution: mapped.name, mappingConfidence: mapped.confidence, mappingSource: mapped.source, mappedRef: mapped.ref,
          hasAffiliation: !!affiliation, neverLogged: active && !lastLoginDate, longInactive: active && loginAge !== null && loginAge > 180,
          lastLoginText: lastLoginDate ? lastLoginDate.toLocaleDateString('fr-FR') : '',
          // Optional / derived fields (Step 2 and earlier)
          subNetworks, industries, countryCode, city, language, visits,
          lastVisitedDate, updatedDate, visitedAge,
          notificationsOff, linkedinUrl, orcid, position, groupsCount,
          privateProfile, optOutDirectory,
          engagementTier, profileCompleteness,
          unreachable, dormantActivated, stalePresence,
          missingCountry: active && !country,
          noisyAffiliation: !!affiliation && mapped.confidence === 'Faible',
          // Step 3 — raw new column values
          timezone, state,
          requestToJoinDate, lastJobFrom, lastJobTo, jobFunction,
          educationDegree, educationSchool, educationField, educationFrom, educationTo,
          researchGateUrl, pubmedUrl, googleScholarUrl, academiaUrl,
          secondaryEmail, personalMobile,
          // Step 3 — derived
          continent,
          hasOrcid, hasResearchGate, hasPubMed, hasScholar, hasAcademia, scientificSignalCount,
          scientificProfile, scientificReason, profileType, isAdmin,
          activationLagDays, creationToActivationDays, requestToActivationDays,
          cohortMonth,
          activeInLast30d, activeInLast90d, visitRecencyBucket,
          lastJobEnded,
          sheetName, fields
        };
      });
    }

    function processWorkbook(fileName, rows, sheetName) {
      destroyCharts();
      if (!rows.length) {
        dashboardEl.innerHTML = `<div class="empty">${escapeHtml(tUI('noUsableRows'))}</div>`;
        return;
      }
      baseRows = enrichRows(rows, sheetName);
      filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all', cluster: 'all', profileType: 'all', scientific: 'all', field: 'all', continent: 'all', activity: 'all' };
      currentFileMeta = { ...(currentFileMeta || {}), fileName, sheetName, rowCount: baseRows.length };
      applyFiltersAndRender();
    }

    function getFilteredRows() {
      return baseRows.filter(r => {
        if (filterState.institution !== 'all' && r.mappedInstitution !== filterState.institution) return false;
        if (filterState.country !== 'all' && (r.country || '') !== filterState.country) return false;
        if (filterState.domainType !== 'all' && r.domainType !== filterState.domainType) return false;
        if (filterState.status === 'active' && !r.active) return false;
        if (filterState.status === 'inactive' && r.active) return false;
        // Step 5 — new filter dimensions
        if (filterState.cluster !== 'all') {
          const clusters = Array.isArray(filterState.cluster) ? filterState.cluster : [filterState.cluster];
          if (!clusters.some(cluster => (r.subNetworks || []).includes(cluster))) return false;
        }
        if (filterState.profileType !== 'all' && r.profileType !== filterState.profileType) return false;
        if (filterState.scientific !== 'all' && r.scientificProfile !== filterState.scientific) return false;
        if (filterState.field !== 'all') {
          const fields = Array.isArray(filterState.field) ? filterState.field : [filterState.field];
          if (!fields.some(field => (r.industries || []).includes(field))) return false;
        }
        if (filterState.continent !== 'all' && (r.continent || '') !== filterState.continent) return false;
        if (filterState.activity === 'recent' && !r.activeInLast90d) return false;
        if (filterState.activity === 'dormant' && !(r.active && !r.activeInLast90d)) return false;
        return true;
      });
    }

    function applyFiltersAndRender() {
      const filteredRows = getFilteredRows();
      currentSummary = buildSummary(filteredRows);
      renderDashboard(currentSummary);
    }

    function buildSummary(rows) {
      const total = rows.length;
      const active = rows.filter(r => r.active).length;
      const inactive = total - active;
      const invitedRecent = rows.filter(r => !r.active && r.invitationBucket === '≤30 jours').length;
      const invitedAging = rows.filter(r => !r.active && r.invitationBucket === '31–90 jours').length;
      const invitedOld = rows.filter(r => !r.active && r.invitationBucket === '>90 jours').length;
      const neverInvited = rows.filter(r => !r.active && r.invitationBucket === 'Jamais envoyée').length;
      const technical = rows.filter(r => r.technical).length;
      const realProblems = rows.filter(r => r.realProblem).length;
      const domainsDetected = new Set(rows.map(r => r.domain).filter(Boolean)).size;
      const institutesDetected = new Set(rows.map(r => r.mappedInstitution).filter(v => v && v !== 'Non rattaché')).size;
      const activationRate = total ? (active / total) * 100 : 0;
      const affiliationMissing = rows.filter(r => !r.hasAffiliation).length;
      const personalDomains = rows.filter(r => r.domainType === 'Personnel').length;
      const countriesDetected = new Set(rows.map(r => r.country).filter(Boolean)).size;
      const neverLogged = rows.filter(r => r.neverLogged).length;
      const longInactive = rows.filter(r => r.longInactive).length;

      const instituteMap = new Map();
      STAFF_REFERENCE.forEach(ref => instituteMap.set(ref.name, {
        institution: ref.name,
        totalUsers: 0, activeUsers: 0, inactiveUsers: 0, invitedRecent: 0, invitedAging: 0, invitedOld: 0, neverInvited: 0,
        realProblems: 0, affiliationCount: 0, confidenceStrong: 0, confidenceMedium: 0, confidenceLow: 0, countries: new Set()
      }));

      rows.forEach(r => {
        if (!instituteMap.has(r.mappedInstitution)) return;
        const item = instituteMap.get(r.mappedInstitution);
        item.totalUsers += 1;
        item.activeUsers += r.active ? 1 : 0;
        item.inactiveUsers += r.active ? 0 : 1;
        item.invitedRecent += r.invitationBucket === '≤30 jours' ? 1 : 0;
        item.invitedAging += r.invitationBucket === '31–90 jours' ? 1 : 0;
        item.invitedOld += r.invitationBucket === '>90 jours' ? 1 : 0;
        item.neverInvited += r.invitationBucket === 'Jamais envoyée' ? 1 : 0;
        item.realProblems += r.realProblem ? 1 : 0;
        item.affiliationCount += r.hasAffiliation ? 1 : 0;
        item.countries.add(r.country || '');
        if (r.mappingConfidence === 'Fort') item.confidenceStrong += 1;
        else if (r.mappingConfidence === 'Moyen') item.confidenceMedium += 1;
        else item.confidenceLow += 1;
      });

      const institutes = Array.from(instituteMap.values()).filter(i => i.totalUsers > 0).map(i => {
        const activationRate = i.totalUsers ? (i.activeUsers / i.totalUsers) * 100 : null;
        const affiliationRate = i.totalUsers ? (i.affiliationCount / i.totalUsers) * 100 : null;
        let status;
        if (activationRate >= 60 && i.realProblems === 0) status = 'Bon';
        else if (activationRate >= 40) status = 'Moyen';
        else status = 'Faible';
        let action = 'Suivi normal';
        if (i.realProblems > 0) action = 'Relance ciblée >90 jours';
        else if (i.inactiveUsers >= 20 && (activationRate || 0) < 40) action = 'Campagne d’activation prioritaire';
        else if ((affiliationRate || 0) < 20) action = 'Améliorer la collecte d’affiliation';
        return { ...i, activationRate, affiliationRate, status, action, mappingLevel: i.confidenceStrong >= i.confidenceMedium ? 'Fort/Moyen' : 'Moyen' };
      }).sort((a, b) => b.totalUsers - a.totalUsers);

      const domainMap = new Map();
      rows.forEach(r => {
        const key = r.domain || '(sans domaine)';
        if (!domainMap.has(key)) domainMap.set(key, { domain: key, type: r.domainType, totalUsers: 0, activeUsers: 0, inactiveUsers: 0, invitedRecent: 0, realProblems: 0, neverInvited: 0, oldWithoutActivation: 0 });
        const item = domainMap.get(key);
        item.totalUsers += 1;
        item.activeUsers += r.active ? 1 : 0;
        item.inactiveUsers += r.active ? 0 : 1;
        item.invitedRecent += r.invitationBucket === '≤30 jours' ? 1 : 0;
        item.realProblems += r.realProblem ? 1 : 0;
        item.neverInvited += r.invitationBucket === 'Jamais envoyée' ? 1 : 0;
        item.oldWithoutActivation += r.invitationBucket === '>90 jours' ? 1 : 0;
      });
      const domains = Array.from(domainMap.values()).map(d => ({ ...d, activationRate: d.totalUsers ? (d.activeUsers / d.totalUsers) * 100 : null })).sort((a, b) => b.totalUsers - a.totalUsers);

      const keyMessages = [];
      keyMessages.push({ title: tUI('keyMessagesTitle'), text: activationRate < 60 ? tUI('keyActivationLow', activationRate) : tUI('keyActivationGood', activationRate) });
      keyMessages.push({ title: tUI('keyMessagesTitle'), text: inactive ? tUI('keyInactiveRecent', (invitedRecent / inactive) * 100) : tUI('keyInactiveRecent', 0) });
      keyMessages.push({ title: tUI('keyMessagesTitle'), text: tUI('keyRealProblems', realProblems) });

      const alerts = [];
      if (activationRate >= 60) alerts.push({ level: 'good', title: localizeBusinessComputed('alerts', 'activationGoodTitle'), text: localizeBusinessComputed('alerts', 'activationGoodText', activationRate) });
      else alerts.push({ level: 'warn', title: localizeBusinessComputed('alerts', 'activationWarnTitle'), text: localizeBusinessComputed('alerts', 'activationWarnText', activationRate) });
      if (realProblems > 0) alerts.push({ level: 'bad', title: localizeBusinessComputed('alerts', 'realProblemsTitle'), text: localizeBusinessComputed('alerts', 'realProblemsText', realProblems) });

      const recommendations = [];
      if (realProblems > 0) recommendations.push({ title: localizeBusinessComputed('recommendations', 'oldAccountsTitle'), text: localizeBusinessComputed('recommendations', 'oldAccountsText', realProblems) });
      if (technical > 0) recommendations.push({ title: localizeBusinessComputed('recommendations', 'technicalTitle'), text: localizeBusinessComputed('recommendations', 'technicalText', technical) });
      if (affiliationMissing > 0) recommendations.push({ title: localizeBusinessComputed('recommendations', 'affiliationTitle'), text: localizeBusinessComputed('recommendations', 'affiliationText', affiliationMissing) });

      const consolidated = institutes.map(i => ({
        segment: i.institution, totalUsers: i.totalUsers, activeUsers: i.activeUsers, inactiveUsers: i.inactiveUsers, activationRate: i.activationRate,
        invitedRecent: i.invitedRecent, invitedAging: i.invitedAging, invitedOld: i.invitedOld, neverInvited: i.neverInvited, realProblems: i.realProblems,
        status: i.status, action: i.action, priority: priorityLabel(i)
      }));

      // ===== Country aggregates (only on rows with a Live Location:Country) =====
      const countryMap = new Map();
      rows.forEach(r => {
        if (!r.country) return;
        if (!countryMap.has(r.country)) countryMap.set(r.country, { country: r.country, code: r.countryCode || '', totalUsers: 0, activeUsers: 0, realProblems: 0, unreachable: 0, missingCountry: 0 });
        const it = countryMap.get(r.country);
        it.totalUsers += 1;
        if (r.active) it.activeUsers += 1;
        if (r.realProblem) it.realProblems += 1;
        if (r.unreachable) it.unreachable += 1;
      });
      const countries = Array.from(countryMap.values()).map(c => ({
        ...c,
        inactiveUsers: c.totalUsers - c.activeUsers,
        activationRate: c.totalUsers ? (c.activeUsers / c.totalUsers) * 100 : null
      })).sort((a, b) => b.totalUsers - a.totalUsers);

      // ===== SubNetwork aggregates (multi-value column) =====
      const subnetMap = new Map();
      rows.forEach(r => {
        (r.subNetworks || []).forEach(sn => {
          if (!subnetMap.has(sn)) subnetMap.set(sn, { name: sn, totalUsers: 0, activeUsers: 0, realProblems: 0 });
          const it = subnetMap.get(sn);
          it.totalUsers += 1;
          if (r.active) it.activeUsers += 1;
          if (r.realProblem) it.realProblems += 1;
        });
      });
      const subNetworks = Array.from(subnetMap.values()).map(s => ({
        ...s,
        inactiveUsers: s.totalUsers - s.activeUsers,
        activationRate: s.totalUsers ? (s.activeUsers / s.totalUsers) * 100 : null
      })).sort((a, b) => b.totalUsers - a.totalUsers);

      // ===== Engagement tiers (activated users only) =====
      const engagementTiers = {
        power: rows.filter(r => r.engagementTier === 'Power').length,
        active: rows.filter(r => r.engagementTier === 'Active').length,
        light: rows.filter(r => r.engagementTier === 'Light').length,
        dormant: rows.filter(r => r.engagementTier === 'Dormant').length
      };

      // ===== Reachability / dormancy =====
      const unreachable = rows.filter(r => r.unreachable).length;
      const notifOff = rows.filter(r => r.notificationsOff).length;
      const dormantActivated = rows.filter(r => r.dormantActivated).length;
      const stalePresence = rows.filter(r => r.stalePresence).length;

      // ===== Data quality =====
      const missingEmail = rows.filter(r => !r.email).length;
      const invalidEmail = rows.filter(r => r.email && !r.emailValid).length;
      const duplicateEmails = rows.filter(r => r.duplicateEmail).length;
      const missingInstitution = rows.filter(r => r.mappedInstitution === 'Non rattaché').length;
      const missingCountryActivated = rows.filter(r => r.missingCountry).length;
      const noisyAffiliation = rows.filter(r => r.noisyAffiliation).length;
      const distinctAffiliationValues = new Set(rows.map(r => r.affiliation).filter(Boolean)).size;
      const profileIncompleteActivated = rows.filter(r => r.active && r.profileCompleteness < 3).length;

      // ===== Étape A — Data-quality coverage of the filtered scope =====
      // Per-dimension fill rates so the user can see what every aggregate is actually computed on.
      // Each entry: { filled, total, fillPct } — pre-computed so the renderer just formats.
      const coverageOf = (predicate) => {
        const filled = rows.filter(predicate).length;
        return { filled, total, fillPct: total ? (filled / total) * 100 : 0 };
      };
      const dataCoverage = {
        total,
        country:         coverageOf(r => !!r.country),
        continent:       coverageOf(r => !!r.continent),
        affiliation:     coverageOf(r => r.hasAffiliation),
        position:        coverageOf(r => !!r.position),
        language:        coverageOf(r => !!r.language),
        industries:      coverageOf(r => (r.industries || []).length > 0),
        institute:       coverageOf(r => r.mappedInstitution && r.mappedInstitution !== 'Non rattaché'),
        // Cluster has 99 % presence on the field but ~half the values are literally "Undefined".
        // We surface the meaningful coverage (= at least one non-Undefined sub-network).
        clusterDefined:  coverageOf(r => (r.subNetworks || []).some(s => s && s.toLowerCase() !== 'undefined'))
      };
      const undefinedClusterCount = rows.filter(r => {
        const subs = r.subNetworks || [];
        return subs.length && subs.every(s => !s || s.toLowerCase() === 'undefined');
      }).length;

      // ===== Step 4 — Profile / scientific / cluster aggregates =====
      const byProfileType = {
        admin: rows.filter(r => r.profileType === 'Admin').length,
        scientific: rows.filter(r => r.profileType === 'Scientific').length,
        memberUnknown: rows.filter(r => r.profileType === 'Member — Unknown').length,
        adminActivated: rows.filter(r => r.profileType === 'Admin' && r.active).length,
        scientificActivated: rows.filter(r => r.profileType === 'Scientific' && r.active).length,
        memberUnknownActivated: rows.filter(r => r.profileType === 'Member — Unknown' && r.active).length
      };
      const byScientific = {
        scientific: rows.filter(r => r.scientificProfile === 'Scientific').length,
        nonScientific: rows.filter(r => r.scientificProfile === 'Non-scientific').length,
        unknown: rows.filter(r => r.scientificProfile === 'Unknown / To verify').length,
        scientificActivated: rows.filter(r => r.scientificProfile === 'Scientific' && r.active).length,
        nonScientificActivated: rows.filter(r => r.scientificProfile === 'Non-scientific' && r.active).length,
        unknownActivated: rows.filter(r => r.scientificProfile === 'Unknown / To verify' && r.active).length
      };

      // Continent breakdown (derived from country code via static lookup)
      const continentMap = new Map();
      rows.forEach(r => {
        const k = r.continent || '(No country)';
        if (!continentMap.has(k)) continentMap.set(k, { continent: k, totalUsers: 0, activeUsers: 0, scientificUsers: 0 });
        const it = continentMap.get(k);
        it.totalUsers += 1;
        if (r.active) it.activeUsers += 1;
        if (r.scientificProfile === 'Scientific') it.scientificUsers += 1;
      });
      const continents = Array.from(continentMap.values()).map(c => ({
        ...c,
        inactiveUsers: c.totalUsers - c.activeUsers,
        activationRate: c.totalUsers ? (c.activeUsers / c.totalUsers) * 100 : null
      })).sort((a, b) => b.totalUsers - a.totalUsers);

      // Language breakdown (raw value, lowercased)
      const languageMap = new Map();
      rows.forEach(r => {
        const lang = (r.language || '').trim().toLowerCase() || '(unspecified)';
        if (!languageMap.has(lang)) languageMap.set(lang, { language: lang, totalUsers: 0, activeUsers: 0 });
        const it = languageMap.get(lang);
        it.totalUsers += 1;
        if (r.active) it.activeUsers += 1;
      });
      const languages = Array.from(languageMap.values()).map(l => ({
        ...l,
        inactiveUsers: l.totalUsers - l.activeUsers,
        activationRate: l.totalUsers ? (l.activeUsers / l.totalUsers) * 100 : null
      })).sort((a, b) => b.totalUsers - a.totalUsers);

      // Field of expertise — Industries:Industries (multi-value) — top 15 + long tail
      const fieldMap = new Map();
      rows.forEach(r => {
        (r.industries || []).forEach(field => {
          if (!fieldMap.has(field)) fieldMap.set(field, { field, totalUsers: 0, activeUsers: 0, scientificUsers: 0 });
          const it = fieldMap.get(field);
          it.totalUsers += 1;
          if (r.active) it.activeUsers += 1;
          if (r.scientificProfile === 'Scientific') it.scientificUsers += 1;
        });
      });
      const fieldsAll = Array.from(fieldMap.values()).map(f => ({
        ...f,
        activationRate: f.totalUsers ? (f.activeUsers / f.totalUsers) * 100 : null
      })).sort((a, b) => b.totalUsers - a.totalUsers);
      const fields = fieldsAll.slice(0, 15);
      const fieldsLongTail = fieldsAll.length > 15 ? (() => {
        const tail = fieldsAll.slice(15);
        const totalUsers = tail.reduce((s, f) => s + f.totalUsers, 0);
        const activeUsers = tail.reduce((s, f) => s + f.activeUsers, 0);
        return {
          field: 'Long tail (other)',
          totalUsers, activeUsers,
          scientificUsers: tail.reduce((s, f) => s + f.scientificUsers, 0),
          distinctValues: tail.length,
          activationRate: totalUsers ? (activeUsers / totalUsers) * 100 : null
        };
      })() : null;
      const fieldsDistinct = fieldsAll.length;

      // Enrich subNetworks with scientific + recency counts (mutates the existing array in place)
      const subnetExt = new Map();
      rows.forEach(r => {
        (r.subNetworks || []).forEach(sn => {
          if (!subnetExt.has(sn)) subnetExt.set(sn, { scientific: 0, activeIn90: 0 });
          const it = subnetExt.get(sn);
          if (r.scientificProfile === 'Scientific') it.scientific += 1;
          if (r.activeInLast90d) it.activeIn90 += 1;
        });
      });
      subNetworks.forEach(s => {
        const ext = subnetExt.get(s.name);
        s.scientificUsers = ext ? ext.scientific : 0;
        s.activeInLast90d = ext ? ext.activeIn90 : 0;
      });

      // ===== Step 4 — Recency, histograms, activation lag, cohorts =====
      const recencyBucketsOrder = ['0-30 days','31-60 days','61-90 days','91-180 days','181-365 days','365+ days','No visit recorded','Not activated'];
      const recencyHistogram = Object.fromEntries(recencyBucketsOrder.map(b => [b, 0]));
      rows.forEach(r => {
        const b = r.visitRecencyBucket || 'Not activated';
        recencyHistogram[b] = (recencyHistogram[b] || 0) + 1;
      });
      const activeInLast30d = rows.filter(r => r.activeInLast30d).length;
      const activeInLast90d = rows.filter(r => r.activeInLast90d).length;
      const activeInLast180d = rows.filter(r => r.active && r.loginAge !== null && r.loginAge <= 180).length;

      // Profile completeness histogram (0..6)
      const completenessHistogram = Object.fromEntries([0,1,2,3,4,5,6].map(n => [n, 0]));
      rows.forEach(r => { completenessHistogram[r.profileCompleteness] = (completenessHistogram[r.profileCompleteness] || 0) + 1; });

      // Engagement score histogram (only rows with a score)
      const scoreBuckets = [
        { label: '0-20',  min: 0,  max: 20 },
        { label: '21-40', min: 21, max: 40 },
        { label: '41-60', min: 41, max: 60 },
        { label: '61-80', min: 61, max: 80 },
        { label: '81+',   min: 81, max: Infinity }
      ];
      const scoreHistogram = Object.fromEntries(scoreBuckets.map(b => [b.label, 0]));
      rows.forEach(r => {
        if (r.score === null) return;
        const b = scoreBuckets.find(b => r.score >= b.min && r.score <= b.max);
        if (b) scoreHistogram[b.label] += 1;
      });

      // Activation-lag percentiles (samples = rows with both invitation + activation dates)
      const lagSamples = rows.map(r => r.activationLagDays).filter(d => d !== null).sort((a, b) => a - b);
      const pick = (sorted, p) => sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] : null;
      const activationLag = {
        samples: lagSamples.length,
        p50: pick(lagSamples, 0.50),
        p90: pick(lagSamples, 0.90),
        mean: lagSamples.length ? (lagSamples.reduce((s, d) => s + d, 0) / lagSamples.length) : null,
        within7d: lagSamples.filter(d => d <= 7).length,
        within14d: lagSamples.filter(d => d <= 14).length,
        within30d: lagSamples.filter(d => d <= 30).length
      };

      // Cohort by creation month (chronological)
      const cohortMap = new Map();
      rows.forEach(r => {
        if (!r.cohortMonth) return;
        if (!cohortMap.has(r.cohortMonth)) cohortMap.set(r.cohortMonth, { cohortMonth: r.cohortMonth, created: 0, activated: 0, activeInLast90d: 0 });
        const it = cohortMap.get(r.cohortMonth);
        it.created += 1;
        if (r.active) it.activated += 1;
        if (r.activeInLast90d) it.activeInLast90d += 1;
      });
      const cohorts = Array.from(cohortMap.values()).map(c => ({
        ...c,
        activationRate: c.created ? (c.activated / c.created) * 100 : null,
        retention90d: c.activated ? (c.activeInLast90d / c.activated) * 100 : null
      })).sort((a, b) => a.cohortMonth.localeCompare(b.cohortMonth));

      // ===== Step 4 — segment totals =====
      const ambassadorCandidates = rows.filter(r =>
        r.active && r.scientificProfile === 'Scientific' &&
        (r.subNetworks || []).length >= 2 &&
        (r.engagementTier === 'Power' || r.engagementTier === 'Active')
      ).length;
      const churnSlipping = rows.filter(r =>
        r.active && r.visits >= 10 && r.loginAge !== null && r.loginAge >= 90 && r.loginAge <= 180
      ).length;
      const activatedNoInvitation = rows.filter(r => r.active && !r.invitationDate).length;
      const lastJobEnded = rows.filter(r => r.lastJobEnded).length;

      // ===== Decision insights — generated from the data =====
      const decisionInsights = buildDecisionInsights({
        total, active, invitedOld, unreachable, dormantActivated, stalePresence,
        countries, institutes, missingInstitution, missingCountryActivated,
        affiliationMissing, distinctAffiliationValues, duplicateEmails,
        profileIncompleteActivated, notifOff,
        // Step 4 — new decision context
        activationLag, activeInLast90d, ambassadorCandidates, churnSlipping,
        activatedNoInvitation, lastJobEnded,
        // Étape A — data-quality context
        undefinedClusterCount, dataCoverage
      });

      // ===== Executive summary — short narrative =====
      const executiveSummary = buildExecutiveSummary({
        total, active, activationRate, invitedOld, realProblems,
        unreachable, dormantActivated, countries, institutes
      });

      return {
        fileMeta: currentFileMeta,
        rows,
        totals: {
          total, active, inactive, invitedRecent, invitedAging, invitedOld, neverInvited,
          technical, realProblems, activationRate, domainsDetected, institutesDetected,
          countriesDetected, affiliationMissing, personalDomains, neverLogged, longInactive,
          // New totals
          unreachable, notifOff, dormantActivated, stalePresence,
          missingEmail, invalidEmail, duplicateEmails, missingInstitution,
          missingCountryActivated, noisyAffiliation, distinctAffiliationValues,
          profileIncompleteActivated,
          power: engagementTiers.power, activeTier: engagementTiers.active,
          lightTier: engagementTiers.light, dormantTier: engagementTiers.dormant,
          // Step 4 totals
          profileAdmin: byProfileType.admin,
          profileScientific: byProfileType.scientific,
          profileMemberUnknown: byProfileType.memberUnknown,
          scientificScientific: byScientific.scientific,
          scientificNonScientific: byScientific.nonScientific,
          scientificUnknown: byScientific.unknown,
          activeInLast30d, activeInLast90d, activeInLast180d,
          ambassadorCandidates, churnSlipping, activatedNoInvitation, lastJobEnded,
          fieldsDistinct
        },
        institutes, domains, recommendations, alerts, keyMessages, consolidated,
        countries, subNetworks, engagementTiers, decisionInsights, executiveSummary,
        // Step 4 aggregates
        continents, languages, fields, fieldsLongTail,
        byProfileType, byScientific,
        recencyHistogram, completenessHistogram, scoreHistogram,
        activationLag, cohorts,
        // Étape A — data-quality coverage
        dataCoverage, undefinedClusterCount
      };
    }

    // ====== Decision-support helpers ======
    // Generate human-readable insights from the filtered summary numbers.
    // Each item: { level: 'good'|'warn'|'bad'|'info', title, text }.
    // Thresholds are exposed here so they can be tuned without touching the renderer.
    function buildDecisionInsights(s) {
      const items = [];
      if (s.invitedOld > 0) {
        items.push({ level: 'bad', title: tUI('insightOldInvitationsTitle'),
          text: tUI('insightOldInvitations', s.invitedOld),
          drilldown: { type: 'filter', filterKey: 'invitedOld' } });
      }
      if (s.unreachable > 0) {
        items.push({ level: 'warn', title: tUI('insightUnreachableTitle'),
          text: tUI('insightUnreachable', s.unreachable),
          drilldown: { type: 'filter', filterKey: 'unreachable' } });
      }
      if (s.dormantActivated > 0) {
        items.push({ level: 'warn', title: tUI('insightDormantActivatedTitle'),
          text: tUI('insightDormantActivated', s.dormantActivated),
          drilldown: { type: 'filter', filterKey: 'dormantActivated' } });
      }
      if (s.stalePresence > 0) {
        items.push({ level: 'warn', title: tUI('insightStalePresenceTitle'),
          text: tUI('insightStalePresence', s.stalePresence),
          drilldown: { type: 'filter', filterKey: 'stalePresence' } });
      }
      // Country-level signal — only if at least 10 users in that country
      const weakCountries = (s.countries || []).filter(c => c.totalUsers >= 10 && (c.activationRate || 0) < 30);
      if (weakCountries.length) {
        const sample = weakCountries.slice(0, 4).map(c => `${c.country} (${(c.activationRate || 0).toFixed(0)}%)`).join(', ');
        items.push({ level: 'bad', title: tUI('insightWeakCountriesTitle'),
          text: tUI('insightWeakCountries', weakCountries.length, sample),
          drilldown: { type: 'countries', values: weakCountries.map(c => c.country) } });
      }
      // Institute-level signal — institutes with ≥5 inactive users with invitation >90d
      const heavyInstitutes = (s.institutes || []).filter(i => i.invitedOld >= 5);
      if (heavyInstitutes.length) {
        const sample = heavyInstitutes.slice(0, 4).map(i => `${i.institution} (${i.invitedOld})`).join(', ');
        items.push({ level: 'bad', title: tUI('insightHeavyInstitutesTitle'),
          text: tUI('insightHeavyInstitutes', heavyInstitutes.length, sample),
          drilldown: { type: 'institutesInvitedOld', values: heavyInstitutes.map(i => i.institution) } });
      }
      if (s.duplicateEmails > 0) {
        items.push({ level: 'warn', title: tUI('insightDuplicatesTitle'),
          text: tUI('insightDuplicates', s.duplicateEmails),
          drilldown: { type: 'filter', filterKey: 'duplicateEmail' } });
      }
      if (s.distinctAffiliationValues > 80) {
        items.push({ level: 'info', title: tUI('insightNoisyAffiliationTitle'),
          text: tUI('insightNoisyAffiliation', s.distinctAffiliationValues),
          drilldown: { type: 'filter', filterKey: 'noisyAffiliation' } });
      }
      if (s.missingCountryActivated > 0 && s.active > 0 && (s.missingCountryActivated / s.active) > 0.3) {
        items.push({ level: 'info', title: tUI('insightMissingCountryTitle'),
          text: tUI('insightMissingCountry', s.missingCountryActivated),
          drilldown: { type: 'filter', filterKey: 'missingCountry' } });
      }
      if (s.profileIncompleteActivated > 0 && s.active > 0 && (s.profileIncompleteActivated / s.active) > 0.5) {
        items.push({ level: 'info', title: tUI('insightProfileIncompleteTitle'),
          text: tUI('insightProfileIncomplete', s.profileIncompleteActivated),
          drilldown: { type: 'filter', filterKey: 'profileIncomplete' } });
      }
      // Step 4 — funnel speed, data-quality, ambassador opportunity, slipping engagement, soft churn
      if (s.activationLag && s.activationLag.samples > 0 && s.activationLag.p50 !== null && s.activationLag.p50 > 14) {
        items.push({ level: 'warn', title: tUI('insightSlowFunnelTitle'),
          text: tUI('insightSlowFunnel', s.activationLag.p50, s.activationLag.p90) });
      }
      if (s.activatedNoInvitation > 0) {
        items.push({ level: 'info', title: tUI('insightActivatedNoInvitationTitle'),
          text: tUI('insightActivatedNoInvitation', s.activatedNoInvitation),
          drilldown: { type: 'filter', filterKey: 'activatedNoInvitation' } });
      }
      if (s.ambassadorCandidates > 0) {
        items.push({ level: 'good', title: tUI('insightAmbassadorsTitle'),
          text: tUI('insightAmbassadors', s.ambassadorCandidates),
          drilldown: { type: 'filter', filterKey: 'ambassador' } });
      }
      if (s.churnSlipping > 0) {
        items.push({ level: 'warn', title: tUI('insightChurnSlippingTitle'),
          text: tUI('insightChurnSlipping', s.churnSlipping),
          drilldown: { type: 'filter', filterKey: 'churnSlipping' } });
      }
      if (s.lastJobEnded > 0) {
        items.push({ level: 'info', title: tUI('insightLastJobEndedTitle'),
          text: tUI('insightLastJobEnded', s.lastJobEnded),
          drilldown: { type: 'filter', filterKey: 'lastJobEnded' } });
      }
      // Étape A — data-quality insight: large "Undefined" cluster cohort
      if (s.undefinedClusterCount > 0 && s.total > 0 && (s.undefinedClusterCount / s.total) > 0.10) {
        const pct = (s.undefinedClusterCount / s.total) * 100;
        items.push({ level: 'warn', title: tUI('insightUndefinedClusterTitle'),
          text: tUI('insightUndefinedCluster', s.undefinedClusterCount, pct),
          drilldown: { type: 'undefinedCluster' } });
      }
      if (!items.length) {
        items.push({ level: 'good', title: tUI('insightAllGoodTitle'), text: tUI('insightAllGood') });
      }
      return items;
    }

    function buildExecutiveSummary(s) {
      const rate = s.total ? formatPct(s.activationRate) : '—';
      const topCountry = (s.countries || [])[0];
      const topCountryText = topCountry ? `${topCountry.country} (${formatInt(topCountry.totalUsers)})` : tUI('notAvailable');
      const topInstitute = [...(s.institutes || [])].sort((a, b) => b.totalUsers - a.totalUsers)[0];
      const topInstituteText = topInstitute ? `${topInstitute.institution} (${formatInt(topInstitute.totalUsers)})` : tUI('notAvailable');
      return tUI('execSummary', {
        total: formatInt(s.total),
        active: formatInt(s.active),
        rate,
        invitedOld: formatInt(s.invitedOld || 0),
        realProblems: formatInt(s.realProblems || 0),
        unreachable: formatInt(s.unreachable || 0),
        dormant: formatInt(s.dormantActivated || 0),
        topCountry: topCountryText,
        topInstitute: topInstituteText
      });
    }

    function renderStatusBadge(label) {
      const text = normalize(label);
      let cls = 'info';
      if (text.includes('bon') || text.includes('good')) cls = 'good';
      else if (text.includes('faible') || text.includes('priority')) cls = 'bad';
      else if (text.includes('moyen') || text.includes('watch') || text.includes('verifier')) cls = 'warn';
      return `<span class="status ${cls}">${escapeHtml(localizeBusinessText('status', label))}</span>`;
    }

    function renderPriorityBadge(label) {
      return `<span class="priority-pill ${priorityClass(label)}">${escapeHtml(label)}</span>`;
    }

    function sortItems(items, state) {
      const arr = [...items];
      const dir = state.dir === 'asc' ? 1 : -1;
      arr.sort((a, b) => {
        let av = a[state.key];
        let bv = b[state.key];
        if (av === null || av === undefined) av = -Infinity;
        if (bv === null || bv === undefined) bv = -Infinity;
        if (typeof av === 'string' || typeof bv === 'string') {
          return String(av).localeCompare(String(bv)) * dir;
        }
        return ((av || 0) - (bv || 0)) * dir;
      });
      return arr;
    }

    function sortableTh(tableName, key, label) {
      const state = tableSortState[tableName];
      const arrow = state.key === key ? (state.dir === 'asc' ? ' ▲' : ' ▼') : '';
      return `<th class="sortable" data-table="${tableName}" data-sort-key="${key}">${escapeHtml(label)}${arrow}</th>`;
    }

    function renderDashboard(summary) {
      const t = summary.totals;
      const instituteBanner = renderInstituteViewBanner(summary);
      const segmentExportBar = instituteBanner ? '' : renderSegmentExportBar(summary);
      dashboardEl.innerHTML = `
        <div class="card" style="margin-bottom:18px;">
          ${renderSearchCard()}
        </div>

        <div class="card dashboard-nav-card" style="margin-bottom:18px;">
          <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('globalFiltersTitle'))}</h2><span>${escapeHtml(tUI('filterHint'))}</span></div>
          <div class="global-filters">
            <select id="globalFilterInstitution">${renderSelectOptions(getInstitutionOptions(), filterState.institution, tUI('filterInstitution'))}</select>
            ${renderMultiSelect('cluster', getClusterOptions(), filterState.cluster, tUI('filterCluster'))}
            ${renderMultiSelect('field', getFieldOptions(), filterState.field, tUI('filterField'))}
            <select id="globalFilterContinent">${renderSelectOptions(getContinentOptions(), filterState.continent, tUI('filterContinent'))}</select>
            <select id="globalFilterCountry">${renderSelectOptions(getCountryOptions(), filterState.country, tUI('filterCountry'))}</select>
            <select id="globalFilterDomainType">${renderSelectOptions(getDomainTypeOptions(), localizeDomainType(filterState.domainType), tUI('filterDomainType'))}</select>
            <select id="globalFilterStatus">${renderSelectOptions(getStatusOptions(), filterState.status, tUI('filterStatus'))}</select>
            <select id="globalFilterActivity">${renderSelectOptions(getActivityOptions(), filterState.activity, tUI('filterActivity'))}</select>
          </div>
          ${filterState.institution === 'all' ? renderActiveFilterBadges() : ''}
          <div class="filters-actions">
            <button type="button" id="resetFiltersBtn" class="ghost-btn">${escapeHtml(tUI('resetFilters'))}</button>
          </div>
        </div>

        ${instituteBanner}
        ${segmentExportBar}

        <div class="section-title"><h2>${escapeHtml(tUI('executiveSummaryTitle'))}</h2><span>${formatInt(t.total)} ${escapeHtml(tUI('usersColumn'))}</span></div>
        <div class="card executive-summary">
          <p class="exec-summary-text">${escapeHtml(summary.executiveSummary || '')}</p>
        </div>

        <div class="kpi-grid focus-kpis">
          <div class="card focus-kpi activation"><div class="kpi-label">${escapeHtml(tUI('focusActivation'))}</div><div class="kpi-value">${formatPct(t.activationRate)}</div><div class="kpi-sub">${escapeHtml(tUI('focusActivationSub'))}</div></div>
          <div class="card focus-kpi problems kpi-card-clickable" tabindex="0" data-filter="realProblems" data-label="Real problems"><div class="kpi-label">${escapeHtml(tUI('focusProblems'))}</div><div class="kpi-value">${formatInt(t.realProblems)}</div><div class="kpi-sub">${escapeHtml(tUI('focusProblemsSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
        </div>

        <div class="section-title"><h2>Main KPIs</h2><span>Rules automatically applied from the Excel file</span></div>
        <div class="kpi-grid">
          ${renderMainKpis(t)}
        </div>

        <div class="section-title"><h2>Charts</h2><span>Activation, invitations and most / least active institutes</span></div>
        <div class="chart-grid">
          <div class="card"><div class="chart-box"><canvas id="activationChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="invitationChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="topActiveInstitutesChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="topLeastActiveInstitutesChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="clusterChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="domainTypeChart"></canvas></div></div>
        </div>

        <div class="section-title"><h2>Engagement and data quality</h2><span>Login, score, country and roles</span></div>
        <div class="engagement-grid">
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="neverLogged" data-label="Users who never logged in"><div class="meta-label">Users who never logged in</div><div class="meta-value">${formatInt(t.neverLogged)}</div><div class="small muted">Activated without a last login date</div></div>
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="longInactive" data-label="Inactive for >180 days"><div class="meta-label">Inactive for &gt;180 days</div><div class="meta-value">${formatInt(t.longInactive)}</div><div class="small muted">Based on Last log in date</div></div>
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="affiliationMissing" data-label="Missing affiliations"><div class="meta-label">Missing affiliations</div><div class="meta-value">${formatInt(t.affiliationMissing)}</div><div class="small muted">Click to view people and emails</div></div>
        </div>

        <div class="section-title"><h2>${escapeHtml(tUI('engagementTiersTitle'))}</h2><span>${escapeHtml(tUI('engagementTiersSub'))}</span></div>
        <div class="kpi-grid">
          <div class="card kpi-green kpi-card-clickable" tabindex="0" data-filter="powerTier" data-label="${escapeHtml(tUI('tierPower'))}"><div class="kpi-label">${escapeHtml(tUI('tierPower'))}</div><div class="kpi-value">${formatInt(t.power)}</div><div class="kpi-sub">≥ 50</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-blue kpi-card-clickable" tabindex="0" data-filter="activeTier" data-label="${escapeHtml(tUI('tierActive'))}"><div class="kpi-label">${escapeHtml(tUI('tierActive'))}</div><div class="kpi-value">${formatInt(t.activeTier)}</div><div class="kpi-sub">10 – 49</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-orange kpi-card-clickable" tabindex="0" data-filter="lightTier" data-label="${escapeHtml(tUI('tierLight'))}"><div class="kpi-label">${escapeHtml(tUI('tierLight'))}</div><div class="kpi-value">${formatInt(t.lightTier)}</div><div class="kpi-sub">1 – 9</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-red kpi-card-clickable" tabindex="0" data-filter="dormantTier" data-label="${escapeHtml(tUI('tierDormant'))}"><div class="kpi-label">${escapeHtml(tUI('tierDormant'))}</div><div class="kpi-value">${formatInt(t.dormantTier)}</div><div class="kpi-sub">0</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
        </div>

        <div class="kpi-grid" style="margin-top:14px;">
          <div class="card kpi-card-clickable" tabindex="0" data-filter="unreachable" data-label="${escapeHtml(tUI('unreachableLabel'))}"><div class="kpi-label">${escapeHtml(tUI('unreachableLabel'))}</div><div class="kpi-value">${formatInt(t.unreachable)}</div><div class="kpi-sub">${escapeHtml(tUI('unreachableSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-card-clickable" tabindex="0" data-filter="notifOff" data-label="${escapeHtml(tUI('notifOffLabel'))}"><div class="kpi-label">${escapeHtml(tUI('notifOffLabel'))}</div><div class="kpi-value">${formatInt(t.notifOff)}</div><div class="kpi-sub">${escapeHtml(tUI('notifOffSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-card-clickable" tabindex="0" data-filter="dormantActivated" data-label="${escapeHtml(tUI('dormantActivatedLabel'))}"><div class="kpi-label">${escapeHtml(tUI('dormantActivatedLabel'))}</div><div class="kpi-value">${formatInt(t.dormantActivated)}</div><div class="kpi-sub">${escapeHtml(tUI('dormantActivatedSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-card-clickable" tabindex="0" data-filter="stalePresence" data-label="${escapeHtml(tUI('stalePresenceLabel'))}"><div class="kpi-label">${escapeHtml(tUI('stalePresenceLabel'))}</div><div class="kpi-value">${formatInt(t.stalePresence)}</div><div class="kpi-sub">${escapeHtml(tUI('stalePresenceSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
        </div>

        <div class="section-title"><h2>${escapeHtml(tUI('activityTitle'))}</h2><span>${escapeHtml(tUI('activitySub'))}</span></div>
        <div class="kpi-grid">
          <div class="card kpi-blue kpi-card-clickable" tabindex="0" data-filter="activeInLast30d" data-label="${escapeHtml(tUI('activeIn30Label'))}" title="${escapeHtml(tUI('tipActiveIn30'))}"><div class="kpi-label">${escapeHtml(tUI('activeIn30Label'))}</div><div class="kpi-value">${formatInt(t.activeInLast30d)}</div><div class="kpi-sub">${escapeHtml(tUI('activeIn30Sub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-blue kpi-card-clickable" tabindex="0" data-filter="activeInLast90d" data-label="${escapeHtml(tUI('activeIn90Label'))}" title="${escapeHtml(tUI('tipActiveIn90'))}"><div class="kpi-label">${escapeHtml(tUI('activeIn90Label'))}</div><div class="kpi-value">${formatInt(t.activeInLast90d)}</div><div class="kpi-sub">${escapeHtml(tUI('activeIn90Sub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card" title="${escapeHtml(tUI('tipActiveIn180'))}"><div class="kpi-label">${escapeHtml(tUI('activeIn180Label'))}</div><div class="kpi-value">${formatInt(t.activeInLast180d)}</div><div class="kpi-sub">${escapeHtml(tUI('activeIn180Sub'))}</div></div>
          <div class="card kpi-green kpi-card-clickable" tabindex="0" data-filter="ambassador" data-label="${escapeHtml(tUI('ambassadorLabel'))}" title="${escapeHtml(tUI('tipAmbassador'))}"><div class="kpi-label">${escapeHtml(tUI('ambassadorLabel'))}</div><div class="kpi-value">${formatInt(t.ambassadorCandidates)}</div><div class="kpi-sub">${escapeHtml(tUI('ambassadorSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          <div class="card kpi-orange kpi-card-clickable" tabindex="0" data-filter="churnSlipping" data-label="${escapeHtml(tUI('churnSlippingLabel'))}" title="${escapeHtml(tUI('tipChurnSlipping'))}"><div class="kpi-label">${escapeHtml(tUI('churnSlippingLabel'))}</div><div class="kpi-value">${formatInt(t.churnSlipping)}</div><div class="kpi-sub">${escapeHtml(tUI('churnSlippingSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
        </div>

        <div class="section-title"><h2>${escapeHtml(tUI('funnelTitle'))}</h2><span>${escapeHtml(tUI('funnelSub'))}</span></div>
        <div class="kpi-grid">
          <div class="card kpi-blue" title="${escapeHtml(tUI('tipFunnelMedian'))}"><div class="kpi-label">${escapeHtml(tUI('funnelP50Label'))}</div><div class="kpi-value">${summary.activationLag.p50 !== null ? formatInt(summary.activationLag.p50) : '—'}</div><div class="kpi-sub">${escapeHtml(tUI('funnelSamplesSub', summary.activationLag.samples))}</div></div>
          <div class="card kpi-orange" title="${escapeHtml(tUI('tipFunnelP90'))}"><div class="kpi-label">${escapeHtml(tUI('funnelP90Label'))}</div><div class="kpi-value">${summary.activationLag.p90 !== null ? formatInt(summary.activationLag.p90) : '—'}</div><div class="kpi-sub">${escapeHtml(tUI('funnelSamplesSub', summary.activationLag.samples))}</div></div>
          <div class="card kpi-green" title="${escapeHtml(tUI('tipFunnelWithin'))}"><div class="kpi-label">${escapeHtml(tUI('funnelWithin7Label'))}</div><div class="kpi-value">${formatInt(summary.activationLag.within7d)}</div><div class="kpi-sub">${escapeHtml(tUI('funnelSamplesSub', summary.activationLag.samples))}</div></div>
          <div class="card kpi-green" title="${escapeHtml(tUI('tipFunnelWithin'))}"><div class="kpi-label">${escapeHtml(tUI('funnelWithin14Label'))}</div><div class="kpi-value">${formatInt(summary.activationLag.within14d)}</div><div class="kpi-sub">${escapeHtml(tUI('funnelSamplesSub', summary.activationLag.samples))}</div></div>
          <div class="card kpi-green" title="${escapeHtml(tUI('tipFunnelWithin'))}"><div class="kpi-label">${escapeHtml(tUI('funnelWithin30Label'))}</div><div class="kpi-value">${formatInt(summary.activationLag.within30d)}</div><div class="kpi-sub">${escapeHtml(tUI('funnelSamplesSub', summary.activationLag.samples))}</div></div>
        </div>

        <div class="section-title"><h2>${escapeHtml(tUI('cohortTitle'))}</h2><span>${escapeHtml(tUI('cohortSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportCohortBtn" class="export-btn">${escapeHtml(tUI('exportCohort'))}</button></div><div class="table-wrap">${renderCohortTable(summary.cohorts)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Analysis by institute</h2><span>Activation and follow-up by institute</span></div>
        <div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderInstituteTable(summary.institutes)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>${escapeHtml(tUI('continentTitle'))}</h2><span>${escapeHtml(tUI('continentSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportContinentBtn" class="export-btn">${escapeHtml(tUI('exportContinent'))}</button></div><div class="table-wrap">${renderContinentTable(summary.continents)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>${escapeHtml(tUI('countryPerfTitle'))}</h2><span>${escapeHtml(tUI('countryPerfSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportCountrySummaryBtn" class="export-btn">${escapeHtml(tUI('exportCountrySummary'))}</button></div><div class="table-wrap">${renderCountryTable(summary.countries)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>${escapeHtml(tUI('clusterTitle'))}</h2><span>${escapeHtml(tUI('clusterSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportSubnetSummaryBtn" class="export-btn">${escapeHtml(tUI('exportCluster'))}</button></div><div class="table-wrap">${renderSubnetTable(summary.subNetworks)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>${escapeHtml(tUI('fieldTitle'))}</h2><span>${escapeHtml(tUI('fieldSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportFieldBtn" class="export-btn">${escapeHtml(tUI('exportField'))}</button></div><div class="table-wrap">${renderFieldTable(summary.fields, summary.fieldsLongTail)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>${escapeHtml(tUI('languageTitle'))}</h2><span>${escapeHtml(tUI('languageSub'))}</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportLanguageBtn" class="export-btn">${escapeHtml(tUI('exportLanguage'))}</button></div><div class="table-wrap">${renderLanguageTable(summary.languages)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Analysis by email domain</h2><span>Detection of personal domains and inactive pockets</span></div>
        <div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderDomainTable(summary.domains)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Decision insights</h2><span>Recommendations and actionable findings</span></div>
        <div class="card decision-insights">
          ${(summary.decisionInsights || []).map(it => `
            <div class="alert ${it.level}${it.drilldown ? ' insight-clickable' : ''}"${it.drilldown ? ' tabindex="0" role="button"' : ''} data-insight-title="${escapeHtml(it.title)}" data-insight-index="${escapeHtml(String((summary.decisionInsights || []).indexOf(it)))}">
              <div class="alert-title">${escapeHtml(it.title)}</div>
              <div>${escapeHtml(it.text)}${it.drilldown ? ` <span class="small muted">${escapeHtml(tUI('clickToViewPeople'))}</span>` : ''}</div>
            </div>
          `).join('')}
          <div class="recommendations">
            ${summary.recommendations.map(r => `<div class="rec"><strong>${escapeHtml(r.title)}</strong><div>${escapeHtml(r.text)}</div></div>`).join('')}
          </div>
          <div class="filters-actions" style="margin-top:12px;">
            <button type="button" id="exportDecisionReportBtn" class="export-btn">${escapeHtml(tUI('exportDecisionReport'))}</button>
            <button type="button" id="exportPlaybookBtn" class="export-btn">${escapeHtml(tUI('exportPlaybookBtn'))}</button>
          </div>
        </div>

        <div class="section-title"><h2>${escapeHtml(tUI('dataQualityTitle'))}</h2><span>${escapeHtml(tUI('dataQualitySub'))}</span></div>
        <div class="card">
          <div class="kpi-grid">
            <div class="card kpi-card-clickable" tabindex="0" data-filter="missingEmail" data-label="${escapeHtml(tUI('missingEmailLabel'))}"><div class="kpi-label">${escapeHtml(tUI('missingEmailLabel'))}</div><div class="kpi-value">${formatInt(t.missingEmail)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="invalidEmail" data-label="${escapeHtml(tUI('invalidEmailLabel'))}"><div class="kpi-label">${escapeHtml(tUI('invalidEmailLabel'))}</div><div class="kpi-value">${formatInt(t.invalidEmail)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="duplicateEmail" data-label="${escapeHtml(tUI('duplicateEmailLabel'))}"><div class="kpi-label">${escapeHtml(tUI('duplicateEmailLabel'))}</div><div class="kpi-value">${formatInt(t.duplicateEmails)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="missingInstitution" data-label="${escapeHtml(tUI('missingInstitutionLabel'))}"><div class="kpi-label">${escapeHtml(tUI('missingInstitutionLabel'))}</div><div class="kpi-value">${formatInt(t.missingInstitution)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="missingCountry" data-label="${escapeHtml(tUI('missingCountryLabel'))}"><div class="kpi-label">${escapeHtml(tUI('missingCountryLabel'))}</div><div class="kpi-value">${formatInt(t.missingCountryActivated)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="noisyAffiliation" data-label="${escapeHtml(tUI('noisyAffiliationLabel'))}"><div class="kpi-label">${escapeHtml(tUI('noisyAffiliationLabel'))}</div><div class="kpi-value">${formatInt(t.noisyAffiliation)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
            <div class="card kpi-card-clickable" tabindex="0" data-filter="profileIncomplete" data-label="${escapeHtml(tUI('profileIncompleteLabel'))}"><div class="kpi-label">${escapeHtml(tUI('profileIncompleteLabel'))}</div><div class="kpi-value">${formatInt(t.profileIncompleteActivated)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
          </div>
          <div class="filters-actions" style="margin-top:12px;">
            <button type="button" id="exportDataQualityBtn" class="export-btn">${escapeHtml(tUI('exportDataQualityReport'))}</button>
          </div>
        </div>

        <div class="section-title"><h2>Final consolidated table</h2><span>Summary view for monitoring</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportConsolidatedBtn" class="export-btn">${escapeHtml(tUI('exportConsolidated'))}</button></div><div class="table-wrap">${renderConsolidatedTable(summary.consolidated)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Detected columns and rules</h2><span>Transparency about the fields actually used</span></div>
        <div class="card">
          <div class="small"><strong>Fields used:</strong> ${baseRows[0] ? Object.entries(baseRows[0].fields).map(([k,v]) => `${escapeHtml(k)} → ${escapeHtml(v || 'not found')}`).join(' | ') : '—'}</div>
          <div class="footer-note">${escapeHtml(tUI('rulesNote'))}</div>
        </div>
      `;

      // Refresh the global-search index — cheap and keeps it aligned with whatever's currently filtered.
      currentSearchIndex = buildSearchIndex(summary);

      bindGlobalFilterEvents();
      bindDashboardInteractions();
      bindGlobalSearchEvents();
      createCharts(summary);
      if (currentLang === 'fr') translateUiToFrench(dashboardEl);
      refreshSidebarNavigation();
    }

    function renderMainKpis(t) {
      const items = [
        ['all','Total users',formatInt(t.total),'Loaded base','kpi-blue'],
        ['active','Activated users',formatInt(t.active),'Activated account','kpi-green'],
        ['inactive','Inactive users',formatInt(t.inactive),'No activation date','kpi-orange'],
        [null,'Activation rate',formatPct(t.activationRate),'Active / total','kpi-blue'],
        ['realProblems','Real problems',formatInt(t.realProblems),'Inactive >90 days','kpi-red'],
        ['invitedRecent','Invitation ≤30 days',formatInt(t.invitedRecent),'Recent cases',''],
        ['invitedAging','Invitation 31–90 days',formatInt(t.invitedAging),'To monitor',''],
        ['invitedOld','Invitation >90 days',formatInt(t.invitedOld),'Drop-off risk',''],
        ['neverInvited','Never invited',formatInt(t.neverInvited),'Campaign issue',''],
        ['technical','Technical / anomaly accounts',formatInt(t.technical),'Email, duplicate or test','']
      ];
      return items.map(([filter,label,value,sub,cls]) => filter
        ? `<div class="card ${cls} kpi-card-clickable" tabindex="0" data-filter="${filter}" data-label="${escapeHtml(label)}"><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-value">${value}</div><div class="kpi-sub">${escapeHtml(sub)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>`
        : `<div class="card ${cls}"><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-value">${value}</div><div class="kpi-sub">${escapeHtml(sub)}</div></div>`
      ).join('');
    }

    function translateUiToFrench(root) {
      const replacements = new Map([
        ['Header','En-tête'], ['Reading the real structure of the file','Lecture de la structure réelle du fichier'], ['Analyzed file','Fichier analysé'],
        ['Sheet read','Feuille lue'], ['Institutes detected','Instituts détectés'], ['Email domains detected','Domaines email détectés'],
        ['Main KPIs','KPI principaux'], ['Rules automatically applied from the Excel file','Règles appliquées automatiquement depuis l’Excel'],
        ['Total users','Utilisateurs total'], ['Activated users','Utilisateurs activés'], ['Inactive users','Utilisateurs inactifs'],
        ['Activation rate','Taux d’activation'], ['Real problems','Vrais problèmes'], ['Invitation ≤30 days','Invitation ≤30 jours'],
        ['Invitation 31–90 days','Invitation 31–90 jours'], ['Invitation >90 days','Invitation >90 jours'], ['Never invited','Jamais invités'],
        ['Technical / anomaly accounts','Comptes anomalie / technique'], ['Loaded base','Base chargée'], ['Activated account','Compte activé'],
        ['No activation date','Sans date d’activation'], ['Active / total','Activés / total'], ['Inactive >90 days','Inactifs >90 jours'],
        ['Recent cases','Cas encore récents'], ['To monitor','À surveiller'], ['Drop-off risk','Risque d’abandon'], ['Campaign issue','Problème de campagne'],
        ['Email, duplicate or test','Email, doublon ou test'], ['Click to view people','Cliquer pour voir les personnes'], ['Management reading','Lecture managériale'],
        ['Simple alerts for decision-makers','Alertes simples pour décideurs'], ['Charts','Graphiques'], ['Activation, invitations and most / least active institutes','Activation, invitations et instituts les plus et les moins actifs'],
        ['Engagement and data quality','Engagement et qualité de données'], ['Login, score, country and roles','Connexion, score, pays et rôles'], ['Users who never logged in','Utilisateurs jamais connectés'],
        ['Activated without a last login date','Activés sans date de dernière connexion'], ['Inactive for >180 days','Inactifs depuis >180 jours'], ['Based on Last log in date','Basé sur Last log in date'],
        ['Missing affiliations','Affiliations manquantes'], ['Click to view people and emails','Cliquer pour voir les personnes et emails'], ['Analysis by institute','Analyse par institut'],
        ['Activation and follow-up by institute','Activation et suivi par institut'], ['Analysis by email domain','Analyse par domaine email'],
        ['Detection of personal domains and inactive pockets','Détection des domaines personnels et des poches de non-activation'], ['Decision support','Aide à la décision'],
        ['Decision insights','Insights de décision'], ['Recommendations and actionable findings','Recommandations et constats actionnables'], ['Recommendations linked to measurable findings','Recommandations liées à des constats mesurables'], ['Final consolidated table','Tableau consolidé final'],
        ['Summary view for monitoring','Vue synthèse pour pilotage'], ['Detected columns and rules','Colonnes détectées et règles'], ['Fields used:','Champs utilisés :'],
        ['Good','Bon'], ['Watch','À surveiller'], ['Priority','Priorité'], ['Institution','Institution'], ['Domain','Domaine'], ['Type','Type'],
        ['Status','Statut'], ['Action','Action'], ['Users — ','Utilisateurs — '],
        ['Last name','Nom'], ['First name','Prénom'], ['Affiliated institute','Institut affilié'],
        ['Mapped institute','Institut mappé'], ['Location','Pays'], ['Organization','Organisation'],
        ['Role','Rôle'], ['Last login','Dernière connexion'], ['Real problem','Vrai problème'],
        ['Technical','Technique'], ['Active','Actif'], ['Inactive','Inactif']
      ]);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let node;
      const nodes = [];
      while ((node = walker.nextNode())) nodes.push(node);
      nodes.forEach(n => {
        let text = n.nodeValue;
        if (!text || !text.trim()) return;
        replacements.forEach((fr,en) => { text = text.split(en).join(fr); });
        n.nodeValue = text;
      });
    }

    function renderSelectOptions(options, selectedValue, label) {
      const displayOf = opt => {
        if (opt === 'active')   return tUI('active');
        if (opt === 'inactive') return tUI('inactive');
        if (opt === 'recent')   return tUI('activityRecent');
        if (opt === 'dormant')  return tUI('activityDormant');
        return opt;
      };
      const selectedSet = Array.isArray(selectedValue) ? new Set(selectedValue) : new Set([selectedValue]);
      return [
        `<option value="all">${escapeHtml(label)} — ${escapeHtml(tUI('all'))}</option>`,
        ...options.map(opt => `<option value="${escapeHtml(opt)}"${selectedSet.has(opt) ? ' selected' : ''}>${escapeHtml(displayOf(opt))}</option>`)
      ].join('');
    }

    function renderMultiSelect(filterName, options, selectedValue, label) {
      const selectedValues = Array.isArray(selectedValue) ? selectedValue : [];
      const displayText = selectedValues.length
        ? selectedValues.map(escapeHtml).join(', ')
        : `${escapeHtml(label)} — ${escapeHtml(tUI('all'))}`;

      return `
        <div class="multi-select" data-filter="${escapeHtml(filterName)}" data-label="${escapeHtml(label)}">
          <button type="button" class="multi-select-toggle" aria-haspopup="listbox" aria-expanded="false">${displayText}</button>
          <div class="multi-select-menu" role="listbox" aria-multiselectable="true" hidden>
            ${options.map(opt => `
              <label class="multi-select-option"><input type="checkbox" value="${escapeHtml(opt)}"${selectedValues.includes(opt) ? ' checked' : ''}> ${escapeHtml(opt)}</label>
            `).join('')}
          </div>
        </div>
      `;
    }

    function getInstitutionOptions() { return [...new Set(baseRows.map(r => r.mappedInstitution).filter(v => v && v !== 'Non rattaché'))].sort(); }
    function getCountryOptions() { return [...new Set(baseRows.map(r => r.country).filter(Boolean))].sort(); }
    function getDomainTypeOptions() {
      const map = { 'Institutionnel': tUI('institutional'), 'Personnel': tUI('personal'), 'Inconnu / autre': tUI('unknownOther') };
      return [...new Set(baseRows.map(r => map[r.domainType] || r.domainType))];
    }
    function getStatusOptions() { return ['active', 'inactive']; }
    // Step 5 — option getters for new filters
    function getClusterOptions() {
      const counts = new Map();
      baseRows.forEach(r => (r.subNetworks || []).forEach(sn => counts.set(sn, (counts.get(sn) || 0) + 1)));
      return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([k]) => k);
    }
    function getProfileTypeOptions() { return ['Admin', 'Scientific', 'Member — Unknown']; }
    function getScientificOptions() { return ['Scientific', 'Non-scientific', 'Unknown / To verify']; }
    function getContinentOptions() {
      return [...new Set(baseRows.map(r => r.continent).filter(Boolean))].sort();
    }
    function getActivityOptions() { return ['recent', 'dormant']; }
    function getFieldOptions() {
      const counts = new Map();
      baseRows.forEach(r => (r.industries || []).forEach(f => counts.set(f, (counts.get(f) || 0) + 1)));
      return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k]) => k);
    }

    // Global search — input event, Escape to close, click-outside to dismiss.
    function bindGlobalSearchEvents() {
      const input = document.getElementById('globalSearchInput');
      const host  = document.getElementById('globalSearchResults');
      if (!input || !host) return;
      input.addEventListener('input', e => {
        const q = e.target.value;
        if (!q || q.trim().length < 2) { host.style.display = 'none'; host.innerHTML = ''; return; }
        renderSearchResults(q.trim());
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Escape') { input.value = ''; host.style.display = 'none'; host.innerHTML = ''; }
      });
      // Hide results when clicking anywhere outside the input/results area.
      document.addEventListener('click', e => {
        if (e.target === input) return;
        if (host.contains(e.target)) return;
        host.style.display = 'none';
      });
    }

    function bindGlobalFilterEvents() {
      const inst = document.getElementById('globalFilterInstitution');
      const country = document.getElementById('globalFilterCountry');
      const domainType = document.getElementById('globalFilterDomainType');
      const status = document.getElementById('globalFilterStatus');
      const continent = document.getElementById('globalFilterContinent');
      const activity = document.getElementById('globalFilterActivity');
      if (!inst) return;
      inst.addEventListener('change', e => { filterState.institution = e.target.value; applyFiltersAndRender(); });
      country.addEventListener('change', e => { filterState.country = e.target.value; applyFiltersAndRender(); });
      domainType.addEventListener('change', e => {
        const reverse = { [tUI('institutional')]: 'Institutionnel', [tUI('personal')]: 'Personnel', [tUI('unknownOther')]: 'Inconnu / autre' };
        filterState.domainType = e.target.value === 'all' ? 'all' : (reverse[e.target.value] || e.target.value);
        applyFiltersAndRender();
      });
      if (continent)   continent.addEventListener('change',   e => { filterState.continent = e.target.value; applyFiltersAndRender(); });
      if (activity)    activity.addEventListener('change',    e => { filterState.activity = e.target.value; applyFiltersAndRender(); });
      status.addEventListener('change', e => {
        const value = e.target.value;
        filterState.status = value === 'all' ? 'all' : (value === tUI('active').toLowerCase() ? 'active' : 'inactive');
        applyFiltersAndRender();
      });

      if (!hasBoundMultiSelectEvents) {
        const closeAllMultiSelects = () => {
          dashboardEl.querySelectorAll('.multi-select').forEach(wrapper => {
            const toggle = wrapper.querySelector('.multi-select-toggle');
            const menu = wrapper.querySelector('.multi-select-menu');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            if (menu) menu.hidden = true;
          });
        };

        dashboardEl.addEventListener('click', e => {
          const toggle = e.target.closest('.multi-select-toggle');
          const wrapper = e.target.closest('.multi-select');
          if (toggle) {
            e.preventDefault();
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            closeAllMultiSelects();
            if (!expanded && wrapper) {
              const menu = wrapper.querySelector('.multi-select-menu');
              if (menu) menu.hidden = false;
              toggle.setAttribute('aria-expanded', 'true');
            }
            return;
          }
          if (wrapper) return;
          closeAllMultiSelects();
        });

        dashboardEl.addEventListener('change', e => {
          if (!e.target.matches('.multi-select-menu input[type="checkbox"]')) return;
          const wrapper = e.target.closest('.multi-select');
          if (!wrapper) return;
          const filterKey = wrapper.dataset.filter;
          const label = wrapper.dataset.label || '';
          const selected = Array.from(wrapper.querySelectorAll('.multi-select-menu input[type="checkbox"]:checked')).map(input => input.value);
          filterState[filterKey] = selected.length ? selected : 'all';
          const toggle = wrapper.querySelector('.multi-select-toggle');
          if (toggle) {
            toggle.innerHTML = selected.length ? selected.map(escapeHtml).join(', ') : `${escapeHtml(label)} — ${escapeHtml(tUI('all'))}`;
          }
          applyFiltersAndRender();
        });

        hasBoundMultiSelectEvents = true;
      }

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) resetBtn.addEventListener('click', () => {
        filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all', cluster: 'all', profileType: 'all', scientific: 'all', field: 'all', continent: 'all', activity: 'all' };
        applyFiltersAndRender();
      });
    }

    function bindDashboardInteractions() {
      dashboardEl.querySelectorAll('.kpi-card-clickable[data-filter]').forEach(card => {
        const open = () => openDetailModal(card.dataset.filter, card.dataset.label || tUI('detail'));
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      });
      dashboardEl.querySelectorAll('.engagement-clickable[data-engagement-filter]').forEach(card => {
        const open = () => {
          let rows = [];
          const filter = card.dataset.engagementFilter;
          if (filter === 'affiliationMissing') rows = currentSummary.rows.filter(r => !r.hasAffiliation);
          else if (filter === 'neverLogged') rows = currentSummary.rows.filter(r => r.neverLogged);
          else if (filter === 'longInactive') rows = currentSummary.rows.filter(r => r.longInactive);
          openRowsDetail(rows, card.dataset.label || tUI('detail'), tUI('rowsSegment', rows.length));
        };
        card.addEventListener('click', open);
      });
      dashboardEl.querySelectorAll('.stat-link[data-institution]').forEach(el => {
        el.addEventListener('click', () => openInstitutionDetail(el.dataset.institution));
      });
      // Step 5 — parameterized stat-link drill-downs (cluster:/continent:/field:/cohort:/lang:/recency:/state:/country:/institute:)
      dashboardEl.querySelectorAll('.stat-link[data-filter]').forEach(el => {
        el.addEventListener('click', () => openDetailModal(el.dataset.filter, (el.textContent || '').trim() || tUI('detail')));
      });
      dashboardEl.querySelectorAll('.stat-link[data-consolidated-segment][data-consolidated-metric]').forEach(el => {
        el.addEventListener('click', () => openConsolidatedDetail(el.dataset.consolidatedSegment, el.dataset.consolidatedMetric));
      });
      dashboardEl.querySelectorAll('.stat-link[data-institute-segment][data-institute-metric]').forEach(el => {
        el.addEventListener('click', () => openInstituteMetricDetail(el.dataset.instituteSegment, el.dataset.instituteMetric));
      });
      dashboardEl.querySelectorAll('.insight-clickable[data-insight-index]').forEach(card => {
        const open = () => openDecisionInsightDetail(Number(card.dataset.insightIndex), card.dataset.insightTitle || tUI('detail'));
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      });
      dashboardEl.querySelectorAll('.scroll-btn[data-direction]').forEach(btn => btn.addEventListener('click', () => scrollTable(btn, Number(btn.dataset.direction || '1'))));
      dashboardEl.querySelectorAll('th.sortable[data-table][data-sort-key]').forEach(th => {
        th.addEventListener('click', () => {
          const table = th.dataset.table;
          const key = th.dataset.sortKey;
          const current = tableSortState[table];
          tableSortState[table] = { key, dir: current.key === key && current.dir === 'desc' ? 'asc' : 'desc' };
          renderDashboard(currentSummary);
        });
      });
      const exportBtn = document.getElementById('exportConsolidatedBtn');
      if (exportBtn) exportBtn.addEventListener('click', () => exportConsolidatedTable());
      const exportVisibleBtn = document.getElementById('exportVisibleUsersBtn');
      if (exportVisibleBtn) exportVisibleBtn.addEventListener('click', () => exportSegmentRows(currentSummary.rows, 'visible_users'));
      const exportInstituteBtn = document.getElementById('exportInstituteViewBtn');
      if (exportInstituteBtn) exportInstituteBtn.addEventListener('click', () => {
        const selected = getSelectedInstituteSummary(currentSummary);
        if (!selected) return;
        exportInstituteView(selected);
      });
      const exportFollowBtn = document.getElementById('exportFollowUpListBtn');
      if (exportFollowBtn) exportFollowBtn.addEventListener('click', () => exportSegmentRows(getFollowUpRows(currentSummary.rows), 'follow_up_list'));
      // New decision-support exports
      const exportCountryBtn = document.getElementById('exportCountrySummaryBtn');
      if (exportCountryBtn) exportCountryBtn.addEventListener('click', () => exportCountrySummary());
      const exportSubnetBtn = document.getElementById('exportSubnetSummaryBtn');
      if (exportSubnetBtn) exportSubnetBtn.addEventListener('click', () => exportSubnetSummary());
      const exportDqBtn = document.getElementById('exportDataQualityBtn');
      if (exportDqBtn) exportDqBtn.addEventListener('click', () => exportDataQualityIssues());
      const exportDecisionBtn = document.getElementById('exportDecisionReportBtn');
      if (exportDecisionBtn) exportDecisionBtn.addEventListener('click', () => exportDecisionReport());
      const exportPlaybookBtn = document.getElementById('exportPlaybookBtn');
      if (exportPlaybookBtn) exportPlaybookBtn.addEventListener('click', () => exportOutreachPlaybook());
      // Step 5 — new exports
      const exportContinentBtn = document.getElementById('exportContinentBtn');
      if (exportContinentBtn) exportContinentBtn.addEventListener('click', () => exportContinentSummary());
      const exportFieldBtn = document.getElementById('exportFieldBtn');
      if (exportFieldBtn) exportFieldBtn.addEventListener('click', () => exportFieldSummary());
      const exportLanguageBtn = document.getElementById('exportLanguageBtn');
      if (exportLanguageBtn) exportLanguageBtn.addEventListener('click', () => exportLanguageSummary());
      const exportCohortBtn = document.getElementById('exportCohortBtn');
      if (exportCohortBtn) exportCohortBtn.addEventListener('click', () => exportCohortSummary());
    }

    function scrollTable(button, direction) {
      const card = button.closest('.table-card');
      const wrap = card ? card.querySelector('.table-wrap') : null;
      if (wrap) wrap.scrollBy({ left: direction * 360, behavior: 'smooth' });
    }

    function rowsForInstitution(name) {
      return currentSummary.rows.filter(r => r.mappedInstitution === name);
    }

    function detailRowsForFilter(filterKey) {
      const rows = currentSummary.rows;
      // Parameterized filters use "key:value" — e.g. "cluster:Pasteur Network".
      // Values may legitimately contain ':' / spaces, so we split on the first ':' only.
      if (filterKey && filterKey.indexOf(':') !== -1) {
        const idx = filterKey.indexOf(':');
        const k = filterKey.slice(0, idx);
        const v = filterKey.slice(idx + 1);
        if (k === 'cluster')   return rows.filter(r => (r.subNetworks || []).includes(v));
        if (k === 'continent') return rows.filter(r => (r.continent || '(No country)') === v);
        if (k === 'field')     return rows.filter(r => (r.industries || []).includes(v));
        if (k === 'cohort')    return rows.filter(r => r.cohortMonth === v);
        if (k === 'lang')      return rows.filter(r => (r.language || '').trim().toLowerCase() === v.toLowerCase());
        if (k === 'recency')   return rows.filter(r => r.visitRecencyBucket === v);
        if (k === 'state')     return rows.filter(r => r.state === v);
        if (k === 'country')   return rows.filter(r => r.country === v);
        if (k === 'institute') return rows.filter(r => r.mappedInstitution === v);
        return [];
      }
      if (filterKey === 'invitedRecent') return rows.filter(r => !r.active && isInvitedRecentBucket(r.invitationBucket));
      if (filterKey === 'invitedAging') return rows.filter(r => !r.active && isInvitedAgingBucket(r.invitationBucket));
      if (filterKey === 'neverInvited') return rows.filter(r => !r.active && isNeverInvitedBucket(r.invitationBucket));
      const by = {
        all: r => true,
        active: r => r.active,
        inactive: r => !r.active,
        realProblems: r => r.realProblem,
        invitedRecent: r => !r.active && r.invitationBucket === '≤30 jours',
        invitedAging: r => !r.active && r.invitationBucket === '31–90 jours',
        invitedOld: r => !r.active && r.invitationBucket === '>90 jours',
        neverInvited: r => !r.active && r.invitationBucket === 'Jamais envoyée',
        technical: r => r.technical,
        // New decision-support filters
        unreachable: r => r.unreachable,
        notifOff: r => r.notificationsOff,
        dormantActivated: r => r.dormantActivated,
        stalePresence: r => r.stalePresence,
        powerTier: r => r.engagementTier === 'Power',
        activeTier: r => r.engagementTier === 'Active',
        lightTier: r => r.engagementTier === 'Light',
        dormantTier: r => r.engagementTier === 'Dormant',
        missingEmail: r => !r.email,
        invalidEmail: r => r.email && !r.emailValid,
        duplicateEmail: r => r.duplicateEmail,
        missingInstitution: r => r.mappedInstitution === 'Non rattaché',
        missingCountry: r => r.missingCountry,
        noisyAffiliation: r => r.noisyAffiliation,
        profileIncomplete: r => r.active && r.profileCompleteness < 3,
        // Step 4 — profile / scientific / engagement segments
        profileAdmin: r => r.profileType === 'Admin',
        profileScientific: r => r.profileType === 'Scientific',
        profileMemberUnknown: r => r.profileType === 'Member — Unknown',
        scientificScientific: r => r.scientificProfile === 'Scientific',
        scientificNonScientific: r => r.scientificProfile === 'Non-scientific',
        scientificUnknown: r => r.scientificProfile === 'Unknown / To verify',
        activeInLast30d: r => r.activeInLast30d,
        activeInLast90d: r => r.activeInLast90d,
        ambassador: r => r.active && r.scientificProfile === 'Scientific'
          && (r.subNetworks || []).length >= 2
          && (r.engagementTier === 'Power' || r.engagementTier === 'Active'),
        churnSlipping: r => r.active && r.visits >= 10 && r.loginAge !== null
          && r.loginAge >= 90 && r.loginAge <= 180,
        activatedNoInvitation: r => r.active && !r.invitationDate,
        lastJobEnded: r => r.lastJobEnded
      };
      return rows.filter(by[filterKey] || (() => false));
    }

    function openDetailModal(filterKey, label) {
      const rows = detailRowsForFilter(filterKey);
      currentDetailRows = rows;
      currentDetailTitle = label;
      renderDetailModalContent(label, rows, tUI('rowsFilter', rows.length));
    }

    function rowsForDecisionInsight(insight) {
      if (!insight || !insight.drilldown) return [];
      const { drilldown } = insight;
      if (drilldown.type === 'filter') return detailRowsForFilter(drilldown.filterKey);
      if (drilldown.type === 'countries') {
        const values = new Set(drilldown.values || []);
        return currentSummary.rows.filter(r => values.has(r.country));
      }
      if (drilldown.type === 'institutesInvitedOld') {
        const values = new Set(drilldown.values || []);
        return currentSummary.rows.filter(r => values.has(r.mappedInstitution) && !r.active && r.invitationBucket === '>90 jours');
      }
      if (drilldown.type === 'undefinedCluster') {
        return currentSummary.rows.filter(r => {
          const subs = r.subNetworks || [];
          return subs.length && subs.every(s => !s || s.toLowerCase() === 'undefined');
        });
      }
      return [];
    }

    function openDecisionInsightDetail(index, title) {
      const insight = (currentSummary?.decisionInsights || [])[index];
      if (!insight || !insight.drilldown) return;
      const rows = rowsForDecisionInsight(insight);
      currentDetailRows = rows;
      currentDetailTitle = title;
      renderDetailModalContent(title, rows, tUI('rowsSegment', rows.length));
    }

    function openInstitutionDetail(name) {
      const rows = rowsForInstitution(name);
      currentDetailRows = rows;
      currentDetailTitle = tUI('usersForInstituteTitle', name);
      renderDetailModalContent(currentDetailTitle, rows, tUI('rowsForInstitute', rows.length));
    }

    function rowsForInstituteMetric(name, metric) {
      const base = rowsForInstitution(name);
      const byMetric = {
        total: () => base,
        active: () => base.filter(r => r.active),
        inactive: () => base.filter(r => !r.active),
        realProblems: () => base.filter(r => r.realProblem)
      };
      return (byMetric[metric] || byMetric.total)();
    }

    function instituteMetricLabel(metric) {
      const labels = {
        total: currentLang === 'fr' ? 'Total' : 'Total',
        active: currentLang === 'fr' ? 'ActivÃ©s' : 'Activated',
        inactive: currentLang === 'fr' ? 'Inactifs' : 'Inactive',
        realProblems: currentLang === 'fr' ? 'Vrais problÃ¨mes' : 'Real problems'
      };
      return labels[metric] || (currentLang === 'fr' ? 'DÃ©tail' : 'Detail');
    }

    function openInstituteMetricDetail(name, metric) {
      const rows = rowsForInstituteMetric(name, metric);
      const title = `${name} â€” ${instituteMetricLabel(metric)}`;
      currentDetailRows = rows;
      currentDetailTitle = title;
      renderDetailModalContent(title, rows, tUI('rowsSegment', rows.length));
    }

    function rowsForConsolidatedDetail(segment, metric) {
      const base = currentSummary.rows.filter(r => r.mappedInstitution === segment);
      const byMetric = {
        total: () => base,
        active: () => base.filter(r => r.active),
        inactive: () => base.filter(r => !r.active),
        invitedRecent: () => base.filter(r => !r.active && isInvitedRecentBucket(r.invitationBucket)),
        invitedAging: () => base.filter(r => !r.active && isInvitedAgingBucket(r.invitationBucket)),
        invitedOld: () => base.filter(r => !r.active && r.invitationBucket === '>90 jours'),
        neverInvited: () => base.filter(r => !r.active && isNeverInvitedBucket(r.invitationBucket)),
        realProblems: () => base.filter(r => r.realProblem)
      };
      return (byMetric[metric] || byMetric.total)();
    }

    function consolidatedMetricLabel(metric) {
      const labels = {
        total: currentLang === 'fr' ? 'Total' : 'Total',
        active: currentLang === 'fr' ? 'ActivÃ©s' : 'Activated',
        inactive: currentLang === 'fr' ? 'Inactifs' : 'Inactive',
        invitedRecent: currentLang === 'fr' ? 'Invitations â‰¤30 jours' : 'Invitations â‰¤30 days',
        invitedAging: currentLang === 'fr' ? 'Invitations 31â€“90 jours' : 'Invitations 31â€“90 days',
        invitedOld: currentLang === 'fr' ? 'Invitations >90 jours' : 'Invitations >90 days',
        neverInvited: currentLang === 'fr' ? 'Jamais invitÃ©s' : 'No invitation',
        realProblems: currentLang === 'fr' ? 'Vrais problÃ¨mes' : 'Real problems'
      };
      return labels[metric] || (currentLang === 'fr' ? 'DÃ©tail' : 'Detail');
    }

    function openConsolidatedDetail(segment, metric) {
      const rows = rowsForConsolidatedDetail(segment, metric);
      const title = `${segment} â€” ${consolidatedMetricLabel(metric)}`;
      currentDetailRows = rows;
      currentDetailTitle = title;
      renderDetailModalContent(title, rows, tUI('rowsSegment', rows.length));
    }

    function openRowsDetail(rows, title, metaText) {
      currentDetailRows = rows;
      currentDetailTitle = title;
      renderDetailModalContent(title, rows, metaText || tUI('rowsGeneric', rows.length));
    }

    function rerenderCurrentDetail() {
      if (!detailModalEl.classList.contains('open')) return;
      renderDetailModalContent(currentDetailTitle || tUI('detail'), currentDetailRows || [], tUI('rowsGeneric', (currentDetailRows || []).length));
    }

    function renderDetailModalContent(title, rows, metaText) {
      detailModalTitleEl.textContent = title;
      detailModalMetaEl.textContent = metaText;
      detailModalBodyEl.innerHTML = `
        <div class="modal-tools">
          <input id="detailSearchName" type="text" placeholder="${escapeHtml(tUI('searchName'))}">
          <input id="detailSearchEmail" type="text" placeholder="${escapeHtml(tUI('searchEmail'))}">
          <button type="button" id="detailExportCsv" class="export-btn">${escapeHtml(tUI('exportCsv'))}</button>
          <button type="button" id="detailExportExcel" class="export-btn">${escapeHtml(tUI('exportExcel'))}</button>
        </div>
        <div id="detailTableHost">${renderDetailTable(rows)}</div>
      `;
      detailModalEl.classList.add('open');
      detailModalEl.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      bindDetailControls(rows);
      if (currentLang === 'fr') translateUiToFrench(detailModalEl);
    }

    function renderDetailTable(rows) {
      if (!rows.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      return `<div class="detail-table-shell">
        <div class="detail-table-wrap table-wrap">
          <table>
            <thead><tr>
              <th>Last name</th><th>First name</th><th>Email</th><th>Affiliated institute</th><th>Mapped institute</th><th>Location</th><th>Organization</th><th>Role</th><th>${escapeHtml(tUI('priorityScore'))}</th><th>Status</th><th>Invitation</th><th>Last login</th>
            </tr></thead>
            <tbody>
              ${rows.map(r => `<tr>
                <td>${escapeHtml(r.lastName || '—')}</td>
                <td>${escapeHtml(r.firstName || '—')}</td>
                <td>${escapeHtml(r.email || '—')}</td>
                <td>${escapeHtml(r.affiliation || '—')}</td>
                <td>${escapeHtml(r.mappedInstitution || '—')}<div class="small muted">${escapeHtml(localizeBusinessText('mappingSource', r.mappingSource || ''))}</div></td>
                <td>${escapeHtml(r.country || '—')}</td>
                <td>${escapeHtml(r.company || '—')}</td>
                <td>${escapeHtml(r.role || '—')}</td>
                <td>${renderPriorityBadge(getUserPriorityLevel(r))}</td>
                <td>${r.active ? '<span class="status good">Active</span>' : '<span class="status warn">Inactive</span>'}${r.realProblem ? ' <span class="status bad">Real problem</span>' : ''}${r.technical ? ' <span class="status info">Technical</span>' : ''}</td>
                <td>${escapeHtml(localizeBusinessText('invitationBucket', r.invitationBucket || '—'))}</td>
                <td>${escapeHtml(r.lastLoginText || '—')}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="detail-bottom-toolbar">
          <button type="button" class="scroll-btn" data-scroll-target=".detail-table-wrap" data-direction="-1">←</button>
          <button type="button" class="scroll-btn" data-scroll-target=".detail-table-wrap" data-direction="1">→</button>
        </div>
      </div>`;
    }

    function bindDetailControls(sourceRows) {
      const nameInput = document.getElementById('detailSearchName');
      const emailInput = document.getElementById('detailSearchEmail');
      const host = document.getElementById('detailTableHost');
      const rerender = () => {
        const nameQ = normalize(nameInput.value);
        const emailQ = normalize(emailInput.value);
        const filtered = sourceRows.filter(r => (!nameQ || normalize(`${r.firstName} ${r.lastName}`).includes(nameQ)) && (!emailQ || normalize(r.email).includes(emailQ)));
        host.innerHTML = renderDetailTable(filtered);
        currentDetailRows = filtered;
        detailModalMetaEl.textContent = tUI('rowsGeneric', filtered.length);
        host.querySelectorAll('.scroll-btn[data-scroll-target]').forEach(btn => btn.addEventListener('click', () => {
          const target = host.querySelector(btn.dataset.scrollTarget);
          if (target) target.scrollBy({ left: Number(btn.dataset.direction || '1') * 360, behavior: 'smooth' });
        }));
        host.querySelectorAll('.detail-table-wrap').forEach(wrap => {
          wrap.addEventListener('wheel', event => {
            const canScrollVertically = wrap.scrollHeight > wrap.clientHeight;
            const canScrollHorizontally = wrap.scrollWidth > wrap.clientWidth;
            let consumed = false;

            if (canScrollHorizontally && (event.shiftKey || Math.abs(event.deltaX) > 0)) {
              wrap.scrollLeft += event.shiftKey ? event.deltaY : event.deltaX;
              consumed = true;
            }

            if (canScrollVertically && !event.shiftKey && Math.abs(event.deltaY) > 0) {
              wrap.scrollTop += event.deltaY;
              consumed = true;
            }

            if (consumed) event.preventDefault();
          }, { passive: false });
        });
        if (currentLang === 'fr') translateUiToFrench(host);
      };
      nameInput.addEventListener('input', rerender);
      emailInput.addEventListener('input', rerender);
      document.getElementById('detailExportCsv').addEventListener('click', () => exportRows(currentDetailRows, 'csv'));
      document.getElementById('detailExportExcel').addEventListener('click', () => exportRows(currentDetailRows, 'xlsx'));
      rerender();
    }

    function exportRows(rows, format, fileBaseName = 'detail_export') {
      const data = rows.map(r => ({
        last_name: r.lastName || '', first_name: r.firstName || '', email: r.email || '',
        affiliated_institute: r.affiliation || '', mapped_institute: r.mappedInstitution || '', location: r.country || '',
        organization: r.company || '', role: r.role || '', priority: getUserPriorityLevel(r),
        status: r.active ? (currentLang === 'fr' ? 'Actif' : 'Active') : (currentLang === 'fr' ? 'Inactif' : 'Inactive'),
        invitation_bucket: localizeBusinessText('invitationBucket', r.invitationBucket || ''), last_login: r.lastLoginText || ''
      }));
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'detail');
      if (format === 'csv') XLSX.writeFile(wb, `${fileBaseName}.csv`, { bookType: 'csv' });
      else XLSX.writeFile(wb, `${fileBaseName}.xlsx`);
    }

    function exportSegmentRows(rows, fileBaseName) {
      exportRows(rows || [], 'xlsx', fileBaseName || 'segment_export');
    }

    function exportInstituteView(selected) {
      const rows = currentSummary.rows || [];
      const payload = rows.map(r => ({
        institute: selected.institution,
        total_filtered_users: rows.length,
        activation_rate: Number((currentSummary.totals.activationRate || 0).toFixed(1)),
        real_problems: currentSummary.totals.realProblems,
        user_last_name: r.lastName || '',
        user_first_name: r.firstName || '',
        user_email: r.email || '',
        organization: r.company || '',
        role: r.role || '',
        priority: getUserPriorityLevel(r),
        invitation_bucket: localizeBusinessText('invitationBucket', r.invitationBucket || ''),
        active: r.active ? 1 : 0
      }));
      const ws = XLSX.utils.json_to_sheet(payload);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'institute_view');
      XLSX.writeFile(wb, 'institute_view_export.xlsx');
    }

    function closeDetailModal() {
      detailModalEl.classList.remove('open');
      detailModalEl.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    function renderInstituteTable(items) {
      const sorted = sortItems(items, tableSortState.institutes);
      return `<table>
        <thead><tr>${[
          sortableTh('institutes','institution','Institution'),
          sortableTh('institutes','totalUsers','PNLink users'),
          sortableTh('institutes','activeUsers','Activated'),
          sortableTh('institutes','inactiveUsers','Inactive'),
          sortableTh('institutes','activationRate','Activation rate'),
          sortableTh('institutes','affiliationRate','% affiliation'),
          sortableTh('institutes','realProblems','Real problems'),
          sortableTh('institutes','status','Status'),
          sortableTh('institutes','action','Action')
        ].join('')}</tr></thead>
        <tbody>
          ${sorted.map(i => `<tr>
            <td><strong class="stat-link" data-institute-segment="${escapeHtml(i.institution)}" data-institute-metric="total">${escapeHtml(i.institution)}</strong><div class="small muted">Confidence: ${escapeHtml(localizeBusinessText('mappingConfidence', i.mappingLevel))}</div></td>
            <td><span class="stat-link" data-institute-segment="${escapeHtml(i.institution)}" data-institute-metric="total">${formatInt(i.totalUsers)}</span></td>
            <td><span class="stat-link" data-institute-segment="${escapeHtml(i.institution)}" data-institute-metric="active">${formatInt(i.activeUsers)}</span></td>
            <td><span class="stat-link" data-institute-segment="${escapeHtml(i.institution)}" data-institute-metric="inactive">${formatInt(i.inactiveUsers)}</span></td>
            <td>${formatPct(i.activationRate)}</td><td>${formatPct(i.affiliationRate)}</td>
            <td><span class="stat-link" data-institute-segment="${escapeHtml(i.institution)}" data-institute-metric="realProblems">${formatInt(i.realProblems)}</span></td>
            <td>${renderStatusBadge(i.status)}</td><td>${escapeHtml(localizeBusinessText('action', i.action))}</td>
          </tr>`).join('')}
        </tbody></table>`;
    }

    function renderDomainTable(items) {
      const sorted = sortItems(items.slice(0, 25), tableSortState.domains);
      return `<table>
        <thead><tr>${[
          sortableTh('domains','domain','Domain'),
          sortableTh('domains','type','Type'),
          sortableTh('domains','totalUsers','Total'),
          sortableTh('domains','activeUsers','Activated'),
          sortableTh('domains','inactiveUsers','Inactive'),
          sortableTh('domains','activationRate','Activation rate'),
          sortableTh('domains','invitedRecent','Invitations ≤30d'),
          sortableTh('domains','neverInvited','No invitation'),
          sortableTh('domains','oldWithoutActivation','90d without activation'),
          sortableTh('domains','realProblems','Real problems')
        ].join('')}</tr></thead>
        <tbody>
          ${sorted.map(d => `<tr>
            <td><strong>${escapeHtml(d.domain)}</strong></td><td>${renderStatusBadge(d.type)}</td><td>${formatInt(d.totalUsers)}</td><td>${formatInt(d.activeUsers)}</td><td>${formatInt(d.inactiveUsers)}</td><td>${formatPct(d.activationRate)}</td><td>${formatInt(d.invitedRecent)}</td><td>${formatInt(d.neverInvited)}</td><td>${formatInt(d.oldWithoutActivation)}</td><td>${formatInt(d.realProblems)}</td>
          </tr>`).join('')}
        </tbody></table>`;
    }

    function renderConsolidatedTable(items) {
      const sorted = sortItems(items, tableSortState.consolidated);
      return `<table>
        <thead><tr>${[
          sortableTh('consolidated','segment','Institution / segment'),
          sortableTh('consolidated','totalUsers','Total'),
          sortableTh('consolidated','activeUsers','Activated'),
          sortableTh('consolidated','inactiveUsers','Inactive'),
          sortableTh('consolidated','activationRate','Activation rate'),
          sortableTh('consolidated','invitedRecent','≤30d'),
          sortableTh('consolidated','invitedAging','31–90d'),
          sortableTh('consolidated','invitedOld','>90d'),
          sortableTh('consolidated','neverInvited','No invitation'),
          sortableTh('consolidated','realProblems','Real problems'),
          sortableTh('consolidated','status','Status'),
          sortableTh('consolidated','priority','Priority'),
          sortableTh('consolidated','action','Action')
        ].join('')}</tr></thead>
        <tbody>
          ${sorted.map(i => `<tr>
            <td><strong class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="total">${escapeHtml(i.segment)}</strong></td>
            <td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="total">${formatInt(i.totalUsers)}</span></td>
            <td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="active">${formatInt(i.activeUsers)}</span></td>
            <td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="inactive">${formatInt(i.inactiveUsers)}</span></td>
            <td>${formatPct(i.activationRate)}</td><td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="invitedRecent">${formatInt(i.invitedRecent)}</span></td><td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="invitedAging">${formatInt(i.invitedAging)}</span></td><td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="invitedOld">${formatInt(i.invitedOld)}</span></td><td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="neverInvited">${formatInt(i.neverInvited)}</span></td>
            <td><span class="stat-link" data-consolidated-segment="${escapeHtml(i.segment)}" data-consolidated-metric="realProblems">${formatInt(i.realProblems)}</span></td>
            <td>${renderStatusBadge(i.status)}</td><td>${renderPriorityBadge(i.priority)}</td><td>${escapeHtml(localizeBusinessText('action', i.action))}</td>
          </tr>`).join('')}
        </tbody></table>`;
    }

    function handleActivationChartClick(items) {
      return `<table>
        <thead><tr><th>Domain</th><th>Type</th><th>Total</th><th>Activated</th><th>Inactive</th><th>Activation rate</th><th>Invitations ≤30d</th><th>No invitation</th><th>90d without activation</th><th>Real problems</th></tr></thead>
        <tbody>
          ${items.slice(0, 25).map(d => `<tr>
            <td><strong>${escapeHtml(d.domain)}</strong></td><td>${renderStatusBadge(d.type)}</td><td>${formatInt(d.totalUsers)}</td><td>${formatInt(d.activeUsers)}</td><td>${formatInt(d.inactiveUsers)}</td><td>${formatPct(d.activationRate)}</td><td>${formatInt(d.invitedRecent)}</td><td>${formatInt(d.neverInvited)}</td><td>${formatInt(d.oldWithoutActivation)}</td><td>${formatInt(d.realProblems)}</td>
          </tr>`).join('')}
        </tbody></table>`;
    }

    function chartLabels() {
      return currentLang === 'fr'
        ? {
            activation:['Activés','Inactifs'],
            invitation:['≤30 jours','31–90 jours','>90 jours','Jamais envoyée'],
            domain:['Institutionnel','Personnel','Inconnu / autre'],
            topA:'Top instituts les plus actifs (%)',
            topL:'Top instituts les moins actifs (%)',
            actTitle:'Activation des comptes',
            invTitle:'Vieillissement des invitations non activées',
            domTitle:'Répartition par type de domaine email',
            actRate:'Taux d’activation',
            inactive:'Inactifs',
            activeUsersTitle:'Top 10 utilisateurs actifs',
            activeUsersMetric:'Score d’engagement',
            activeUsersFallback:'Utilisateurs actifs',
            followUpTitle:'Top 10 utilisateurs à relancer',
            followUpMetric:'Indice de priorité',
            invitationStatusTitle:'Répartition par statut d’invitation',
            followUpProblem:'Problème réel',
            followUpNeverLogged:'Jamais connecté',
            followUpLongInactive:'Inactif >180 jours',
            followUpOther:'À surveiller',
            noData:'Aucune donnée'
          }
        : {
            activation:['Active','Inactive'],
            invitation:['≤30 days','31–90 days','>90 days','Never sent'],
            domain:['Institutional','Personal','Unknown / other'],
            topA:'Top most active institutes (%)',
            topL:'Top least active institutes (%)',
            actTitle:'Account activation',
            invTitle:'Age of non-activated invitations',
            domTitle:'Breakdown by email domain type',
            actRate:'Activation rate',
            inactive:'Inactive',
            activeUsersTitle:'Top 10 active users',
            activeUsersMetric:'Engagement score',
            activeUsersFallback:'Active users',
            followUpTitle:'Top 10 users needing follow-up',
            followUpMetric:'Priority index',
            invitationStatusTitle:'Breakdown by invitation status',
            followUpProblem:'Real problem',
            followUpNeverLogged:'Never logged in',
            followUpLongInactive:'Inactive >180 days',
            followUpOther:'To monitor',
            noData:'No data'
          };
    }

    function getUserDisplayName(row) {
      const full = [row.firstName, row.lastName].filter(Boolean).join(' ').trim();
      return full || row.email || 'Unknown';
    }

    function getUserShortLabel(row) {
      const label = getUserDisplayName(row);
      return label.length > 32 ? `${label.slice(0, 32)}…` : label;
    }

    function getFollowUpPriority(row) {
      let score = 0;
      if (row.realProblem) score += 1000;
      if (row.neverLogged) score += 300;
      if (row.longInactive) score += 250;
      if (!row.active && row.invitationBucket === '31–90 jours') score += 180;
      if (!row.active && row.invitationBucket === 'Jamais envoyée') score += 120;
      if (row.invitationAge !== null) score += Math.min(row.invitationAge, 365);
      if (row.loginAge !== null) score += Math.min(row.loginAge, 365);
      if (row.score !== null) score += Math.max(0, 100 - row.score);
      return score;
    }

    function getFollowUpReason(row, labels) {
      if (row.realProblem) return labels.followUpProblem;
      if (row.neverLogged) return labels.followUpNeverLogged;
      if (row.longInactive) return labels.followUpLongInactive;
      return labels.followUpOther;
    }


    function exportConsolidatedTable() {
      const rows = sortItems(currentSummary.consolidated, tableSortState.consolidated).map(i => ({
        institution: i.segment,
        total: i.totalUsers,
        activated: i.activeUsers,
        inactive: i.inactiveUsers,
        activation_rate: i.activationRate,
        invited_30d: i.invitedRecent,
        invited_31_90d: i.invitedAging,
        invited_over_90d: i.invitedOld,
        no_invitation: i.neverInvited,
        real_problems: i.realProblems,
        status: localizeBusinessText('status', i.status),
        priority: i.priority,
        action: localizeBusinessText('action', i.action)
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'consolidated');
      XLSX.writeFile(wb, 'consolidated_table_export.xlsx');
    }

    function createCharts(summary) {
      const palette = { navy: '#213c83', steel: '#1a3069', amber: '#d96736', red: '#ff7940', green: '#00b3ff' };
      Chart.defaults.color = '#2b2b2b';
      Chart.defaults.font.family = 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Arial, sans-serif';
      if (Chart.defaults.plugins && Chart.defaults.plugins.legend && Chart.defaults.plugins.legend.labels) Chart.defaults.plugins.legend.labels.boxWidth = 10;
      const t = summary.totals;
      const l = Object.fromEntries(Object.entries(chartLabels()).map(([key, value]) => [key, decodeUiValue(value)]));
      const selectedInstitution = filterState.institution !== 'all' ? filterState.institution : null;
      const selectedInstitutionLabel = decodeMojibakeText(selectedInstitution || '');
      const piePalette = [palette.navy, palette.amber, palette.green, palette.steel, '#4f6db6', '#f39b72', '#34c7ff', '#6f87c7', '#e7b08b', '#8b9fd1', '#8fdfff', '#f5c6ad'];

      const clusterLabels = summary.subNetworks.length
        ? summary.subNetworks.map(s => decodeMojibakeText(s.name))
        : [l.noData];
      const clusterData = summary.subNetworks.length
        ? summary.subNetworks.map(s => s.totalUsers)
        : [1];

      charts.cluster = new Chart(document.getElementById('clusterChart'), {
        type:'pie',
        data:{
          labels:clusterLabels,
          datasets:[{
            data:clusterData,
            backgroundColor:clusterLabels.map((_, idx) => piePalette[idx % piePalette.length]),
            borderWidth:0
          }]
        },
        options:{
          maintainAspectRatio:false,
          onClick:(e,els)=>{
            if (!els.length || !summary.subNetworks.length) return;
            const cluster = summary.subNetworks[els[0].index];
            if (!cluster) return;
            const rows = detailRowsForFilter(`cluster:${cluster.name}`);
            openRowsDetail(rows, decodeMojibakeText(cluster.name), tUI('rowsSegment', rows.length));
          },
          plugins:{
            title:{display:true,text:selectedInstitutionLabel ? `${tUI('clusterTitle')} — ${selectedInstitutionLabel}` : tUI('clusterTitle')},
            legend:{position:'bottom'}
          }
        }
      });
      charts.activation = new Chart(document.getElementById('activationChart'), {
        type: 'doughnut',
        data: { labels: l.activation, datasets: [{ data: [t.active, t.inactive], backgroundColor: [palette.navy, palette.amber], borderWidth: 0 }] },
        options: { maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; openDetailModal(els[0].index===0?'active':'inactive', l.activation[els[0].index]); }, plugins:{ title:{display:true,text:l.actTitle}, legend:{position:'bottom'} } }
      });

      charts.invitation = new Chart(document.getElementById('invitationChart'), {
        type: 'bar',
        data: { labels: l.invitation, datasets: [{ label: l.inactive, data: [t.invitedRecent,t.invitedAging,t.invitedOld,t.neverInvited], backgroundColor:[palette.navy, palette.steel, palette.amber, palette.red] }] },
        options: { maintainAspectRatio:false, plugins:{ title:{display:true,text:l.invTitle}, legend:{display:false} }, scales:{ y:{beginAtZero:true} } }
      });

      if (selectedInstitution) {
        const activeUsers = summary.rows
          .filter(r => r.active)
          .slice()
          .sort((a, b) => {
            const scoreDelta = (b.score ?? -1) - (a.score ?? -1);
            if (scoreDelta !== 0) return scoreDelta;
            const loginDelta = (a.loginAge ?? Number.MAX_SAFE_INTEGER) - (b.loginAge ?? Number.MAX_SAFE_INTEGER);
            if (loginDelta !== 0) return loginDelta;
            return getUserDisplayName(a).localeCompare(getUserDisplayName(b));
          })
          .slice(0, 10);

        const followUpUsers = summary.rows
          .filter(r => !r.technical && (r.realProblem || r.neverLogged || r.longInactive || (!r.active && r.invitationBucket !== '≤30 jours' && r.invitationBucket !== 'N/A')))
          .slice()
          .sort((a, b) => getFollowUpPriority(b) - getFollowUpPriority(a))
          .slice(0, 10);

        charts.topActiveInstitutes = new Chart(document.getElementById('topActiveInstitutesChart'), {
          type:'bar',
          data:{
            labels: activeUsers.length ? activeUsers.map(getUserShortLabel) : [l.noData],
            datasets:[{ label:l.activeUsersMetric, data: activeUsers.length ? activeUsers.map(r => r.score ?? 0) : [0], backgroundColor:palette.navy }]
          },
          options:{
            indexAxis:'y',
            maintainAspectRatio:false,
            onClick:(e,els)=>{ if(!els.length || !activeUsers.length) return; const row = activeUsers[els[0].index]; openRowsDetail([row], getUserDisplayName(row), tUI('rowsSegment', 1)); },
            plugins:{ title:{display:true,text:`${l.activeUsersTitle} ? ${selectedInstitutionLabel}`}, legend:{display:false} },
            scales:{ x:{ beginAtZero:true } }
          }
        });

        charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), {
          type:'bar',
          data:{
            labels: followUpUsers.length ? followUpUsers.map(getUserShortLabel) : [l.noData],
            datasets:[{ label:l.followUpMetric, data: followUpUsers.length ? followUpUsers.map(r => getFollowUpPriority(r)) : [0], backgroundColor:palette.amber }]
          },
          options:{
            indexAxis:'y',
            maintainAspectRatio:false,
            onClick:(e,els)=>{ if(!els.length || !followUpUsers.length) return; const row = followUpUsers[els[0].index]; openRowsDetail([row], `${getUserDisplayName(row)} — ${getFollowUpReason(row, l)}`, tUI('rowsSegment', 1)); },
            plugins:{ title:{display:true,text:`${l.followUpTitle} ? ${selectedInstitutionLabel}`}, legend:{display:false} },
            scales:{ x:{ beginAtZero:true } }
          }
        });

        const invitationStatusLabels = l.invitation;
        const invitationStatusRows = [
          summary.rows.filter(r => !r.active && r.invitationBucket === '≤30 jours'),
          summary.rows.filter(r => !r.active && r.invitationBucket === '31–90 jours'),
          summary.rows.filter(r => !r.active && r.invitationBucket === '>90 jours'),
          summary.rows.filter(r => !r.active && r.invitationBucket === 'Jamais envoyée')
        ];

        charts.domainType = new Chart(document.getElementById('domainTypeChart'), {
          type:'pie',
          data:{ labels:invitationStatusLabels, datasets:[{ data: invitationStatusRows.map(rows => rows.length), backgroundColor:[palette.navy, palette.steel, palette.amber, palette.red], borderWidth:0 }]},
          options:{ maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; const idx=els[0].index; const rows = invitationStatusRows[idx]; openRowsDetail(rows, `${l.invitationStatusTitle} ? ${invitationStatusLabels[idx]}`, tUI('rowsSegment', rows.length)); }, plugins:{ title:{display:true,text:`${l.invitationStatusTitle} ? ${selectedInstitutionLabel}`}, legend:{position:'bottom'} } }
        });
        return;
      }

      const instituteRateBase = summary.institutes.filter(i => i.totalUsers > 0 && i.activationRate !== null);
      const topActive = instituteRateBase.slice().sort((a,b)=>(b.activationRate||0)-(a.activationRate||0)).slice(0,10);
      const topLeast = instituteRateBase.slice().sort((a,b)=>(a.activationRate||0)-(b.activationRate||0)).slice(0,10);

      charts.topActiveInstitutes = new Chart(document.getElementById('topActiveInstitutesChart'), {
        type:'bar',
        data:{ labels: topActive.map(i => i.institution.length>30 ? i.institution.slice(0,30)+'…' : i.institution), datasets:[{ label:l.actRate, data: topActive.map(i => Number((i.activationRate||0).toFixed(1))), backgroundColor:palette.navy }]},
        options:{ indexAxis:'y', maintainAspectRatio:false, onClick:(e,els)=>{ if(els.length) openInstitutionDetail(topActive[els[0].index].institution); }, plugins:{ title:{display:true,text:l.topA}, legend:{display:false} }, scales:{ x:{ beginAtZero:true, max:100, ticks:{ callback:v=>v+' %' } } } }
      });

      charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), {
        type:'bar',
        data:{ labels: topLeast.map(i => i.institution.length>30 ? i.institution.slice(0,30)+'…' : i.institution), datasets:[{ label:l.actRate, data: topLeast.map(i => Number((i.activationRate||0).toFixed(1))), backgroundColor:palette.amber }]},
        options:{ indexAxis:'y', maintainAspectRatio:false, onClick:(e,els)=>{ if(els.length) openInstitutionDetail(topLeast[els[0].index].institution); }, plugins:{ title:{display:true,text:l.topL}, legend:{display:false} }, scales:{ x:{ beginAtZero:true, max:100, ticks:{ callback:v=>v+' %' } } } }
      });

      const domainTypes = ['Institutionnel', 'Personnel', 'Inconnu / autre'].map(type => summary.domains.filter(d => d.type === type).reduce((acc,cur) => acc + cur.totalUsers, 0));
      charts.domainType = new Chart(document.getElementById('domainTypeChart'), {
        type:'pie',
        data:{ labels:l.domain, datasets:[{ data: domainTypes, backgroundColor:[palette.navy, palette.amber, palette.steel], borderWidth:0 }]},
        options:{ maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; const idx=els[0].index; const source = ['Institutionnel','Personnel','Inconnu / autre'][idx]; const rows = currentSummary.rows.filter(r => r.domainType === source); openRowsDetail(rows, tUI('domainBreakdownTitle', l.domain[idx]), tUI('rowsDomain', rows.length)); }, plugins:{ title:{display:true,text:l.domTitle}, legend:{position:'bottom'} } }
      });
    }

    // ========================================================
    // Country / Sub-network / Data quality renderers + exports
    // ========================================================
    function renderCountryTable(countries) {
      if (!countries || !countries.length) {
        return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      }
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('countryColumn'))}</th>
          <th>${escapeHtml(tUI('countryCodeColumn'))}</th>
          <th>${escapeHtml(tUI('usersColumn'))}</th>
          <th>${escapeHtml(tUI('activatedColumn'))}</th>
          <th>${escapeHtml(tUI('inactiveColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
          <th>${escapeHtml(tUI('realProblemsColumn'))}</th>
          <th>${escapeHtml(tUI('unreachableColumn'))}</th>
        </tr></thead>
        <tbody>
          ${countries.map(c => `<tr>
            <td><strong>${escapeHtml(c.country)}</strong></td>
            <td>${escapeHtml(c.code || '—')}</td>
            <td>${formatInt(c.totalUsers)}</td>
            <td>${formatInt(c.activeUsers)}</td>
            <td>${formatInt(c.inactiveUsers)}</td>
            <td>${formatPct(c.activationRate)}</td>
            <td>${formatInt(c.realProblems)}</td>
            <td>${formatInt(c.unreachable)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
    }

    function renderSubnetTable(subs) {
      if (!subs || !subs.length) {
        return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      }
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('subnetColumn'))}</th>
          <th>${escapeHtml(tUI('usersColumn'))}</th>
          <th>${escapeHtml(tUI('activatedColumn'))}</th>
          <th>${escapeHtml(tUI('inactiveColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
          <th>${escapeHtml(tUI('clusterActiveIn90Column'))}</th>
          <th>${escapeHtml(tUI('scientificColumn'))}</th>
          <th>${escapeHtml(tUI('realProblemsColumn'))}</th>
        </tr></thead>
        <tbody>
          ${subs.map(s => `<tr>
            <td><strong class="stat-link" data-filter="cluster:${escapeHtml(s.name)}">${escapeHtml(s.name)}</strong></td>
            <td>${formatInt(s.totalUsers)}</td>
            <td>${formatInt(s.activeUsers)}</td>
            <td>${formatInt(s.inactiveUsers)}</td>
            <td>${formatPct(s.activationRate)}</td>
            <td>${formatInt(s.activeInLast90d || 0)}</td>
            <td>${formatInt(s.scientificUsers || 0)}</td>
            <td>${formatInt(s.realProblems)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
    }

    // ===== Step 5 — new render helpers =====
    function renderContinentTable(continents) {
      if (!continents || !continents.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('continentColumn'))}</th>
          <th>${escapeHtml(tUI('usersColumn'))}</th>
          <th>${escapeHtml(tUI('activatedColumn'))}</th>
          <th>${escapeHtml(tUI('inactiveColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
          <th>${escapeHtml(tUI('scientificColumn'))}</th>
        </tr></thead>
        <tbody>
          ${continents.map(c => `<tr>
            <td><strong class="stat-link" data-filter="continent:${escapeHtml(c.continent)}">${escapeHtml(c.continent)}</strong></td>
            <td>${formatInt(c.totalUsers)}</td>
            <td>${formatInt(c.activeUsers)}</td>
            <td>${formatInt(c.inactiveUsers)}</td>
            <td>${formatPct(c.activationRate)}</td>
            <td>${formatInt(c.scientificUsers || 0)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
    }

    function renderFieldTable(fields, longTail) {
      if (!fields || !fields.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      const rowsHtml = fields.map(f => `<tr>
        <td><strong class="stat-link" data-filter="field:${escapeHtml(f.field)}">${escapeHtml(f.field)}</strong></td>
        <td>${formatInt(f.totalUsers)}</td>
        <td>${formatInt(f.activeUsers)}</td>
        <td>${formatPct(f.activationRate)}</td>
        <td>${formatInt(f.scientificUsers || 0)}</td>
      </tr>`).join('');
      const longTailHtml = longTail ? `<tr>
        <td><strong>${escapeHtml(tUI('fieldLongTailLabel'))}</strong> <span class="small muted">(${escapeHtml(tUI('fieldLongTailHint', longTail.distinctValues))})</span></td>
        <td>${formatInt(longTail.totalUsers)}</td>
        <td>${formatInt(longTail.activeUsers)}</td>
        <td>${formatPct(longTail.activationRate)}</td>
        <td>${formatInt(longTail.scientificUsers || 0)}</td>
      </tr>` : '';
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('fieldColumn'))}</th>
          <th>${escapeHtml(tUI('usersColumn'))}</th>
          <th>${escapeHtml(tUI('activatedColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
          <th>${escapeHtml(tUI('scientificColumn'))}</th>
        </tr></thead>
        <tbody>${rowsHtml}${longTailHtml}</tbody>
      </table>`;
    }

    function renderLanguageTable(languages) {
      if (!languages || !languages.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('languageColumn'))}</th>
          <th>${escapeHtml(tUI('usersColumn'))}</th>
          <th>${escapeHtml(tUI('activatedColumn'))}</th>
          <th>${escapeHtml(tUI('inactiveColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
        </tr></thead>
        <tbody>
          ${languages.map(l => `<tr>
            <td><strong class="stat-link" data-filter="lang:${escapeHtml(l.language)}">${escapeHtml(l.language)}</strong></td>
            <td>${formatInt(l.totalUsers)}</td>
            <td>${formatInt(l.activeUsers)}</td>
            <td>${formatInt(l.inactiveUsers)}</td>
            <td>${formatPct(l.activationRate)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
    }

    function renderCohortTable(cohorts) {
      if (!cohorts || !cohorts.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
      return `<table>
        <thead><tr>
          <th>${escapeHtml(tUI('cohortMonthColumn'))}</th>
          <th>${escapeHtml(tUI('cohortCreatedColumn'))}</th>
          <th>${escapeHtml(tUI('cohortActivatedColumn'))}</th>
          <th>${escapeHtml(tUI('activationRateColumn'))}</th>
          <th>${escapeHtml(tUI('cohortRetention90Column'))}</th>
          <th>${escapeHtml(tUI('cohortRetentionRateColumn'))}</th>
        </tr></thead>
        <tbody>
          ${cohorts.map(c => `<tr>
            <td><strong class="stat-link" data-filter="cohort:${escapeHtml(c.cohortMonth)}">${escapeHtml(c.cohortMonth)}</strong></td>
            <td>${formatInt(c.created)}</td>
            <td>${formatInt(c.activated)}</td>
            <td>${formatPct(c.activationRate)}</td>
            <td>${formatInt(c.activeInLast90d)}</td>
            <td>${formatPct(c.retention90d)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`;
    }

    // ===== Global search index + query =====
    // Indexed item shape: { type, key, label, sub, haystack }
    // - type: one of 'user' | 'institute' | 'cluster' | 'country' | 'continent' | 'field' | 'language' | 'cohort'
    // - key:  the value passed to detailRowsForFilter for entity types ('country:France' → key='France')
    //         or the user `id` for 'user' results
    // - haystack: pre-normalized concatenation of all searchable text for this item
    function buildSearchIndex(summary) {
      if (!summary || !summary.rows) return [];
      const items = [];
      // Users — search across name + email + institute (so "pasteur paris hicham" works).
      summary.rows.forEach(r => {
        const label = [r.firstName, r.lastName].filter(Boolean).join(' ').trim() || r.email || '';
        if (!label) return;
        items.push({
          type: 'user',
          key: r.id || r.email || label,
          label,
          sub: [r.email, r.mappedInstitution, r.country].filter(Boolean).join(' · '),
          haystack: normalize([label, r.email, r.mappedInstitution, r.country, r.position, r.company].filter(Boolean).join(' '))
        });
      });
      const pushEntity = (type, name, sub) => {
        if (!name) return;
        items.push({ type, key: name, label: name, sub: sub || '', haystack: normalize(name + ' ' + (sub || '')) });
      };
      (summary.institutes || []).forEach(i => pushEntity('institute', i.institution, tUI('searchUsersSub', i.totalUsers)));
      (summary.subNetworks || []).forEach(s => pushEntity('cluster', s.name, tUI('searchUsersSub', s.totalUsers)));
      (summary.countries || []).forEach(c => pushEntity('country', c.country, tUI('searchUsersSub', c.totalUsers)));
      (summary.continents || []).forEach(c => pushEntity('continent', c.continent, tUI('searchUsersSub', c.totalUsers)));
      (summary.fields || []).forEach(f => pushEntity('field', f.field, tUI('searchUsersSub', f.totalUsers)));
      (summary.languages || []).forEach(l => pushEntity('language', l.language, tUI('searchUsersSub', l.totalUsers)));
      (summary.cohorts || []).forEach(c => pushEntity('cohort', c.cohortMonth, tUI('searchUsersSub', c.created)));
      return items;
    }
    // Filter + rank: exact > startsWith > substring (label) > substring (sub).
    // Returns up to 80 items overall (later capped to 10 per type by the renderer).
    function searchIndexQuery(index, query) {
      const q = normalize(query);
      if (!q || q.length < 2) return [];
      const scored = [];
      for (const item of index) {
        const label = normalize(item.label);
        let score = 0;
        if (label === q) score = 100;
        else if (label.startsWith(q)) score = 60;
        else if (label.includes(q)) score = 30;
        else if (item.haystack.includes(q)) score = 10;
        if (score > 0) scored.push({ item, score });
      }
      scored.sort((a, b) => b.score - a.score);
      return scored.slice(0, 80).map(s => s.item);
    }

    function renderSearchCard() {
      return `
        <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('searchTitle'))}</h2><span>${escapeHtml(tUI('searchSub'))}</span></div>
        <input id="globalSearchInput" type="text" placeholder="${escapeHtml(tUI('searchPlaceholder'))}" autocomplete="off" style="width:100%;font-size:15px;padding:10px 14px;border:1px solid var(--line);border-radius:8px;font-family:var(--font-sans);" />
        <div id="globalSearchResults" style="display:none;margin-top:10px;max-height:420px;overflow-y:auto;"></div>`;
    }
    // Render the results dropdown into #globalSearchResults. Called on every input event,
    // not via the full dashboard re-render so it stays fast and the input keeps focus.
    function renderSearchResults(query) {
      const host = document.getElementById('globalSearchResults');
      if (!host) return;
      const results = searchIndexQuery(currentSearchIndex, query);
      if (!results.length) {
        host.style.display = 'block';
        host.innerHTML = `<div class="empty small muted" style="padding:12px;">${escapeHtml(tUI('searchNoResults'))}</div>`;
        return;
      }
      const groups = {};
      results.forEach(r => { (groups[r.type] = groups[r.type] || []).push(r); });
      const order = ['user', 'institute', 'cluster', 'country', 'continent', 'field', 'language', 'cohort'];
      const html = order.filter(t => groups[t]).map(t => {
        const items = groups[t].slice(0, 10);
        const heading = `${tUI('searchType_' + t)} (${groups[t].length}${groups[t].length > 10 ? '+' : ''})`;
        const rowsHtml = items.map(it => `
          <div class="search-result" data-search-type="${escapeHtml(it.type)}" data-search-key="${escapeHtml(String(it.key))}" tabindex="0" role="button" style="padding:8px 12px;border-radius:6px;cursor:pointer;display:flex;flex-direction:column;gap:2px;">
            <strong>${escapeHtml(it.label)}</strong>
            ${it.sub ? `<span class="small muted">${escapeHtml(it.sub)}</span>` : ''}
          </div>`).join('');
        return `
          <div style="margin-top:8px;">
            <div class="small muted" style="text-transform:uppercase;letter-spacing:0.08em;padding:0 12px 4px;">${escapeHtml(heading)}</div>
            ${rowsHtml}
          </div>`;
      }).join('');
      host.innerHTML = html;
      host.style.display = 'block';
      // Hover affordance + click handlers (re-wired every render)
      host.querySelectorAll('.search-result').forEach(el => {
        el.addEventListener('mouseenter', () => { el.style.background = 'var(--bg-subtle)'; });
        el.addEventListener('mouseleave', () => { el.style.background = ''; });
        const fire = () => handleSearchResultClick(el);
        el.addEventListener('click', fire);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fire(); } });
      });
    }
    function handleSearchResultClick(el) {
      const type = el.dataset.searchType;
      const key = el.dataset.searchKey;
      if (!type || !key) return;
      if (type === 'user') {
        const row = (currentSummary && currentSummary.rows || []).find(r => String(r.id) === key || r.email === key);
        if (row) {
          const label = [row.firstName, row.lastName].filter(Boolean).join(' ').trim() || row.email;
          openRowsDetail([row], label, tUI('searchOnePerson'));
        }
        return;
      }
      // Map result type → detailRowsForFilter parameterized key
      const filterKey = type === 'language' ? `lang:${key}` : `${type}:${key}`;
      openDetailModal(filterKey, key);
    }

    function exportCountrySummary() {
      const rows = (currentSummary?.countries || []).map(c => ({
        country: c.country,
        country_code: c.code || '',
        users: c.totalUsers,
        activated: c.activeUsers,
        inactive: c.inactiveUsers,
        activation_rate: c.activationRate !== null ? Number(c.activationRate.toFixed(1)) : '',
        real_problems: c.realProblems,
        unreachable: c.unreachable
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'country_summary');
      XLSX.writeFile(wb, 'country_summary_export.xlsx');
    }

    function exportSubnetSummary() {
      const rows = (currentSummary?.subNetworks || []).map(s => ({
        cluster: s.name,
        users: s.totalUsers,
        activated: s.activeUsers,
        inactive: s.inactiveUsers,
        activation_rate: s.activationRate !== null ? Number(s.activationRate.toFixed(1)) : '',
        active_last_90d: s.activeInLast90d || 0,
        scientific: s.scientificUsers || 0,
        real_problems: s.realProblems
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'clusters');
      XLSX.writeFile(wb, 'cluster_summary_export.xlsx');
    }

    // ===== Step 5 — new exports =====
    function exportContinentSummary() {
      const rows = (currentSummary?.continents || []).map(c => ({
        continent: c.continent,
        users: c.totalUsers,
        activated: c.activeUsers,
        inactive: c.inactiveUsers,
        activation_rate: c.activationRate !== null ? Number(c.activationRate.toFixed(1)) : '',
        scientific: c.scientificUsers || 0
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'continents');
      XLSX.writeFile(wb, 'continent_summary_export.xlsx');
    }

    function exportFieldSummary() {
      const top = (currentSummary?.fields || []).map(f => ({
        field: f.field, users: f.totalUsers, activated: f.activeUsers,
        activation_rate: f.activationRate !== null ? Number(f.activationRate.toFixed(1)) : '',
        scientific: f.scientificUsers || 0
      }));
      const tail = currentSummary?.fieldsLongTail;
      const rows = tail ? [...top, {
        field: tail.field, users: tail.totalUsers, activated: tail.activeUsers,
        activation_rate: tail.activationRate !== null ? Number(tail.activationRate.toFixed(1)) : '',
        scientific: tail.scientificUsers || 0,
        distinct_values_in_tail: tail.distinctValues
      }] : top;
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'fields_of_expertise');
      XLSX.writeFile(wb, 'field_summary_export.xlsx');
    }

    function exportLanguageSummary() {
      const rows = (currentSummary?.languages || []).map(l => ({
        language: l.language,
        users: l.totalUsers,
        activated: l.activeUsers,
        inactive: l.inactiveUsers,
        activation_rate: l.activationRate !== null ? Number(l.activationRate.toFixed(1)) : ''
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'languages');
      XLSX.writeFile(wb, 'language_summary_export.xlsx');
    }

    function exportCohortSummary() {
      const rows = (currentSummary?.cohorts || []).map(c => ({
        cohort_month: c.cohortMonth,
        created: c.created,
        activated: c.activated,
        activation_rate: c.activationRate !== null ? Number(c.activationRate.toFixed(1)) : '',
        active_last_90d: c.activeInLast90d,
        retention_90d: c.retention90d !== null ? Number(c.retention90d.toFixed(1)) : ''
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'cohorts');
      XLSX.writeFile(wb, 'cohort_retention_export.xlsx');
    }

    // ===== Étape D — action-oriented exports =====
    // Reason + suggested action per follow-up row. Used by the outreach-playbook export so the
    // exported file is directly actionable (no extra logic for whoever runs the outreach).
    function getOutreachReasonAndAction(r) {
      // Ambassador candidates first (positive opportunity, not a problem)
      if (r.active && r.scientificProfile === 'Scientific'
          && (r.subNetworks || []).length >= 2
          && (r.engagementTier === 'Power' || r.engagementTier === 'Active')) {
        return { reason: tUI('reasonAmbassador'), action: tUI('actionAmbassador') };
      }
      if (r.unreachable)      return { reason: tUI('reasonUnreachable'),   action: tUI('actionDirectContact') };
      if (r.realProblem)      return { reason: tUI('reasonRealProblem'),   action: tUI('actionRelance90') };
      if (r.neverLogged)      return { reason: tUI('reasonNeverLogged'),   action: tUI('actionOnboarding') };
      if (r.longInactive)     return { reason: tUI('reasonLongInactive'),  action: tUI('actionReengage') };
      if (r.active && r.visits >= 10 && r.loginAge !== null
          && r.loginAge >= 90 && r.loginAge <= 180) {
        return { reason: tUI('reasonChurnSlipping'), action: tUI('actionReengage') };
      }
      if (!r.active && r.invitationBucket === '>90 jours') return { reason: tUI('reasonInvitedOld'),    action: tUI('actionRelance90') };
      if (!r.active && r.invitationBucket === '31–90 jours') return { reason: tUI('reasonInvitedAging'), action: tUI('actionFollowUpAging') };
      return { reason: '', action: tUI('actionFollowUpNormal') };
    }

    // Outreach playbook: ranked follow-up list + ambassador candidates, with reason + suggested action.
    // Decision-grade export — the user can hand this directly to whoever runs outreach.
    function exportOutreachPlaybook() {
      const rows = currentSummary?.rows || [];
      const ambassadors = rows.filter(r => r.active && r.scientificProfile === 'Scientific'
        && (r.subNetworks || []).length >= 2
        && (r.engagementTier === 'Power' || r.engagementTier === 'Active'));
      const follow = getFollowUpRows(rows).slice().sort((a, b) => getFollowUpPriority(b) - getFollowUpPriority(a));
      // Concat with ambassadors first (positive ops); follow-up rows come ranked.
      const queue = [...ambassadors, ...follow.filter(f => !ambassadors.includes(f))];
      const payload = queue.map((r, idx) => {
        const ra = getOutreachReasonAndAction(r);
        return {
          rank: idx + 1,
          last_name: r.lastName || '',
          first_name: r.firstName || '',
          email: r.email || '',
          institute: r.mappedInstitution || '',
          country: r.country || '',
          continent: r.continent || '',
          cluster: (r.subNetworks && r.subNetworks[0]) || '',
          profile_type: r.profileType || '',
          scientific_profile: r.scientificProfile || '',
          scientific_reason: r.scientificReason || '',
          engagement_tier: r.engagementTier || '',
          last_login: r.lastLoginText || '',
          priority_level: getUserPriorityLevel(r),
          priority_score: getFollowUpPriority(r),
          reason: ra.reason,
          suggested_action: ra.action
        };
      });
      const ws = XLSX.utils.json_to_sheet(payload);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'outreach_playbook');
      XLSX.writeFile(wb, 'outreach_playbook.xlsx');
    }

    // Data-quality report aimed at PNLink admins.
    // Multi-sheet XLSX: one summary + one sheet per fixable issue, with identifying columns
    // so the admin can locate and fix the records directly in PNLink.
    function exportDataQualityIssues() {
      const rows = currentSummary?.rows || [];
      const cov = currentSummary?.dataCoverage;
      const wb = XLSX.utils.book_new();

      // Summary sheet — one row per dimension with fill rates.
      const summarySheet = [
        { dimension: 'cluster_defined (≠ Undefined)', filled: cov?.clusterDefined.filled ?? 0, total: cov?.clusterDefined.total ?? 0, fill_pct: cov?.clusterDefined.fillPct.toFixed(1) ?? 0 },
        { dimension: 'country',                       filled: cov?.country.filled ?? 0,       total: cov?.country.total ?? 0,        fill_pct: cov?.country.fillPct.toFixed(1) ?? 0 },
        { dimension: 'affiliation',                   filled: cov?.affiliation.filled ?? 0,   total: cov?.affiliation.total ?? 0,    fill_pct: cov?.affiliation.fillPct.toFixed(1) ?? 0 },
        { dimension: 'position',                      filled: cov?.position.filled ?? 0,      total: cov?.position.total ?? 0,       fill_pct: cov?.position.fillPct.toFixed(1) ?? 0 },
        { dimension: 'language',                      filled: cov?.language.filled ?? 0,      total: cov?.language.total ?? 0,       fill_pct: cov?.language.fillPct.toFixed(1) ?? 0 },
        { dimension: 'industries',                    filled: cov?.industries.filled ?? 0,    total: cov?.industries.total ?? 0,     fill_pct: cov?.industries.fillPct.toFixed(1) ?? 0 },
        { dimension: 'institute_mapped',              filled: cov?.institute.filled ?? 0,     total: cov?.institute.total ?? 0,      fill_pct: cov?.institute.fillPct.toFixed(1) ?? 0 }
      ];
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summarySheet), 'summary');

      // Per-issue sheets — rows the admin needs to fix in PNLink.
      const id = r => ({ id: r.id || '', last_name: r.lastName || '', first_name: r.firstName || '', email: r.email || '', mapped_institute: r.mappedInstitution || '' });
      const sheets = [
        { name: 'undefined_cluster',     filter: r => (r.subNetworks || []).length && r.subNetworks.every(s => s && s.toLowerCase() === 'undefined'), extra: r => ({ sub_networks_raw: (r.subNetworks || []).join(', ') }) },
        { name: 'missing_country',       filter: r => !r.country,            extra: r => ({ timezone_hint: r.timezone || '' }) },
        { name: 'missing_affiliation',   filter: r => !r.hasAffiliation,     extra: r => ({ company: r.company || '', email_domain: r.domain || '' }) },
        { name: 'missing_position',      filter: r => !r.position,           extra: r => ({}) },
        { name: 'noisy_affiliation',     filter: r => r.noisyAffiliation,    extra: r => ({ affiliation_raw: r.affiliation || '' }) },
        { name: 'unmapped_institute',    filter: r => r.mappedInstitution === 'Non rattaché', extra: r => ({ affiliation_raw: r.affiliation || '', company: r.company || '' }) },
        { name: 'duplicate_email',       filter: r => r.duplicateEmail,      extra: r => ({}) },
        { name: 'invalid_email',         filter: r => r.email && !r.emailValid, extra: r => ({}) },
        { name: 'missing_email',         filter: r => !r.email,              extra: r => ({}) }
      ];
      sheets.forEach(s => {
        const data = rows.filter(s.filter).map(r => ({ ...id(r), ...s.extra(r) }));
        if (data.length) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), s.name);
      });

      XLSX.writeFile(wb, 'data_quality_report.xlsx');
    }

    function exportDecisionReport() {
      const t = currentSummary?.totals || {};
      const insights = (currentSummary?.decisionInsights || []).map(it => ({
        level: it.level, title: it.title, recommendation: it.text
      }));
      const summaryRow = [{
        scope_total_users: t.total || 0,
        scope_active_users: t.active || 0,
        activation_rate: t.activationRate !== undefined ? Number((t.activationRate || 0).toFixed(1)) : '',
        real_problems: t.realProblems || 0,
        invited_over_90d_inactive: t.invitedOld || 0,
        unreachable: t.unreachable || 0,
        dormant_activated: t.dormantActivated || 0,
        stale_presence: t.stalePresence || 0,
        notifications_off: t.notifOff || 0,
        missing_country_activated: t.missingCountryActivated || 0,
        duplicate_emails: t.duplicateEmails || 0,
        affiliation_distinct_values: t.distinctAffiliationValues || 0
      }];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRow), 'summary');
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(insights), 'insights');
      XLSX.writeFile(wb, 'decision_report.xlsx');
    }
