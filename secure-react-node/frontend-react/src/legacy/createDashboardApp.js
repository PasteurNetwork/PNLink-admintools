/**
 * Developed by Haja Faniry RAZAFIMAHENINA as an independent consultant
 * Contact: hello@hajafaniry.com
 * Website: hajafaniry.com
 *
 * Unauthorized copying, modification, distribution, or reuse of this code,
 * in whole or in part, is strictly prohibited without prior written permission.
 */
import Chart from 'chart.js/auto';

// Static staff reference data.
const STAFF_REFERENCE = [
  { name: 'Centre Pasteur du Cameroun', global: 269, scientific: 170, support: 99 },
  { name: 'Institut Pasteur de Bangui', global: 110, scientific: null, support: 110 },
  { name: 'Centre de Recherche Medicale et Sanitaire (CERMES Niger)', global: 88, scientific: 42, support: 46 },
  { name: "Institut Pasteur de Cote d'Ivoire", global: 146, scientific: 90, support: 56 },
  { name: 'Institut Pasteur de Dakar', global: 650, scientific: null, support: null },
  { name: 'Institut Pasteur de Guinee', global: 30, scientific: 19, support: 11 },
  { name: 'Institut Pasteur de Madagascar', global: 597, scientific: 103, support: 494 },
  { name: 'INRS - Centre Armand-Frappier Sante Biotechnologie', global: 343, scientific: 318, support: 25 },
  { name: 'Institut Pasteur de la Guadeloupe', global: 63, scientific: 43, support: 20 },
  { name: 'Institut Pasteur de la Guyane', global: 80, scientific: 70, support: 10 },
  { name: 'Institut Pasteur de Montevideo', global: 320, scientific: 260, support: 60 },
  { name: 'Oswaldo Cruz Foundation (FIOCRUZ)', global: 11934, scientific: 3500, support: 8334 },
  { name: 'Institut Pasteur de Sao Paulo', global: null, scientific: null, support: null },
  { name: 'University of Hong Kong - Pasteur Research Pole (HKU-PRP)', global: 55, scientific: 48, support: 7 },
  { name: 'Institut Pasteur de Nouvelle-Caledonie', global: 37, scientific: 27, support: 5 },
  { name: 'Institut Pasteur du Cambodge', global: null, scientific: null, support: null },
  { name: 'Institut Pasteur du Laos', global: 68, scientific: 37, support: 31 },
  { name: 'Institut Pasteur in Ho Chi Minh City', global: 250, scientific: null, support: 250 },
  { name: 'Institut Pasteur in Iran', global: 1300, scientific: 500, support: 800 },
  { name: 'Institut Pasteur in Nha Trang', global: 151, scientific: 113, support: 38 },
  { name: 'Institut Pasteur Korea', global: 97, scientific: 71, support: 26 },
  { name: 'National Institute of Hygiene and Epidemiology (NIHE)', global: 303, scientific: 204, support: 99 },
  { name: 'Institut Pasteur (Paris)', global: 2796, scientific: 2044, support: 752 },
  { name: 'Hellenic Pasteur Institute', global: 73, scientific: 39, support: 34 },
  { name: 'Institut Pasteur de Lille', global: 800, scientific: null, support: 50 },
  { name: 'Istituto Pasteur Italia - Cenci Bolognetti Foundation', global: 146, scientific: 140, support: 6 },
  { name: 'Institut Pasteur in Saint Petersburg', global: 339, scientific: 144, support: 195 },
  { name: 'Sciensano', global: 861, scientific: 583, support: 278 },
  { name: 'Stephan Angeloff Institute of Microbiology', global: 248, scientific: 248, support: null },
  { name: "Institut Pasteur d'Algerie", global: 1032, scientific: 530, support: 502 },
  { name: 'Institut Pasteur du Maroc', global: 201, scientific: 100, support: 40 },
  { name: 'Institut Pasteur de Tunis', global: 449, scientific: 308, support: 40 },
  { name: 'Pasteur Network', global: null, scientific: null, support: null }
];

const STATIC_TEXT = {
  fr: {
    title: "Tableau de suivi de l'engagement des utilisateurs",
    heroTitle: "Tableau de suivi de l'engagement des utilisateurs",
    heroDescription: "Importe un export Excel des utilisateurs PNLink pour afficher automatiquement les KPI, les alertes, les analyses par institut, les analyses par domaine email et les recommandations d'action.",
    heroInstruction: 'Depuis PNLink, exportez le fichier le plus récent via <a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">"Export history &gt; Export all users"</a>, en cochant tous les champs.',
    uploadLabel: 'Importer un export Excel',
    uploadHint: 'Le teableau de bord lit la première feuille du fichier et applique automatiquement les règles de calcul.',
    initialEmpty: 'Charge un fichier Excel pour afficher le dashboard interactif.',
    close: 'Fermer',
    clear: 'Vider',
    chooseFile: 'Choisir un fichier',
    noFile: 'Aucun fichier sélectionné'
  },
  en: {
    title: 'User Engagement Dashboard',
    heroTitle: 'User Engagement Dashboard',
    heroDescription: 'Import a PNLink users Excel export to automatically display KPIs, alerts, institute analysis, email domain analysis and action recommendations.',
    heroInstruction: 'From PNLink, export the most recent file via <a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">"Export history &gt; Export all users"</a> making sure all fields are selected.',
    uploadLabel: 'Import an Excel export',
    uploadHint: 'The dashboard reads the first sheet of the file and automatically applies the calculation rules.',
    initialEmpty: 'Load an Excel file to display the interactive dashboard.',
    close: 'Close',
    clear: 'Clear',
    chooseFile: 'Choose file',
    noFile: 'No file selected'
  }
};

const UI_TEXT = {
  fr: {
    detail: 'Détail',
    emptySegment: 'Aucune ligne à afficher pour ce segment.',
    noUsableRows: 'Le fichier ne contient aucune ligne exploitable.',
    usersForInstituteTitle: (name) => `Utilisateurs - ${name}`,
    rowsForInstitute: (count) => `${formatInt(count)} ligne(s) pour cet institut.`,
    rowsFilter: (count) => `${formatInt(count)} ligne(s) - clique sur un KPI ou un graphique pour voir les utilisateurs derrière le chiffre.`,
    rowsSegment: (count) => `${formatInt(count)} ligne(s) - vue détaillée de ce segment.`,
    rowsDomain: (count) => `${formatInt(count)} ligne(s) pour ce type de domaine email.`,
    rowsGeneric: (count) => `${formatInt(count)} ligne(s).`,
    domainBreakdownTitle: (type) => `Répartition domaine - ${type}`,
    exportCsv: 'Exporter CSV',
    exportExcel: 'Exporter Excel',
    searchName: 'Recherche par nom',
    searchEmail: 'Recherche par email',
    keyMessagesTitle: 'Message clé',
    keyActivationLow: (rate) => `Le taux d'activation est de ${formatPct(rate)} et reste à renforcer.`,
    keyActivationGood: (rate) => `Le taux d'activation atteint ${formatPct(rate)}.`,
    keyInactiveRecent: (pct) => `${formatPct(pct)} des comptes inactifs sont encore récents.`,
    keyRealProblems: (count) => `${formatInt(count)} vrais problèmes demandent une relance immédiate.`,
    lastUpdateTitle: 'Dernière mise à jour',
    importedFile: 'Fichier importé',
    importDate: "Date et heure d'import",
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
    focusCoverage: 'Coverage rate',
    focusProblems: 'Real problems',
    focusActivationSub: 'Activés / total filtré',
    focusCoverageSub: 'Moyenne des couvertures institut filtrées',
    focusProblemsSub: 'Comptes à traiter maintenant',
    priorityGood: 'Bon',
    priorityWatch: 'À surveiller',
    priorityBad: 'Priorité',
    instituteViewTitle: 'Vue institut active',
    instituteViewSubtitle: 'Lecture simplifiée du segment actuellement filtré.',
    filteredUsers: 'Utilisateurs filtrés',
    selectedInstitute: 'Institut sélectionné',
    estimatedCoverage: 'Couverture estimée',
    activeFilters: 'Filtres actifs',
    noActiveFilters: 'Aucun filtre actif',
    exportSegmentTitle: 'Export du segment courant',
    exportVisibleUsers: 'Export users visible',
    exportInstituteView: 'Export institute view',
    exportFollowUpList: 'Export follow-up list',
    priorityScore: 'Priority',
    priorityHigh: 'High',
    priorityMedium: 'Medium',
    priorityLow: 'Low',
    filterBadgeInstitute: 'Institute',
    filterBadgeCountry: 'Country',
    filterBadgeDomain: 'Domain type',
    filterBadgeStatus: 'Status',
    clickToViewPeople: 'Cliquer pour voir les personnes',
    noInstituteViewAvailable: "Sélectionne un institut pour activer cette vue.",
    rulesNote: "Règles : activé = date d'activation renseignée ; inactif = pas de date d'activation ; vrai problème = inactif avec invitation >90 jours, hors compte technique. Le mapping institut utilise d'abord l'affiliation, puis l'organisation déclarée, puis le domaine email. Les valeurs manquantes ne sont jamais inventées."
  },
  en: {
    detail: 'Detail',
    emptySegment: 'No rows to display for this segment.',
    noUsableRows: 'The file does not contain any usable rows.',
    usersForInstituteTitle: (name) => `Users - ${name}`,
    rowsForInstitute: (count) => `${formatInt(count)} row(s) for this institute.`,
    rowsFilter: (count) => `${formatInt(count)} row(s) - click a KPI or a chart to see the users behind the figure.`,
    rowsSegment: (count) => `${formatInt(count)} row(s) - detailed view for this segment.`,
    rowsDomain: (count) => `${formatInt(count)} row(s) for this email domain type.`,
    rowsGeneric: (count) => `${formatInt(count)} row(s).`,
    domainBreakdownTitle: (type) => `Domain breakdown - ${type}`,
    exportCsv: 'Export CSV',
    exportExcel: 'Export Excel',
    searchName: 'Search by name',
    searchEmail: 'Search by email',
    keyMessagesTitle: 'Key message',
    keyActivationLow: (rate) => `Activation rate is ${formatPct(rate)} and remains low.`,
    keyActivationGood: (rate) => `Activation rate reaches ${formatPct(rate)}.`,
    keyInactiveRecent: (pct) => `${formatPct(pct)} of inactive accounts are still recent.`,
    keyRealProblems: (count) => `${formatInt(count)} real problems need follow-up now.`,
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
    focusCoverage: 'Coverage rate',
    focusProblems: 'Real problems',
    focusActivationSub: 'Active / filtered total',
    focusCoverageSub: 'Average filtered institute coverage',
    focusProblemsSub: 'Accounts to handle now',
    priorityGood: 'Good',
    priorityWatch: 'Watch',
    priorityBad: 'Priority',
    instituteViewTitle: 'Active institute view',
    instituteViewSubtitle: 'Simplified reading of the currently filtered segment.',
    filteredUsers: 'Filtered users',
    selectedInstitute: 'Selected institute',
    estimatedCoverage: 'Estimated coverage',
    activeFilters: 'Active filters',
    noActiveFilters: 'No active filter',
    exportSegmentTitle: 'Export current segment',
    exportVisibleUsers: 'Export users visible',
    exportInstituteView: 'Export institute view',
    exportFollowUpList: 'Export follow-up list',
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
    rulesNote: 'Rules: active = activation date filled in; inactive = no activation date; real problem = inactive with invitation >90 days, excluding technical accounts. Institute mapping uses affiliation first, then declared organization, then email domain. Missing values are never invented.'
  }
};

function formatInt(value) {
  return new Intl.NumberFormat('fr-FR').format(value || 0);
}

function formatPct(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
  return `${Number(value).toFixed(1)} %`;
}

// Main legacy dashboard controller mounted by React.
export function createDashboardApp() {
  const dashboardEl = document.getElementById('dashboard');
  const fileInput = document.getElementById('excelFile');
  const selectFileBtn = document.getElementById('selectFileBtn');
  const clearFileBtn = document.getElementById('clearFileBtn');
  const fileNameLabel = document.getElementById('fileNameLabel');
  const detailModalEl = document.getElementById('detailModal');
  const detailModalTitleEl = document.getElementById('detailModalTitle');
  const detailModalMetaEl = document.getElementById('detailModalMeta');
  const detailModalBodyEl = document.getElementById('detailModalBody');
  const detailModalCloseEl = document.getElementById('detailModalClose');

  const charts = {};
  let currentLang = 'en';
  let baseRows = [];
  let currentSummary = null;
  let currentFileMeta = null;
  let detectedFields = {};
  let currentDetailRows = [];
  let currentDetailTitle = '';
  let filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
  let tableSortState = {
    institutes: { key: 'totalUsers', dir: 'desc' },
    domains: { key: 'totalUsers', dir: 'desc' },
    consolidated: { key: 'realProblems', dir: 'desc' }
  };

  function tUI(key, ...args) {
    const pack = UI_TEXT[currentLang] || UI_TEXT.en;
    const value = pack[key];
    return typeof value === 'function' ? value(...args) : value;
  }

  // Shared formatting and escaping helpers.
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

  function escapeHtml(text) {
    return String(text ?? '').replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function formatDateTime(value) {
    if (!value) return tUI('notAvailable');
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return tUI('notAvailable');
    return date.toLocaleString(currentLang === 'fr' ? 'fr-FR' : 'en-GB');
  }

  function destroyCharts() {
    Object.values(charts).forEach((chart) => chart?.destroy?.());
    Object.keys(charts).forEach((key) => delete charts[key]);
  }

  function updateStaticTexts() {
    const langPack = STATIC_TEXT[currentLang];
    document.documentElement.lang = currentLang;
    document.title = langPack.title;
    const ids = {
      heroTitle: langPack.heroTitle,
      heroDescription: langPack.heroDescription,
      uploadLabel: langPack.uploadLabel,
      uploadHint: langPack.uploadHint,
      detailModalClose: langPack.close,
      clearFileBtn: langPack.clear,
      selectFileBtn: langPack.chooseFile,
      fileNameLabel: fileInput.files && fileInput.files[0] ? fileInput.files[0].name : langPack.noFile
    };

    Object.entries(ids).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });

    const heroInstructionEl = document.getElementById('heroInstruction');
    if (heroInstructionEl) heroInstructionEl.innerHTML = langPack.heroInstruction;

    document.querySelectorAll('.lang-btn[data-lang]').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === currentLang);
    });
  }

  function renderEmptyState() {
    dashboardEl.innerHTML = `<div class="empty" id="initialEmpty">${escapeHtml(STATIC_TEXT[currentLang].initialEmpty)}</div>`;
  }

  function priorityClass(label) {
    const text = normalize(label);
    if (text.includes('bon') || text.includes('good')) return 'priority-good';
    if (text.includes('priorite') || text.includes('priority')) return 'priority-bad';
    return 'priority-watch';
  }

  function renderPriorityBadge(label) {
    return `<span class="priority-pill ${priorityClass(label)}">${escapeHtml(label)}</span>`;
  }

  // File loading and filter state helpers.
  function clearLoadedFile() {
    fileInput.value = '';
    fileNameLabel.textContent = STATIC_TEXT[currentLang].noFile;
    baseRows = [];
    currentSummary = null;
    currentFileMeta = null;
    detectedFields = {};
    filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
    destroyCharts();
    closeDetailModal();
    renderEmptyState();
  }

  async function handleFileSelect(event) {
    const file = event.target.files?.[0];
    fileNameLabel.textContent = file ? file.name : STATIC_TEXT[currentLang].noFile;
    if (!file) return;

    dashboardEl.innerHTML = '<div class="empty">Loading dashboard...</div>';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('lastModified', String(file.lastModified || ''));

    const response = await fetch('/api/dashboard/process', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      dashboardEl.innerHTML = '<div class="empty">The backend could not process this file.</div>';
      return;
    }

    const payload = await response.json();
    baseRows = payload.rows || [];
    detectedFields = payload.fields || {};
    currentFileMeta = payload.fileMeta || null;
    filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };

    if (!baseRows.length) {
      dashboardEl.innerHTML = `<div class="empty">${escapeHtml(tUI('noUsableRows'))}</div>`;
      return;
    }

    applyFiltersAndRender();
  }

  function getFilteredRows() {
    return baseRows.filter((row) => {
      if (filterState.institution !== 'all' && row.mappedInstitution !== filterState.institution) return false;
      if (filterState.country !== 'all' && (row.country || '') !== filterState.country) return false;
      if (filterState.domainType !== 'all' && row.domainType !== filterState.domainType) return false;
      if (filterState.status === 'active' && !row.active) return false;
      if (filterState.status === 'inactive' && row.active) return false;
      return true;
    });
  }

  function getUserPriorityLevel(row) {
    let score = 0;
    if (!row.active && row.invitationBucket === '>90 jours') score += 4;
    if (row.neverLogged) score += 3;
    if (row.longInactive) score += 2;
    if (!row.hasAffiliation) score += 1;
    if (score >= 4) return tUI('priorityHigh');
    if (score >= 2) return tUI('priorityMedium');
    return tUI('priorityLow');
  }

  function getFollowUpRows(rows) {
    return (rows || []).filter((row) => !row.technical && (row.realProblem || row.neverLogged || row.longInactive || (!row.active && row.invitationBucket !== '≤30 jours' && row.invitationBucket !== 'N/A')));
  }

  function priorityLabel(item) {
    if (item.realProblems > 0 || (item.activationRate || 0) < 35) return tUI('priorityBad');
    if ((item.activationRate || 0) < 55 || (item.organizationalCoverage || 0) < 20) return tUI('priorityWatch');
    return tUI('priorityGood');
  }

  function getInstituteDecisionScore(item) {
    let score = 0;
    score += Math.min(item.totalUsers || 0, 150);
    score += Math.min((item.realProblems || 0) * 12, 180);
    score += Math.min(item.inactiveUsers || 0, 120);
    score += Math.max(0, 100 - (item.activationRate || 0)) * 1.4;
    if (item.coverageRate !== null && item.coverageRate !== undefined) {
      score += Math.max(0, 100 - item.coverageRate) * 0.9;
    }
    score += Math.max(0, 100 - (item.affiliationRate || 0)) * 0.5;
    return Math.round(score);
  }

  // Core summary computation.
  function buildSummary(rows) {
    const total = rows.length;
    const active = rows.filter((row) => row.active).length;
    const inactive = total - active;
    const invitedRecent = rows.filter((row) => !row.active && row.invitationBucket === '≤30 jours').length;
    const invitedAging = rows.filter((row) => !row.active && row.invitationBucket === '31–90 jours').length;
    const invitedOld = rows.filter((row) => !row.active && row.invitationBucket === '>90 jours').length;
    const neverInvited = rows.filter((row) => !row.active && row.invitationBucket === 'Jamais envoyée').length;
    const technical = rows.filter((row) => row.technical).length;
    const realProblems = rows.filter((row) => row.realProblem).length;
    const domainsDetected = new Set(rows.map((row) => row.domain).filter(Boolean)).size;
    const institutesDetected = new Set(rows.map((row) => row.mappedInstitution).filter((value) => value && value !== 'Non rattaché')).size;
    const activationRate = total ? (active / total) * 100 : 0;
    const affiliationMissing = rows.filter((row) => !row.hasAffiliation).length;
    const countriesDetected = new Set(rows.map((row) => row.country).filter(Boolean)).size;
    const neverLogged = rows.filter((row) => row.neverLogged).length;
    const longInactive = rows.filter((row) => row.longInactive).length;

    const instituteMap = new Map();
    STAFF_REFERENCE.forEach((ref) => {
      instituteMap.set(ref.name, {
        institution: ref.name,
        globalStaff: ref.global,
        scientificStaff: ref.scientific,
        supportStaff: ref.support,
        totalUsers: 0,
        activeUsers: 0,
        inactiveUsers: 0,
        invitedRecent: 0,
        invitedAging: 0,
        invitedOld: 0,
        neverInvited: 0,
        realProblems: 0,
        affiliationCount: 0
      });
    });

    rows.forEach((row) => {
      if (!instituteMap.has(row.mappedInstitution)) return;
      const item = instituteMap.get(row.mappedInstitution);
      item.totalUsers += 1;
      item.activeUsers += row.active ? 1 : 0;
      item.inactiveUsers += row.active ? 0 : 1;
      item.invitedRecent += row.invitationBucket === '≤30 jours' ? 1 : 0;
      item.invitedAging += row.invitationBucket === '31–90 jours' ? 1 : 0;
      item.invitedOld += row.invitationBucket === '>90 jours' ? 1 : 0;
      item.neverInvited += row.invitationBucket === 'Jamais envoyée' ? 1 : 0;
      item.realProblems += row.realProblem ? 1 : 0;
      item.affiliationCount += row.hasAffiliation ? 1 : 0;
    });

    const institutes = Array.from(instituteMap.values())
      .filter((item) => item.totalUsers > 0)
      .map((item) => {
        const coverageRate = item.globalStaff ? (item.totalUsers / item.globalStaff) * 100 : null;
        const itemActivationRate = item.totalUsers ? (item.activeUsers / item.totalUsers) * 100 : null;
        const affiliationRate = item.totalUsers ? (item.affiliationCount / item.totalUsers) * 100 : null;

        let status = 'Incomplete data';
        if (coverageRate !== null) {
          if (coverageRate >= 60 && itemActivationRate >= 60) status = 'Good';
          else if (coverageRate >= 20 || itemActivationRate >= 40) status = 'Watch';
          else status = 'Low';
        }
        if (coverageRate !== null && coverageRate > 100) status = 'To review';

        let action = 'Normal follow-up';
        if (item.realProblems > 0) action = 'Targeted follow-up >90 days';
        else if (item.inactiveUsers >= 20 && (itemActivationRate || 0) < 40) action = 'Priority activation campaign';
        else if ((affiliationRate || 0) < 20) action = 'Improve affiliation data collection';

        return {
          ...item,
          coverageRate,
          activationRate: itemActivationRate,
          affiliationRate,
          decisionScore: getInstituteDecisionScore({ ...item, coverageRate, activationRate: itemActivationRate, affiliationRate }),
          status,
          action
        };
      })
      .sort((left, right) => right.totalUsers - left.totalUsers);

    const domainMap = new Map();
    rows.forEach((row) => {
      const key = row.domain || '(sans domaine)';
      if (!domainMap.has(key)) {
        domainMap.set(key, {
          domain: key,
          type: row.domainType,
          totalUsers: 0,
          activeUsers: 0,
          inactiveUsers: 0,
          invitedRecent: 0,
          realProblems: 0,
          neverInvited: 0,
          oldWithoutActivation: 0
        });
      }
      const item = domainMap.get(key);
      item.totalUsers += 1;
      item.activeUsers += row.active ? 1 : 0;
      item.inactiveUsers += row.active ? 0 : 1;
      item.invitedRecent += row.invitationBucket === '≤30 jours' ? 1 : 0;
      item.realProblems += row.realProblem ? 1 : 0;
      item.neverInvited += row.invitationBucket === 'Jamais envoyée' ? 1 : 0;
      item.oldWithoutActivation += row.invitationBucket === '>90 jours' ? 1 : 0;
    });

    const domains = Array.from(domainMap.values())
      .map((item) => ({ ...item, activationRate: item.totalUsers ? (item.activeUsers / item.totalUsers) * 100 : null }))
      .sort((left, right) => right.totalUsers - left.totalUsers);

    const avgCoverage = institutes.length
      ? institutes.filter((item) => item.coverageRate !== null).reduce((sum, item) => sum + item.coverageRate, 0) / Math.max(1, institutes.filter((item) => item.coverageRate !== null).length)
      : null;

    const keyMessages = [
      { title: tUI('keyMessagesTitle'), text: activationRate < 60 ? tUI('keyActivationLow', activationRate) : tUI('keyActivationGood', activationRate) },
      { title: tUI('keyMessagesTitle'), text: inactive ? tUI('keyInactiveRecent', (invitedRecent / inactive) * 100) : tUI('keyInactiveRecent', 0) },
      { title: tUI('keyMessagesTitle'), text: tUI('keyRealProblems', realProblems) }
    ];

    const alerts = [];
    if (activationRate >= 60) {
      alerts.push({
        level: 'good',
        title: currentLang === 'fr' ? 'Bonne dynamique d’activation' : 'Strong activation momentum',
        text: currentLang === 'fr'
          ? `Le taux d’activation global atteint ${formatPct(activationRate)}.`
          : `Overall activation rate reaches ${formatPct(activationRate)}.`
      });
    } else {
      alerts.push({
        level: 'warn',
        title: currentLang === 'fr' ? 'Activation globale à renforcer' : 'Overall activation needs attention',
        text: currentLang === 'fr'
          ? `Le taux d’activation global est de ${formatPct(activationRate)}, ce qui laisse une marge importante d’amélioration.`
          : `Overall activation rate is ${formatPct(activationRate)}, which leaves significant room for improvement.`
      });
    }
    if (realProblems > 0) {
      alerts.push({
        level: 'bad',
        title: currentLang === 'fr' ? 'Comptes à traiter immédiatement' : 'Accounts to handle immediately',
        text: currentLang === 'fr'
          ? `${formatInt(realProblems)} utilisateurs sont inactifs depuis plus de 90 jours après invitation.`
          : `${formatInt(realProblems)} users remain inactive more than 90 days after invitation.`
      });
    }

    const recommendations = [];
    if (realProblems > 0) {
      recommendations.push({
        title: currentLang === 'fr' ? 'Relancer les comptes >90 jours' : 'Follow up accounts >90 days',
        actionType: 'realProblems',
        actionValue: 'real-problems',
        actionLabel: formatInt(realProblems),
        actionSuffix: currentLang === 'fr'
          ? ` comptes sont à traiter en priorité car ils restent non activés malgré une invitation ancienne.`
          : ` accounts require priority follow-up because they remain inactive despite an old invitation.`
      });
    }
    if (technical > 0) {
      recommendations.push({
        title: currentLang === 'fr' ? 'Nettoyer les comptes techniques ou incohérents' : 'Clean technical or inconsistent accounts',
        actionType: 'technical',
        actionValue: 'technical',
        actionLabel: formatInt(technical),
        actionSuffix: currentLang === 'fr'
          ? ` lignes présentent des signaux de doublon, email invalide ou compte test/système.`
          : ` rows show duplicate, invalid email, or test/system account signals.`
      });
    }
    if (affiliationMissing > 0) {
      recommendations.push({
        title: currentLang === 'fr' ? 'Améliorer la collecte de l’affiliation institut' : 'Improve institute affiliation capture',
        actionType: 'affiliationMissing',
        actionValue: 'affiliation-missing',
        actionLabel: formatInt(affiliationMissing),
        actionSuffix: currentLang === 'fr'
          ? ` comptes sans affiliation explicite limitent la qualité de pilotage réseau.`
          : ` accounts without explicit affiliation reduce network monitoring quality.`
      });
    }

    const topPriorityInstitutes = institutes
      .slice()
      .sort((left, right) => (right.decisionScore || 0) - (left.decisionScore || 0))
      .slice(0, 5);

    const followUpRows = getFollowUpRows(rows)
      .slice()
      .sort((left, right) => getFollowUpPriority(right) - getFollowUpPriority(left));

    const executiveSummary = [];
    if (topPriorityInstitutes[0]) {
      executiveSummary.push({
        title: currentLang === 'fr' ? 'Institut le plus prioritaire' : 'Highest-priority institute',
        actionType: 'institution',
        actionValue: topPriorityInstitutes[0].institution,
        actionLabel: topPriorityInstitutes[0].institution,
        actionSuffix: currentLang === 'fr'
          ? ` a le score de décision le plus élevé (${formatInt(topPriorityInstitutes[0].decisionScore)}).`
          : ` has the highest decision score (${formatInt(topPriorityInstitutes[0].decisionScore)}).`
      });
    }
    if (followUpRows.length) {
      executiveSummary.push({
        title: currentLang === 'fr' ? 'Suivi immédiat' : 'Immediate follow-up',
        actionType: 'followUpRows',
        actionValue: 'follow-up',
        actionLabel: formatInt(followUpRows.length),
        actionSuffix: currentLang === 'fr'
          ? ` utilisateurs nécessitent actuellement une relance, dont ${formatInt(realProblems)} vrais problèmes.`
          : ` users currently need follow-up, including ${formatInt(realProblems)} real problems.`
      });
    }
    if (affiliationMissing > 0) {
      executiveSummary.push({
        title: currentLang === 'fr' ? 'Blocage qualité de données' : 'Data quality blocker',
        actionType: 'affiliationMissing',
        actionValue: 'affiliation-missing',
        actionLabel: formatInt(affiliationMissing),
        actionSuffix: currentLang === 'fr'
          ? ` comptes filtrés n’ont pas d’affiliation institut renseignée.`
          : ` filtered accounts are missing institute affiliation data.`
      });
    }

    const consolidated = institutes.map((item) => ({
      segment: item.institution,
      totalUsers: item.totalUsers,
      activeUsers: item.activeUsers,
      inactiveUsers: item.inactiveUsers,
      activationRate: item.activationRate,
      invitedRecent: item.invitedRecent,
      invitedAging: item.invitedAging,
      invitedOld: item.invitedOld,
      neverInvited: item.neverInvited,
      realProblems: item.realProblems,
      organizationalCoverage: item.coverageRate,
      decisionScore: item.decisionScore,
      status: item.status,
      priority: priorityLabel(item),
      action: item.action
    }));

    return {
      rows,
      totals: { total, active, inactive, invitedRecent, invitedAging, invitedOld, neverInvited, technical, realProblems, activationRate, domainsDetected, institutesDetected, countriesDetected, affiliationMissing, neverLogged, longInactive, avgCoverage },
      institutes,
      domains,
      recommendations,
      alerts,
      keyMessages,
      executiveSummary,
      topPriorityInstitutes,
      followUpRows,
      consolidated
    };
  }

  function applyFiltersAndRender() {
    currentSummary = buildSummary(getFilteredRows());
    renderDashboard(currentSummary);
  }

  // Table rendering helpers.
  function sortItems(items, state) {
    const direction = state.dir === 'asc' ? 1 : -1;
    return [...items].sort((left, right) => {
      let a = left[state.key];
      let b = right[state.key];
      if (a === null || a === undefined) a = -Infinity;
      if (b === null || b === undefined) b = -Infinity;
      if (typeof a === 'string' || typeof b === 'string') return String(a).localeCompare(String(b)) * direction;
      return ((a || 0) - (b || 0)) * direction;
    });
  }

  function sortableTh(tableName, key, label) {
    const state = tableSortState[tableName];
    const arrow = state.key === key ? (state.dir === 'asc' ? ' ▲' : ' ▼') : '';
    return `<th class="sortable" data-table="${tableName}" data-sort-key="${key}">${escapeHtml(label)}${arrow}</th>`;
  }

  function renderStatusBadge(label) {
    const text = normalize(label);
    let cls = 'info';
    if (text.includes('bon') || text.includes('good')) cls = 'good';
    else if (text.includes('low') || text.includes('priority')) cls = 'bad';
    else if (text.includes('watch') || text.includes('review')) cls = 'warn';
    return `<span class="status ${cls}">${escapeHtml(label)}</span>`;
  }

  function getInstitutionOptions() {
    return [...new Set(baseRows.map((row) => row.mappedInstitution).filter((value) => value && value !== 'Non rattaché'))].sort();
  }

  function getCountryOptions() {
    return [...new Set(baseRows.map((row) => row.country).filter(Boolean))].sort();
  }

  function getDomainTypeOptions() {
    return [...new Set(baseRows.map((row) => row.domainType).filter(Boolean))];
  }

  function renderSelectOptions(options, selectedValue, label) {
    return [
      `<option value="all">${escapeHtml(label)} - ${escapeHtml(tUI('all'))}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option)}"${option === selectedValue ? ' selected' : ''}>${escapeHtml(option)}</option>`)
    ].join('');
  }

  function renderMainKpis(totals) {
    const items = [
      ['all', 'Total users', formatInt(totals.total), 'Loaded base', 'kpi-blue'],
      ['active', 'Activated users', formatInt(totals.active), 'Activated account', 'kpi-green'],
      ['inactive', 'Inactive users', formatInt(totals.inactive), 'No activation date', 'kpi-orange'],
      [null, 'Activation rate', formatPct(totals.activationRate), 'Active / total', 'kpi-blue'],
      ['realProblems', 'Real problems', formatInt(totals.realProblems), 'Inactive >90 days', 'kpi-red'],
      ['invitedRecent', 'Invitation ≤30 days', formatInt(totals.invitedRecent), 'Recent cases', ''],
      ['invitedAging', 'Invitation 31–90 days', formatInt(totals.invitedAging), 'To monitor', ''],
      ['invitedOld', 'Invitation >90 days', formatInt(totals.invitedOld), 'Drop-off risk', ''],
      ['neverInvited', 'Never invited', formatInt(totals.neverInvited), 'Campaign issue', ''],
      ['technical', 'Technical / anomaly accounts', formatInt(totals.technical), 'Email, duplicate or test', '']
    ];

    return items.map(([filter, label, value, sub, cls]) => (
      filter
        ? `<div class="card ${cls} kpi-card-clickable" tabindex="0" data-filter="${filter}" data-label="${escapeHtml(label)}"><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-value">${value}</div><div class="kpi-sub">${escapeHtml(sub)}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>`
        : `<div class="card ${cls}"><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-value">${value}</div><div class="kpi-sub">${escapeHtml(sub)}</div></div>`
    )).join('');
  }

  function translateUiToFrench(root) {
    const replacements = new Map([
      ['Executive summary', 'Résumé exécutif'],
      ['Priority actions for decision-makers', 'Actions prioritaires pour les décideurs'],
      ['Highest-priority institute', 'Institut le plus prioritaire'],
      ['Immediate follow-up', 'Suivi immédiat'],
      ['Data quality blocker', 'Blocage qualité de données'],
      ['Header', 'En-tête'],
      ['Reading the real structure of the file', 'Lecture de la structure réelle du fichier'],
      ['Analyzed file', 'Fichier analysé'],
      ['Sheet read', 'Feuille lue'],
      ['Institutes detected', 'Instituts détectés'],
      ['Email domains detected', 'Domaines email détectés'],
      ['Main KPIs', 'KPI principaux'],
      ['Rules automatically applied from the Excel file', 'Règles automatiquement appliquées depuis le fichier Excel'],
      ['Total users', 'Utilisateurs total'],
      ['Activated users', 'Utilisateurs activés'],
      ['Inactive users', 'Utilisateurs inactifs'],
      ['Activation rate', 'Taux d’activation'],
      ['Real problems', 'Vrais problèmes'],
      ['Invitation ≤30 days', 'Invitation ≤30 jours'],
      ['Invitation 31–90 days', 'Invitation 31–90 jours'],
      ['Invitation >90 days', 'Invitation >90 jours'],
      ['Never invited', 'Jamais invités'],
      ['Technical / anomaly accounts', 'Comptes anomalie / technique'],
      ['Loaded base', 'Base chargée'],
      ['Activated account', 'Compte activé'],
      ['No activation date', 'Sans date d’activation'],
      ['Active / total', 'Activés / total'],
      ['Inactive >90 days', 'Inactifs >90 jours'],
      ['Recent cases', 'Cas récents'],
      ['To monitor', 'À surveiller'],
      ['Drop-off risk', 'Risque de décrochage'],
      ['Campaign issue', 'Problème de campagne'],
      ['Email, duplicate or test', 'Email, doublon ou test'],
      ['Management reading', 'Lecture managériale'],
      ['Simple alerts for decision-makers', 'Alertes simples pour les décideurs'],
      ['Charts', 'Graphiques'],
      ['Activation, invitations and most / least active institutes', 'Activation, invitations et instituts les plus et les moins actifs'],
      ['Engagement and data quality', 'Engagement et qualité des données'],
      ['Login, score, country and roles', 'Connexion, score, pays et rôles'],
      ['Users who never logged in', 'Utilisateurs jamais connectés'],
      ['Activated without a last login date', 'Activés sans date de dernière connexion'],
      ['Inactive for >180 days', 'Inactifs depuis >180 jours'],
      ['Based on Last log in date', 'Basé sur la date de dernière connexion'],
      ['Missing affiliations', 'Affiliations manquantes'],
      ['Click to view people and emails', 'Cliquer pour voir les personnes et les emails'],
      ['Top priority institutes', 'Instituts les plus prioritaires'],
      ['Composite decision score to focus action', 'Score composite de décision pour cibler l’action'],
      ['Institute', 'Institut'],
      ['Decision score', 'Score de décision'],
      ['Users', 'Utilisateurs'],
      ['Coverage rate', 'Taux de couverture'],
      ['Action', 'Action'],
      ['Analysis by institute', 'Analyse par institut'],
      ['Coverage, activation and recommended action', 'Couverture, activation et action recommandée'],
      ['Analysis by email domain', 'Analyse par domaine email'],
      ['Detection of personal domains and inactive pockets', 'Détection des domaines personnels et des poches d’inactivité'],
      ['Users needing follow-up', 'Utilisateurs à relancer'],
      ['Highest-priority people to contact now', 'Personnes les plus prioritaires à contacter maintenant'],
      ['Name', 'Nom'],
      ['Email', 'Email'],
      ['Reason', 'Raison'],
      ['Priority', 'Priorité'],
      ['Invitation age', 'Âge de l’invitation'],
      ['Last login age', 'Âge depuis dernière connexion'],
      ['No users currently require follow-up for the selected segment.', 'Aucun utilisateur ne nécessite actuellement de relance pour le segment sélectionné.'],
      ['Decision support', 'Aide à la décision'],
      ['Recommendations linked to measurable findings', 'Recommandations liées à des constats mesurables'],
      ['Final consolidated table', 'Tableau consolidé final'],
      ['Summary view for monitoring', 'Vue synthétique pour le pilotage'],
      ['Detected columns and rules', 'Colonnes détectées et règles'],
      ['Transparency about the fields actually used', 'Transparence sur les champs réellement utilisés'],
      ['Fields used:', 'Champs utilisés :'],
      ['Last name', 'Nom'],
      ['First name', 'Prénom'],
      ['Affiliated institute', 'Institut d’affiliation'],
      ['Mapped institute', 'Institut rattaché'],
      ['Location', 'Pays'],
      ['Organization', 'Organisation'],
      ['Role', 'Rôle'],
      ['Status', 'Statut'],
      ['Invitation', 'Invitation'],
      ['Last login', 'Dernière connexion'],
      ['Active', 'Actif'],
      ['Inactive', 'Inactif'],
      ['Technical', 'Technique'],
      ['Good', 'Bon'],
      ['Watch', 'À surveiller'],
      ['Low', 'Faible'],
      ['To review', 'À vérifier']
    ]);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach((textNode) => {
      let text = textNode.nodeValue;
      if (!text || !text.trim()) return;
      replacements.forEach((fr, en) => {
        text = text.split(en).join(fr);
      });
      textNode.nodeValue = text;
    });
  }

  function renderInstituteTable(items) {
    const sorted = sortItems(items, tableSortState.institutes);
    return `<table><thead><tr>${[
      sortableTh('institutes', 'institution', 'Institution'),
      sortableTh('institutes', 'globalStaff', 'Global staff'),
      sortableTh('institutes', 'scientificStaff', 'Scientific'),
      sortableTh('institutes', 'supportStaff', 'Support'),
      sortableTh('institutes', 'totalUsers', 'PNLink users'),
      sortableTh('institutes', 'activeUsers', 'Activated'),
      sortableTh('institutes', 'inactiveUsers', 'Inactive'),
      sortableTh('institutes', 'activationRate', 'Activation rate'),
      sortableTh('institutes', 'coverageRate', '% coverage'),
      sortableTh('institutes', 'affiliationRate', '% affiliation'),
      sortableTh('institutes', 'realProblems', 'Real problems'),
      sortableTh('institutes', 'status', 'Status'),
      sortableTh('institutes', 'action', 'Action')
    ].join('')}</tr></thead><tbody>${sorted.map((item) => `<tr>
      <td><strong class="stat-link" data-institution="${escapeHtml(item.institution)}">${escapeHtml(item.institution)}</strong></td>
      <td>${item.globalStaff ?? '—'}</td><td>${item.scientificStaff ?? '—'}</td><td>${item.supportStaff ?? '—'}</td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.totalUsers)}</span></td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.activeUsers)}</span></td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.inactiveUsers)}</span></td>
      <td>${formatPct(item.activationRate)}</td><td>${formatPct(item.coverageRate)}</td><td>${formatPct(item.affiliationRate)}</td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.realProblems)}</span></td><td>${renderStatusBadge(item.status)}</td><td>${escapeHtml(item.action)}</td>
    </tr>`).join('')}</tbody></table>`;
  }

  function renderDomainTable(items) {
    const sorted = sortItems(items.slice(0, 25), tableSortState.domains);
    return `<table><thead><tr>${[
      sortableTh('domains', 'domain', 'Domain'),
      sortableTh('domains', 'type', 'Type'),
      sortableTh('domains', 'totalUsers', 'Total'),
      sortableTh('domains', 'activeUsers', 'Activated'),
      sortableTh('domains', 'inactiveUsers', 'Inactive'),
      sortableTh('domains', 'activationRate', 'Activation rate'),
      sortableTh('domains', 'invitedRecent', 'Invitations ≤30d'),
      sortableTh('domains', 'neverInvited', 'No invitation'),
      sortableTh('domains', 'oldWithoutActivation', '90d without activation'),
      sortableTh('domains', 'realProblems', 'Real problems')
    ].join('')}</tr></thead><tbody>${sorted.map((item) => `<tr>
      <td><strong>${escapeHtml(item.domain)}</strong></td><td>${renderStatusBadge(item.type)}</td><td>${formatInt(item.totalUsers)}</td><td>${formatInt(item.activeUsers)}</td><td>${formatInt(item.inactiveUsers)}</td><td>${formatPct(item.activationRate)}</td><td>${formatInt(item.invitedRecent)}</td><td>${formatInt(item.neverInvited)}</td><td>${formatInt(item.oldWithoutActivation)}</td><td>${formatInt(item.realProblems)}</td>
    </tr>`).join('')}</tbody></table>`;
  }

  function renderConsolidatedTable(items) {
    const sorted = sortItems(items, tableSortState.consolidated);
    return `<table><thead><tr>${[
      sortableTh('consolidated', 'segment', 'Institution / segment'),
      sortableTh('consolidated', 'totalUsers', 'Total'),
      sortableTh('consolidated', 'activeUsers', 'Activated'),
      sortableTh('consolidated', 'inactiveUsers', 'Inactive'),
      sortableTh('consolidated', 'activationRate', 'Activation rate'),
      sortableTh('consolidated', 'invitedRecent', '≤30d'),
      sortableTh('consolidated', 'invitedAging', '31-90d'),
      sortableTh('consolidated', 'invitedOld', '>90d'),
      sortableTh('consolidated', 'neverInvited', 'No invitation'),
      sortableTh('consolidated', 'realProblems', 'Real problems'),
      sortableTh('consolidated', 'organizationalCoverage', 'Coverage rate'),
      sortableTh('consolidated', 'status', 'Status'),
      sortableTh('consolidated', 'priority', 'Priority'),
      sortableTh('consolidated', 'action', 'Action')
    ].join('')}</tr></thead><tbody>${sorted.map((item) => `<tr>
      <td><strong class="stat-link" data-institution="${escapeHtml(item.segment)}">${escapeHtml(item.segment)}</strong></td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.segment)}">${formatInt(item.totalUsers)}</span></td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.segment)}">${formatInt(item.activeUsers)}</span></td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.segment)}">${formatInt(item.inactiveUsers)}</span></td>
      <td>${formatPct(item.activationRate)}</td>
      <td>${formatInt(item.invitedRecent)}</td>
      <td>${formatInt(item.invitedAging)}</td>
      <td>${formatInt(item.invitedOld)}</td>
      <td>${formatInt(item.neverInvited)}</td>
      <td><span class="stat-link" data-institution="${escapeHtml(item.segment)}">${formatInt(item.realProblems)}</span></td>
      <td>${formatPct(item.organizationalCoverage)}</td>
      <td>${renderStatusBadge(item.status)}</td>
      <td>${renderPriorityBadge(item.priority)}</td>
      <td>${escapeHtml(item.action)}</td>
    </tr>`).join('')}</tbody></table>`;
  }

  function renderExecutiveSummary(items) {
    return `<div class="recommendations">${items.map((item) => `<div class="rec"><strong>${escapeHtml(item.title)}</strong><div>${item.actionType ? `<span class="stat-link" data-summary-action="${escapeHtml(item.actionType)}" data-summary-value="${escapeHtml(item.actionValue || '')}">${escapeHtml(item.actionLabel || '')}</span>${escapeHtml(item.actionSuffix || '')}` : escapeHtml(item.text || '')}</div></div>`).join('')}</div>`;
  }

  function renderRecommendations(items) {
    return items.map((item) => `<div class="rec"><strong>${escapeHtml(item.title)}</strong><div>${item.actionType ? `<span class="stat-link" data-recommendation-action="${escapeHtml(item.actionType)}" data-recommendation-value="${escapeHtml(item.actionValue || '')}">${escapeHtml(item.actionLabel || '')}</span>${escapeHtml(item.actionSuffix || '')}` : escapeHtml(item.text || '')}</div></div>`).join('');
  }

  function renderTopPriorityInstitutes(items) {
    return `<table><thead><tr><th>Institute</th><th>Decision score</th><th>Users</th><th>Activation rate</th><th>Coverage rate</th><th>Real problems</th><th>Action</th></tr></thead><tbody>${items.map((item) => `<tr><td><strong class="stat-link" data-institution="${escapeHtml(item.institution)}">${escapeHtml(item.institution)}</strong></td><td>${formatInt(item.decisionScore)}</td><td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.totalUsers)}</span></td><td>${formatPct(item.activationRate)}</td><td>${formatPct(item.coverageRate)}</td><td><span class="stat-link" data-institution="${escapeHtml(item.institution)}">${formatInt(item.realProblems)}</span></td><td>${escapeHtml(item.action)}</td></tr>`).join('')}</tbody></table>`;
  }

  function renderFollowUpTable(rows) {
    if (!rows.length) return `<div class="empty">No users currently require follow-up for the selected segment.</div>`;
    return `<table><thead><tr><th>Name</th><th>Email</th><th>Institute</th><th>Reason</th><th>Priority</th><th>Invitation age</th><th>Last login age</th></tr></thead><tbody>${rows.slice(0, 50).map((row, index) => `<tr><td><span class="stat-link" data-followup-index="${index}">${escapeHtml(getUserDisplayName(row))}</span></td><td>${escapeHtml(row.email || '—')}</td><td>${escapeHtml(row.mappedInstitution || '—')}</td><td>${escapeHtml(getFollowUpReason(row, chartLabels()))}</td><td>${renderPriorityBadge(getUserPriorityLevel(row))}</td><td>${row.invitationAge !== null && row.invitationAge !== undefined ? `${formatInt(row.invitationAge)}d` : '—'}</td><td>${row.loginAge !== null && row.loginAge !== undefined ? `${formatInt(row.loginAge)}d` : '—'}</td></tr>`).join('')}</tbody></table>`;
  }

  // Dashboard rendering and localization helpers.
  function getActiveFilterBadges() {
    const badges = [];
    if (filterState.institution !== 'all') badges.push({ label: tUI('filterBadgeInstitute'), value: filterState.institution });
    if (filterState.country !== 'all') badges.push({ label: tUI('filterBadgeCountry'), value: filterState.country });
    if (filterState.domainType !== 'all') badges.push({ label: tUI('filterBadgeDomain'), value: filterState.domainType });
    if (filterState.status !== 'all') badges.push({ label: tUI('filterBadgeStatus'), value: filterState.status === 'active' ? tUI('active') : tUI('inactive') });
    return badges;
  }

  function renderActiveFilterBadges() {
    const badges = getActiveFilterBadges();
    if (!badges.length) return `<div class="active-filter-badges"><div class="filter-badge"><span>${escapeHtml(tUI('activeFilters'))}</span>${escapeHtml(tUI('noActiveFilters'))}</div></div>`;
    return `<div class="active-filter-badges">${badges.map((badge) => `<div class="filter-badge"><span>${escapeHtml(badge.label)}:</span>${escapeHtml(badge.value)}</div>`).join('')}</div>`;
  }

  function getSelectedInstituteSummary(summary) {
    if (!summary || filterState.institution === 'all') return null;
    return (summary.institutes || []).find((item) => item.institution === filterState.institution) || null;
  }

  function renderInstituteViewBanner(summary) {
    const selected = getSelectedInstituteSummary(summary);
    if (!selected) return '';
    return `<div class="institute-view-banner"><div class="institute-view-head"><div><h3 class="institute-view-title">${escapeHtml(tUI('instituteViewTitle'))}</h3><div class="institute-view-sub">${escapeHtml(tUI('instituteViewSubtitle'))}</div></div>${renderActiveFilterBadges()}</div><div class="institute-view-grid"><div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('selectedInstitute'))}</div><div class="institute-stat-value">${escapeHtml(selected.institution)}</div></div><div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('filteredUsers'))}</div><div class="institute-stat-value">${formatInt(summary.totals.total)}</div></div><div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('focusActivation'))}</div><div class="institute-stat-value">${formatPct(summary.totals.activationRate)}</div></div><div class="institute-stat"><div class="institute-stat-label">${escapeHtml(tUI('focusProblems'))}</div><div class="institute-stat-value">${formatInt(summary.totals.realProblems)}</div></div></div><div class="segment-export-bar"><button type="button" id="exportVisibleUsersBtn" class="export-btn">${escapeHtml(tUI('exportVisibleUsers'))}</button><button type="button" id="exportInstituteViewBtn" class="export-btn">${escapeHtml(tUI('exportInstituteView'))}</button><button type="button" id="exportFollowUpListBtn" class="export-btn">${escapeHtml(tUI('exportFollowUpList'))}</button><span class="inline-note">${escapeHtml(tUI('estimatedCoverage'))}: <strong>${escapeHtml(formatPct(selected.coverageRate))}</strong></span></div></div>`;
  }

  function renderDashboard(summary) {
    const totals = summary.totals;
    dashboardEl.innerHTML = `<div class="summary-grid"><div class="card"><div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('keyMessagesTitle'))}</h2><span>${formatInt(totals.total)} rows</span></div><div class="key-messages">${summary.keyMessages.map((message) => `<div class="key-message"><strong>${escapeHtml(message.title)}</strong><div>${escapeHtml(message.text)}</div></div>`).join('')}</div></div><div class="card"><div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('lastUpdateTitle'))}</h2><span>${escapeHtml(currentFileMeta?.sheetName || '—')}</span></div><div class="last-update-grid"><div class="card"><div class="meta-label">${escapeHtml(tUI('importedFile'))}</div><div class="small"><strong>${escapeHtml(currentFileMeta?.fileName || tUI('notAvailable'))}</strong></div></div><div class="card"><div class="meta-label">${escapeHtml(tUI('importDate'))}</div><div class="small"><strong>${escapeHtml(formatDateTime(currentFileMeta?.importedAt))}</strong></div></div><div class="card"><div class="meta-label">${escapeHtml(tUI('fileModified'))}</div><div class="small"><strong>${escapeHtml(formatDateTime(currentFileMeta?.lastModified))}</strong></div></div></div></div></div><div class="card" style="margin-bottom:18px;"><div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('globalFiltersTitle'))}</h2><span>${escapeHtml(tUI('filterHint'))}</span></div><div class="global-filters"><select id="globalFilterInstitution">${renderSelectOptions(getInstitutionOptions(), filterState.institution, tUI('filterInstitution'))}</select><select id="globalFilterCountry">${renderSelectOptions(getCountryOptions(), filterState.country, tUI('filterCountry'))}</select><select id="globalFilterDomainType">${renderSelectOptions(getDomainTypeOptions(), filterState.domainType, tUI('filterDomainType'))}</select><select id="globalFilterStatus">${renderSelectOptions(['active', 'inactive'], filterState.status, tUI('filterStatus'))}</select></div>${filterState.institution === 'all' ? renderActiveFilterBadges() : ''}<div class="filters-actions"><button type="button" id="resetFiltersBtn" class="ghost-btn">${escapeHtml(tUI('resetFilters'))}</button></div></div>${renderInstituteViewBanner(summary)}<div class="kpi-grid focus-kpis"><div class="card focus-kpi activation"><div class="kpi-label">${escapeHtml(tUI('focusActivation'))}</div><div class="kpi-value">${formatPct(totals.activationRate)}</div><div class="kpi-sub">${escapeHtml(tUI('focusActivationSub'))}</div></div><div class="card focus-kpi coverage"><div class="kpi-label">${escapeHtml(tUI('focusCoverage'))}</div><div class="kpi-value">${formatPct(totals.avgCoverage)}</div><div class="kpi-sub">${escapeHtml(tUI('focusCoverageSub'))}</div></div><div class="card focus-kpi problems kpi-card-clickable" tabindex="0" data-filter="realProblems" data-label="Real problems"><div class="kpi-label">${escapeHtml(tUI('focusProblems'))}</div><div class="kpi-value">${formatInt(totals.realProblems)}</div><div class="kpi-sub">${escapeHtml(tUI('focusProblemsSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div></div><div class="section-title"><h2>Executive summary</h2><span>Priority actions for decision-makers</span></div><div class="card">${renderExecutiveSummary(summary.executiveSummary)}</div><div class="section-title"><h2>Header</h2><span>Reading the real structure of the file</span></div><div class="meta-grid"><div class="card"><div class="meta-label">Analyzed file</div><div class="meta-value">${escapeHtml(currentFileMeta?.fileName || '—')}</div></div><div class="card"><div class="meta-label">Sheet read</div><div class="meta-value">${escapeHtml(currentFileMeta?.sheetName || '—')}</div></div><div class="card"><div class="meta-label">Institutes detected</div><div class="meta-value">${formatInt(totals.institutesDetected)}</div></div><div class="card"><div class="meta-label">Email domains detected</div><div class="meta-value">${formatInt(totals.domainsDetected)}</div></div></div><div class="section-title"><h2>Main KPIs</h2><span>Rules automatically applied from the Excel file</span></div><div class="kpi-grid">${renderMainKpis(totals)}</div><div class="section-title"><h2>Management reading</h2><span>Simple alerts for decision-makers</span></div><div class="alerts">${summary.alerts.map((alert) => `<div class="alert ${alert.level}"><div class="alert-title">${escapeHtml(alert.title)}</div><div>${escapeHtml(alert.text)}</div></div>`).join('')}</div><div class="section-title"><h2>Charts</h2><span>Activation, invitations and most / least active institutes</span></div><div class="chart-grid"><div class="card"><div class="chart-box"><canvas id="activationChart"></canvas></div></div><div class="card"><div class="chart-box"><canvas id="invitationChart"></canvas></div></div><div class="card"><div class="chart-box"><canvas id="topActiveInstitutesChart"></canvas></div></div><div class="card"><div class="chart-box"><canvas id="topLeastActiveInstitutesChart"></canvas></div></div><div class="card"><div class="chart-box"><canvas id="domainTypeChart"></canvas></div></div></div><div class="section-title"><h2>Engagement and data quality</h2><span>Login, score, country and roles</span></div><div class="engagement-grid"><div class="card engagement-clickable" tabindex="0" data-engagement-filter="neverLogged" data-label="Users who never logged in"><div class="meta-label">Users who never logged in</div><div class="meta-value">${formatInt(totals.neverLogged)}</div><div class="small muted">Activated without a last login date</div></div><div class="card engagement-clickable" tabindex="0" data-engagement-filter="longInactive" data-label="Inactive for >180 days"><div class="meta-label">Inactive for &gt;180 days</div><div class="meta-value">${formatInt(totals.longInactive)}</div><div class="small muted">Based on Last log in date</div></div><div class="card engagement-clickable" tabindex="0" data-engagement-filter="affiliationMissing" data-label="Missing affiliations"><div class="meta-label">Missing affiliations</div><div class="meta-value">${formatInt(totals.affiliationMissing)}</div><div class="small muted">Click to view people and emails</div></div></div><div class="section-title"><h2>Top priority institutes</h2><span>Composite decision score to focus action</span></div><div class="card table-card"><div class="table-wrap">${renderTopPriorityInstitutes(summary.topPriorityInstitutes)}</div></div><div class="section-title"><h2>Analysis by institute</h2><span>Coverage, activation and recommended action</span></div><div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderInstituteTable(summary.institutes)}</div><div class="table-bottom-toolbar"></div></div><div class="section-title"><h2>Analysis by email domain</h2><span>Detection of personal domains and inactive pockets</span></div><div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderDomainTable(summary.domains)}</div><div class="table-bottom-toolbar"></div></div><div class="section-title"><h2>Users needing follow-up</h2><span>Highest-priority people to contact now</span></div><div class="card table-card"><div class="table-toolbar"><button type="button" id="exportFollowUpTableBtn" class="export-btn">${escapeHtml(tUI('exportFollowUpList'))}</button></div><div class="table-wrap">${renderFollowUpTable(summary.followUpRows)}</div></div><div class="section-title"><h2>Decision support</h2><span>Recommendations linked to measurable findings</span></div><div class="card recommendations">${renderRecommendations(summary.recommendations)}</div><div class="section-title"><h2>Final consolidated table</h2><span>Summary view for monitoring</span></div><div class="card table-card"><div class="table-toolbar"><button type="button" id="exportConsolidatedBtn" class="export-btn">${escapeHtml(tUI('exportConsolidated'))}</button></div><div class="table-wrap">${renderConsolidatedTable(summary.consolidated)}</div><div class="table-bottom-toolbar"></div></div><div class="section-title"><h2>Detected columns and rules</h2><span>Transparency about the fields actually used</span></div><div class="card"><div class="small"><strong>Fields used:</strong> ${Object.entries(detectedFields).map(([key, value]) => `${escapeHtml(key)} → ${escapeHtml(value || 'not found')}`).join(' | ')}</div><div class="footer-note">${escapeHtml(tUI('rulesNote'))}</div></div>`;
    if (currentLang === 'fr') translateUiToFrench(dashboardEl);
    bindGlobalFilterEvents();
    bindDashboardInteractions();
    createCharts(summary);
  }

  // Detail modal helpers.
  function rowsForInstitution(name) {
    return currentSummary.rows.filter((row) => row.mappedInstitution === name);
  }

  function detailRowsForFilter(filterKey) {
    const rows = currentSummary.rows;
    const by = {
      all: (row) => true,
      active: (row) => row.active,
      inactive: (row) => !row.active,
      realProblems: (row) => row.realProblem,
      invitedRecent: (row) => !row.active && row.invitationBucket === '≤30 jours',
      invitedAging: (row) => !row.active && row.invitationBucket === '31–90 jours',
      invitedOld: (row) => !row.active && row.invitationBucket === '>90 jours',
      neverInvited: (row) => !row.active && row.invitationBucket === 'Jamais envoyée',
      technical: (row) => row.technical
    };
    return rows.filter(by[filterKey] || (() => false));
  }

  function openDetailModal(filterKey, label) {
    const rows = detailRowsForFilter(filterKey);
    currentDetailRows = rows;
    currentDetailTitle = label;
    renderDetailModalContent(label, rows, tUI('rowsFilter', rows.length));
  }

  function openInstitutionDetail(name) {
    const rows = rowsForInstitution(name);
    currentDetailRows = rows;
    currentDetailTitle = tUI('usersForInstituteTitle', name);
    renderDetailModalContent(currentDetailTitle, rows, tUI('rowsForInstitute', rows.length));
  }

  function openRowsDetail(rows, title, metaText) {
    currentDetailRows = rows;
    currentDetailTitle = title;
    renderDetailModalContent(title, rows, metaText || tUI('rowsGeneric', rows.length));
  }

  function renderDetailTable(rows) {
    if (!rows.length) return `<div class="empty">${escapeHtml(tUI('emptySegment'))}</div>`;
    return `<div class="detail-table-shell"><div class="detail-table-wrap table-wrap"><table><thead><tr><th>Last name</th><th>First name</th><th>Email</th><th>Affiliated institute</th><th>Mapped institute</th><th>Location</th><th>Organization</th><th>Role</th><th>${escapeHtml(tUI('priorityScore'))}</th><th>Status</th><th>Invitation</th><th>Last login</th></tr></thead><tbody>${rows.map((row) => `<tr><td>${escapeHtml(row.lastName || '—')}</td><td>${escapeHtml(row.firstName || '—')}</td><td>${escapeHtml(row.email || '—')}</td><td>${escapeHtml(row.affiliation || '—')}</td><td>${escapeHtml(row.mappedInstitution || '—')}<div class="small muted">${escapeHtml(row.mappingSource || '')}</div></td><td>${escapeHtml(row.country || '—')}</td><td>${escapeHtml(row.company || '—')}</td><td>${escapeHtml(row.role || '—')}</td><td>${renderPriorityBadge(getUserPriorityLevel(row))}</td><td>${row.active ? '<span class="status good">Active</span>' : '<span class="status warn">Inactive</span>'}${row.realProblem ? ' <span class="status bad">Real problem</span>' : ''}${row.technical ? ' <span class="status info">Technical</span>' : ''}</td><td>${escapeHtml(row.invitationBucket || '—')}</td><td>${escapeHtml(row.lastLoginText || '—')}</td></tr>`).join('')}</tbody></table></div><div class="detail-bottom-toolbar"><button type="button" class="scroll-btn" data-scroll-target=".detail-table-wrap" data-direction="-1">←</button><button type="button" class="scroll-btn" data-scroll-target=".detail-table-wrap" data-direction="1">→</button></div></div>`;
  }

  function renderDetailModalContent(title, rows, metaText) {
    detailModalTitleEl.textContent = title;
    detailModalMetaEl.textContent = metaText;
    detailModalBodyEl.innerHTML = `<div class="modal-tools"><input id="detailSearchName" type="text" placeholder="${escapeHtml(tUI('searchName'))}"><input id="detailSearchEmail" type="text" placeholder="${escapeHtml(tUI('searchEmail'))}"><button type="button" id="detailExportCsv" class="export-btn">${escapeHtml(tUI('exportCsv'))}</button><button type="button" id="detailExportExcel" class="export-btn">${escapeHtml(tUI('exportExcel'))}</button></div><div id="detailTableHost">${renderDetailTable(rows)}</div>`;
    if (currentLang === 'fr') translateUiToFrench(detailModalBodyEl);
    detailModalEl.classList.add('open');
    detailModalEl.setAttribute('aria-hidden', 'false');
    bindDetailControls(rows);
  }

  function rerenderCurrentDetail() {
    if (!detailModalEl.classList.contains('open')) return;
    renderDetailModalContent(currentDetailTitle || tUI('detail'), currentDetailRows || [], tUI('rowsGeneric', (currentDetailRows || []).length));
  }

  function closeDetailModal() {
    detailModalEl.classList.remove('open');
    detailModalEl.setAttribute('aria-hidden', 'true');
  }

  async function downloadExport(url, body, fallbackName) {
    const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!response.ok) return;
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fallbackName;
    link.click();
    window.URL.revokeObjectURL(objectUrl);
  }

  function enrichRowsForExport(rows) {
    return rows.map((row) => ({ ...row, priority: getUserPriorityLevel(row) }));
  }

  function bindDetailScrollButtons(scope) {
    scope.querySelectorAll('.scroll-btn[data-scroll-target]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = scope.querySelector(button.dataset.scrollTarget);
        if (!target) return;
        target.scrollBy({ left: Number(button.dataset.direction || '1') * 360, behavior: 'smooth' });
      });
    });
  }

  function bindDetailControls(sourceRows) {
    const nameInput = document.getElementById('detailSearchName');
    const emailInput = document.getElementById('detailSearchEmail');
    const host = document.getElementById('detailTableHost');
    const rerender = () => {
      const nameQuery = normalize(nameInput.value);
      const emailQuery = normalize(emailInput.value);
      const filtered = sourceRows.filter((row) => (!nameQuery || normalize(`${row.firstName} ${row.lastName}`).includes(nameQuery)) && (!emailQuery || normalize(row.email).includes(emailQuery)));
      currentDetailRows = filtered;
      detailModalMetaEl.textContent = tUI('rowsGeneric', filtered.length);
      host.innerHTML = renderDetailTable(filtered);
      bindDetailScrollButtons(host);
    };
    nameInput.addEventListener('input', rerender);
    emailInput.addEventListener('input', rerender);
    document.getElementById('detailExportCsv').addEventListener('click', () => downloadExport('/api/dashboard/export/detail', { rows: enrichRowsForExport(currentDetailRows), format: 'csv', fileBaseName: 'detail_export', lang: currentLang }, 'detail_export.csv'));
    document.getElementById('detailExportExcel').addEventListener('click', () => downloadExport('/api/dashboard/export/detail', { rows: enrichRowsForExport(currentDetailRows), format: 'xlsx', fileBaseName: 'detail_export', lang: currentLang }, 'detail_export.xlsx'));
    rerender();
  }

  // Main dashboard interactions.
  function bindGlobalFilterEvents() {
    const institution = document.getElementById('globalFilterInstitution');
    if (!institution) return;
    document.getElementById('globalFilterInstitution').addEventListener('change', (event) => { filterState.institution = event.target.value; applyFiltersAndRender(); });
    document.getElementById('globalFilterCountry').addEventListener('change', (event) => { filterState.country = event.target.value; applyFiltersAndRender(); });
    document.getElementById('globalFilterDomainType').addEventListener('change', (event) => { filterState.domainType = event.target.value === 'all' ? 'all' : event.target.value; applyFiltersAndRender(); });
    document.getElementById('globalFilterStatus').addEventListener('change', (event) => { filterState.status = event.target.value === 'all' ? 'all' : event.target.value; applyFiltersAndRender(); });
    document.getElementById('resetFiltersBtn')?.addEventListener('click', () => { filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' }; applyFiltersAndRender(); });
  }

  function bindDashboardInteractions() {
    dashboardEl.querySelectorAll('.kpi-card-clickable[data-filter]').forEach((card) => {
      const open = () => openDetailModal(card.dataset.filter, card.dataset.label || tUI('detail'));
      card.addEventListener('click', open);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });
    dashboardEl.querySelectorAll('.engagement-clickable[data-engagement-filter]').forEach((card) => {
      card.addEventListener('click', () => {
        let rows = [];
        if (card.dataset.engagementFilter === 'affiliationMissing') rows = currentSummary.rows.filter((row) => !row.hasAffiliation);
        if (card.dataset.engagementFilter === 'neverLogged') rows = currentSummary.rows.filter((row) => row.neverLogged);
        if (card.dataset.engagementFilter === 'longInactive') rows = currentSummary.rows.filter((row) => row.longInactive);
        openRowsDetail(rows, card.dataset.label || tUI('detail'), tUI('rowsSegment', rows.length));
      });
    });
    dashboardEl.querySelectorAll('.stat-link[data-institution]').forEach((element) => element.addEventListener('click', () => openInstitutionDetail(element.dataset.institution)));
    dashboardEl.querySelectorAll('.stat-link[data-followup-index]').forEach((element) => element.addEventListener('click', () => {
      const index = Number(element.dataset.followupIndex || '-1');
      const row = currentSummary?.followUpRows?.[index];
      if (!row) return;
      openRowsDetail([row], getUserDisplayName(row), tUI('rowsSegment', 1));
    }));
    dashboardEl.querySelectorAll('.stat-link[data-summary-action]').forEach((element) => element.addEventListener('click', () => {
      const action = element.dataset.summaryAction;
      if (action === 'institution') {
        openInstitutionDetail(element.dataset.summaryValue || '');
        return;
      }
      if (action === 'followUpRows') {
        const rows = currentSummary?.followUpRows || [];
        openRowsDetail(rows, currentLang === 'fr' ? 'Utilisateurs à relancer' : 'Users needing follow-up', tUI('rowsSegment', rows.length));
        return;
      }
      if (action === 'affiliationMissing') {
        const rows = currentSummary?.rows?.filter((row) => !row.hasAffiliation) || [];
        openRowsDetail(rows, currentLang === 'fr' ? 'Affiliations manquantes' : 'Missing affiliations', tUI('rowsSegment', rows.length));
      }
    }));
    dashboardEl.querySelectorAll('.stat-link[data-recommendation-action]').forEach((element) => element.addEventListener('click', () => {
      const action = element.dataset.recommendationAction;
      if (action === 'realProblems') {
        const rows = currentSummary?.rows?.filter((row) => row.realProblem) || [];
        openRowsDetail(rows, currentLang === 'fr' ? 'Comptes >90 jours à relancer' : 'Accounts >90 days needing follow-up', tUI('rowsSegment', rows.length));
        return;
      }
      if (action === 'technical') {
        const rows = currentSummary?.rows?.filter((row) => row.technical) || [];
        openRowsDetail(rows, currentLang === 'fr' ? 'Comptes techniques ou incohérents' : 'Technical or inconsistent accounts', tUI('rowsSegment', rows.length));
        return;
      }
      if (action === 'affiliationMissing') {
        const rows = currentSummary?.rows?.filter((row) => !row.hasAffiliation) || [];
        openRowsDetail(rows, currentLang === 'fr' ? 'Affiliations manquantes' : 'Missing affiliations', tUI('rowsSegment', rows.length));
      }
    }));
    dashboardEl.querySelectorAll('th.sortable[data-table][data-sort-key]').forEach((th) => th.addEventListener('click', () => {
      const table = th.dataset.table;
      const key = th.dataset.sortKey;
      const current = tableSortState[table];
      tableSortState[table] = { key, dir: current.key === key && current.dir === 'desc' ? 'asc' : 'desc' };
      renderDashboard(currentSummary);
    }));
    document.getElementById('exportConsolidatedBtn')?.addEventListener('click', () => downloadExport('/api/dashboard/export/consolidated', { items: currentSummary.consolidated }, 'consolidated_table_export.xlsx'));
    document.getElementById('exportVisibleUsersBtn')?.addEventListener('click', () => downloadExport('/api/dashboard/export/detail', { rows: enrichRowsForExport(currentSummary.rows), format: 'xlsx', fileBaseName: 'visible_users', lang: currentLang }, 'visible_users.xlsx'));
    document.getElementById('exportInstituteViewBtn')?.addEventListener('click', () => {
      const selected = getSelectedInstituteSummary(currentSummary);
      if (!selected) return;
      downloadExport('/api/dashboard/export/institute-view', { rows: enrichRowsForExport(currentSummary.rows), selected, totals: currentSummary.totals }, 'institute_view_export.xlsx');
    });
    document.getElementById('exportFollowUpListBtn')?.addEventListener('click', () => downloadExport('/api/dashboard/export/detail', { rows: enrichRowsForExport(getFollowUpRows(currentSummary.rows)), format: 'xlsx', fileBaseName: 'follow_up_list', lang: currentLang }, 'follow_up_list.xlsx'));
    document.getElementById('exportFollowUpTableBtn')?.addEventListener('click', () => downloadExport('/api/dashboard/export/detail', { rows: enrichRowsForExport(currentSummary.followUpRows || []), format: 'xlsx', fileBaseName: 'follow_up_list', lang: currentLang }, 'follow_up_list.xlsx'));
  }

  function chartLabels() {
    return currentLang === 'fr'
      ? { activation: ['Activés', 'Inactifs'], invitation: ['≤30 jours', '31–90 jours', '>90 jours', 'Jamais envoyée'], domain: ['Institutionnel', 'Personnel', 'Inconnu / autre'], topA: 'Top instituts les plus actifs (%)', topL: 'Top instituts les moins actifs (%)', actTitle: 'Activation des comptes', invTitle: 'Vieillissement des invitations non activées', domTitle: 'Répartition par type de domaine email', actRate: "Taux d'activation", inactive: 'Inactifs', activeUsersTitle: 'Top 10 utilisateurs actifs', activeUsersMetric: "Score d'engagement", followUpTitle: 'Top 10 utilisateurs à relancer', followUpMetric: 'Indice de priorité', invitationStatusTitle: "Répartition par statut d'invitation", followUpProblem: 'Problème réel', followUpNeverLogged: 'Jamais connecté', followUpLongInactive: 'Inactif >180 jours', followUpOther: 'À surveiller', noData: 'Aucune donnée' }
      : { activation: ['Active', 'Inactive'], invitation: ['≤30 days', '31–90 days', '>90 days', 'Never sent'], domain: ['Institutional', 'Personal', 'Unknown / other'], topA: 'Top most active institutes (%)', topL: 'Top least active institutes (%)', actTitle: 'Account activation', invTitle: 'Age of non-activated invitations', domTitle: 'Breakdown by email domain type', actRate: 'Activation rate', inactive: 'Inactive', activeUsersTitle: 'Top 10 active users', activeUsersMetric: 'Engagement score', followUpTitle: 'Top 10 users needing follow-up', followUpMetric: 'Priority index', invitationStatusTitle: 'Breakdown by invitation status', followUpProblem: 'Real problem', followUpNeverLogged: 'Never logged in', followUpLongInactive: 'Inactive >180 days', followUpOther: 'To monitor', noData: 'No data' };
  }

  function getUserDisplayName(row) {
    const fullName = [row.firstName, row.lastName].filter(Boolean).join(' ').trim();
    return fullName || row.email || 'Unknown';
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
    if (row.invitationAge !== null && row.invitationAge !== undefined) score += Math.min(row.invitationAge, 365);
    if (row.loginAge !== null && row.loginAge !== undefined) score += Math.min(row.loginAge, 365);
    if (row.score !== null && row.score !== undefined) score += Math.max(0, 100 - row.score);
    return score;
  }

  function getFollowUpReason(row, labels) {
    if (row.realProblem) return labels.followUpProblem;
    if (row.neverLogged) return labels.followUpNeverLogged;
    if (row.longInactive) return labels.followUpLongInactive;
    return labels.followUpOther;
  }

  function createCharts(summary) {
    destroyCharts();
    const totals = summary.totals;
    const labels = chartLabels();
    const selectedInstitution = filterState.institution !== 'all' ? filterState.institution : null;
    charts.activation = new Chart(document.getElementById('activationChart'), { type: 'doughnut', data: { labels: labels.activation, datasets: [{ data: [totals.active, totals.inactive], backgroundColor: ['#213c83', '#ff7940'], borderWidth: 0 }] }, options: { maintainAspectRatio: false, onClick: (_event, elements) => { if (!elements.length) return; openDetailModal(elements[0].index === 0 ? 'active' : 'inactive', labels.activation[elements[0].index]); }, plugins: { title: { display: true, text: labels.actTitle }, legend: { position: 'bottom' } } } });
    charts.invitation = new Chart(document.getElementById('invitationChart'), { type: 'bar', data: { labels: labels.invitation, datasets: [{ label: labels.inactive, data: [totals.invitedRecent, totals.invitedAging, totals.invitedOld, totals.neverInvited], backgroundColor: ['#213c83', '#6d85c7', '#ff7940', '#c93636'] }] }, options: { maintainAspectRatio: false, plugins: { title: { display: true, text: labels.invTitle }, legend: { display: false } }, scales: { y: { beginAtZero: true } } } });

    if (selectedInstitution) {
      const activeUsers = summary.rows
        .filter((row) => row.active)
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
        .filter((row) => !row.technical && (row.realProblem || row.neverLogged || row.longInactive || (!row.active && row.invitationBucket !== '≤30 jours' && row.invitationBucket !== 'N/A')))
        .slice()
        .sort((a, b) => getFollowUpPriority(b) - getFollowUpPriority(a))
        .slice(0, 10);

      charts.topActiveInstitutes = new Chart(document.getElementById('topActiveInstitutesChart'), {
        type: 'bar',
        data: {
          labels: activeUsers.length ? activeUsers.map(getUserShortLabel) : [labels.noData],
          datasets: [{ label: labels.activeUsersMetric, data: activeUsers.length ? activeUsers.map((row) => row.score ?? 0) : [0], backgroundColor: '#213c83' }]
        },
        options: {
          indexAxis: 'y',
          maintainAspectRatio: false,
          onClick: (_event, elements) => {
            if (!elements.length || !activeUsers.length) return;
            const row = activeUsers[elements[0].index];
            openRowsDetail([row], getUserDisplayName(row), tUI('rowsSegment', 1));
          },
          plugins: { title: { display: true, text: `${labels.activeUsersTitle} - ${selectedInstitution}` }, legend: { display: false } },
          scales: { x: { beginAtZero: true } }
        }
      });

      charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), {
        type: 'bar',
        data: {
          labels: followUpUsers.length ? followUpUsers.map(getUserShortLabel) : [labels.noData],
          datasets: [{ label: labels.followUpMetric, data: followUpUsers.length ? followUpUsers.map((row) => getFollowUpPriority(row)) : [0], backgroundColor: '#ff7940' }]
        },
        options: {
          indexAxis: 'y',
          maintainAspectRatio: false,
          onClick: (_event, elements) => {
            if (!elements.length || !followUpUsers.length) return;
            const row = followUpUsers[elements[0].index];
            openRowsDetail([row], `${getUserDisplayName(row)} - ${getFollowUpReason(row, labels)}`, tUI('rowsSegment', 1));
          },
          plugins: { title: { display: true, text: `${labels.followUpTitle} - ${selectedInstitution}` }, legend: { display: false } },
          scales: { x: { beginAtZero: true } }
        }
      });

      const invitationStatusLabels = labels.invitation;
      const invitationStatusRows = [
        summary.rows.filter((row) => !row.active && row.invitationBucket === '≤30 jours'),
        summary.rows.filter((row) => !row.active && row.invitationBucket === '31–90 jours'),
        summary.rows.filter((row) => !row.active && row.invitationBucket === '>90 jours'),
        summary.rows.filter((row) => !row.active && row.invitationBucket === 'Jamais envoyée')
      ];

      charts.domainType = new Chart(document.getElementById('domainTypeChart'), {
        type: 'pie',
        data: {
          labels: invitationStatusLabels,
          datasets: [{ data: invitationStatusRows.map((rows) => rows.length), backgroundColor: ['#213c83', '#6d85c7', '#ff7940', '#c93636'], borderWidth: 0 }]
        },
        options: {
          maintainAspectRatio: false,
          onClick: (_event, elements) => {
            if (!elements.length) return;
            const index = elements[0].index;
            const rows = invitationStatusRows[index];
            openRowsDetail(rows, `${labels.invitationStatusTitle} - ${invitationStatusLabels[index]}`, tUI('rowsSegment', rows.length));
          },
          plugins: { title: { display: true, text: `${labels.invitationStatusTitle} - ${selectedInstitution}` }, legend: { position: 'bottom' } }
        }
      });
      return;
    }

    const instituteRateBase = summary.institutes.filter((item) => item.totalUsers > 0 && item.activationRate !== null);
    const topActive = instituteRateBase.slice().sort((a, b) => (b.activationRate || 0) - (a.activationRate || 0)).slice(0, 10);
    const topLeast = instituteRateBase.slice().sort((a, b) => (a.activationRate || 0) - (b.activationRate || 0)).slice(0, 10);
    charts.topActiveInstitutes = new Chart(document.getElementById('topActiveInstitutesChart'), { type: 'bar', data: { labels: topActive.map((item) => item.institution.length > 30 ? `${item.institution.slice(0, 30)}…` : item.institution), datasets: [{ label: labels.actRate, data: topActive.map((item) => Number((item.activationRate || 0).toFixed(1))), backgroundColor: '#213c83' }] }, options: { indexAxis: 'y', maintainAspectRatio: false, onClick: (_event, elements) => { if (elements.length) openInstitutionDetail(topActive[elements[0].index].institution); }, plugins: { title: { display: true, text: labels.topA }, legend: { display: false } }, scales: { x: { beginAtZero: true, max: 100, ticks: { callback: (value) => `${value} %` } } } } });
    charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), { type: 'bar', data: { labels: topLeast.map((item) => item.institution.length > 30 ? `${item.institution.slice(0, 30)}…` : item.institution), datasets: [{ label: labels.actRate, data: topLeast.map((item) => Number((item.activationRate || 0).toFixed(1))), backgroundColor: '#ff7940' }] }, options: { indexAxis: 'y', maintainAspectRatio: false, onClick: (_event, elements) => { if (elements.length) openInstitutionDetail(topLeast[elements[0].index].institution); }, plugins: { title: { display: true, text: labels.topL }, legend: { display: false } }, scales: { x: { beginAtZero: true, max: 100, ticks: { callback: (value) => `${value} %` } } } } });
    const domainTypes = ['Institutionnel', 'Personnel', 'Inconnu / autre'].map((type) => summary.domains.filter((item) => item.type === type).reduce((acc, item) => acc + item.totalUsers, 0));
    charts.domainType = new Chart(document.getElementById('domainTypeChart'), { type: 'pie', data: { labels: labels.domain, datasets: [{ data: domainTypes, backgroundColor: ['#213c83', '#ff7940', '#94a3b8'], borderWidth: 0 }] }, options: { maintainAspectRatio: false, plugins: { title: { display: true, text: labels.domTitle }, legend: { position: 'bottom' } } } });
  }

  // Language switching and controller lifecycle.
  function setLanguage(lang) {
    currentLang = lang === 'fr' ? 'fr' : 'en';
    updateStaticTexts();
    if (baseRows.length) applyFiltersAndRender();
    else renderEmptyState();
    rerenderCurrentDetail();
  }

  const onEscape = (event) => {
    if (event.key === 'Escape' && detailModalEl.classList.contains('open')) closeDetailModal();
  };

  selectFileBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (event) => { handleFileSelect(event); });
  clearFileBtn.addEventListener('click', clearLoadedFile);
  detailModalCloseEl.addEventListener('click', closeDetailModal);
  detailModalEl.addEventListener('click', (event) => { if (event.target === detailModalEl) closeDetailModal(); });
  document.addEventListener('keydown', onEscape);
  document.querySelectorAll('.lang-btn[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

  updateStaticTexts();
  renderEmptyState();

  return {
    destroy() {
      destroyCharts();
      document.removeEventListener('keydown', onEscape);
    }
  };
}
