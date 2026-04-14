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

    let currentLang = 'en';
    let baseRows = [];
    let currentSummary = null;
    let currentFileMeta = null;
    let filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
    let currentDetailRows = [];
    let currentDetailTitle = '';
    let tableSortState = { institutes: { key: 'totalUsers', dir: 'desc' }, domains: { key: 'totalUsers', dir: 'desc' }, consolidated: { key: 'realProblems', dir: 'desc' } };

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
        heroInstruction: 'From PNLink, export the most recent file via “<a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">Export history > Export all users</a>” making sure all fields are selected.',
        toolbarImport: 'Local Excel import',
        toolbarPilotage: 'Activation & adoption tracking',
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
        focusCoverage: 'Coverage rate',
        focusProblems: 'Real problems',
        focusActivationSub: 'Activés / total filtré',
        focusCoverageSub: 'Moyenne des couvertures institut filtrées',
        focusProblemsSub: 'Comptes à traiter maintenant',
        priority: 'Priorité',
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
        rulesNote: "Règles : activé = date d’activation renseignée ; inactif = pas de date d’activation ; vrai problème = inactif avec invitation >90 jours, hors compte technique. Le mapping institut utilise d’abord l’affiliation, puis l’organisation déclarée, puis le domaine email. Les valeurs manquantes ne sont jamais inventées."
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
        focusCoverage: 'Coverage rate',
        focusProblems: 'Real problems',
        focusActivationSub: 'Active / filtered total',
        focusCoverageSub: 'Average filtered institute coverage',
        focusProblemsSub: 'Accounts to handle now',
        priority: 'Priority',
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
        rulesNote: "Rules: active = activation date filled in; inactive = no activation date; real problem = inactive with invitation >90 days, excluding technical accounts. Institute mapping uses affiliation first, then declared organization, then email domain. Missing values are never invented."
      }
    };

    function tUI(key, ...args) {
      const pack = UI_TEXT[currentLang] || UI_TEXT.en;
      const value = pack[key];
      return typeof value === 'function' ? value(...args) : value;
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
      return entry ? (entry[currentLang] || entry.en || value) : value;
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
        detailModalClose: langPack.close,
        clearFileBtn: langPack.clear,
        selectFileBtn: langPack.chooseFile,
        fileNameLabel: fileInput.files && fileInput.files[0] ? fileInput.files[0].name : langPack.noFile
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

    function getDomain(email) {
      if (!email) return '';
      const match = String(email).toLowerCase().trim().match(/@([^@]+)$/);
      return match ? match[1] : '';
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

    function escapeHtml(text) {
      return String(text ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
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
      if ((item.activationRate || 0) < 55 || (item.organizationalCoverage || 0) < 20) return tUI('priorityWatch');
      return tUI('priorityGood');
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
            <span class="inline-note">${escapeHtml(tUI('estimatedCoverage'))}: <strong>${escapeHtml(formatPct(selected.coverageRate))}</strong></span>
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
            <span class="inline-note">${escapeHtml(tUI('estimatedCoverage'))}: <strong>${escapeHtml(formatPct(selected.coverageRate))}</strong></span>
          </div>
        </div>
      `;
    }

    function renderEmptyState() {
      dashboardEl.innerHTML = `<div class="empty" id="initialEmpty">${escapeHtml(STATIC_TEXT[currentLang].initialEmpty)}</div>`;
    }

    function clearLoadedFile() {
      fileInput.value = '';
      fileNameLabel.textContent = STATIC_TEXT[currentLang].noFile;
      baseRows = [];
      currentSummary = null;
      currentFileMeta = null;
      filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
      destroyCharts();
      closeDetailModal();
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
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array', cellDates: true });
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
        processWorkbook(file.name, rows, firstSheetName);
      };
      reader.readAsArrayBuffer(file);
    }

    function processWorkbook(fileName, rows, sheetName) {
      destroyCharts();
      if (!rows.length) {
        dashboardEl.innerHTML = `<div class="empty">${escapeHtml(tUI('noUsableRows'))}</div>`;
        return;
      }
      const columns = Object.keys(rows[0]);
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

      baseRows = rows.map(row => {
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
        return {
          raw: row, firstName, lastName, email, domain,
          domainType: classifyDomain(domain),
          invitationDate, activationDate, lastLoginDate, creationDate, invitationAge, loginAge,
          company, role, affiliation, country, score, scoreBand,
          active, technical, duplicateEmail, emailValid, invitationBucket, realProblem,
          mappedInstitution: mapped.name, mappingConfidence: mapped.confidence, mappingSource: mapped.source, mappedRef: mapped.ref,
          hasAffiliation: !!affiliation, neverLogged: active && !lastLoginDate, longInactive: active && loginAge !== null && loginAge > 180,
          lastLoginText: lastLoginDate ? lastLoginDate.toLocaleDateString('fr-FR') : '',
          sheetName, fields
        };
      });

      filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
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
        institution: ref.name, globalStaff: ref.global, scientificStaff: ref.scientific, supportStaff: ref.support,
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
        const coverageRate = i.globalStaff ? (i.totalUsers / i.globalStaff) * 100 : null;
        const activationRate = i.totalUsers ? (i.activeUsers / i.totalUsers) * 100 : null;
        const affiliationRate = i.totalUsers ? (i.affiliationCount / i.totalUsers) * 100 : null;
        let status = 'Données incomplètes';
        if (coverageRate !== null) {
          if (coverageRate >= 60 && activationRate >= 60) status = 'Bon';
          else if (coverageRate >= 20 || activationRate >= 40) status = 'Moyen';
          else status = 'Faible';
        }
        if (coverageRate !== null && coverageRate > 100) status = 'À vérifier';
        let action = 'Suivi normal';
        if (i.realProblems > 0) action = 'Relance ciblée >90 jours';
        else if (i.inactiveUsers >= 20 && (activationRate || 0) < 40) action = 'Campagne d’activation prioritaire';
        else if ((affiliationRate || 0) < 20) action = 'Améliorer la collecte d’affiliation';
        return { ...i, coverageRate, activationRate, affiliationRate, status, action, mappingLevel: i.confidenceStrong >= i.confidenceMedium ? 'Fort/Moyen' : 'Moyen' };
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

      const avgCoverage = institutes.length ? institutes.filter(i => i.coverageRate !== null).reduce((s,i)=>s+i.coverageRate,0) / Math.max(1, institutes.filter(i=>i.coverageRate!==null).length) : null;

      const consolidated = institutes.map(i => ({
        segment: i.institution, totalUsers: i.totalUsers, activeUsers: i.activeUsers, inactiveUsers: i.inactiveUsers, activationRate: i.activationRate,
        invitedRecent: i.invitedRecent, invitedAging: i.invitedAging, invitedOld: i.invitedOld, neverInvited: i.neverInvited, realProblems: i.realProblems,
        organizationalCoverage: i.coverageRate, status: i.status, action: i.action, priority: priorityLabel(i)
      }));

      return {
        fileMeta: currentFileMeta,
        rows, totals: { total, active, inactive, invitedRecent, invitedAging, invitedOld, neverInvited, technical, realProblems, activationRate, domainsDetected, institutesDetected, countriesDetected, affiliationMissing, personalDomains, neverLogged, longInactive, avgCoverage },
        institutes, domains, recommendations, alerts, keyMessages, consolidated
      };
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
        <div class="summary-grid">
          <div class="card">
            <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('keyMessagesTitle'))}</h2><span>${formatInt(t.total)} rows</span></div>
            <div class="key-messages">
              ${summary.keyMessages.map(m => `<div class="key-message"><strong>${escapeHtml(m.title)}</strong><div>${escapeHtml(m.text)}</div></div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('lastUpdateTitle'))}</h2><span>${escapeHtml(currentFileMeta?.sheetName || '—')}</span></div>
            <div class="last-update-grid">
              <div class="card"><div class="meta-label">${escapeHtml(tUI('importedFile'))}</div><div class="small"><strong>${escapeHtml(currentFileMeta?.fileName || tUI('notAvailable'))}</strong></div></div>
              <div class="card"><div class="meta-label">${escapeHtml(tUI('importDate'))}</div><div class="small"><strong>${escapeHtml(formatDateTime(currentFileMeta?.importedAt))}</strong></div></div>
              <div class="card"><div class="meta-label">${escapeHtml(tUI('fileModified'))}</div><div class="small"><strong>${escapeHtml(formatDateTime(currentFileMeta?.lastModified))}</strong></div></div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:18px;">
          <div class="section-title" style="margin-top:0;"><h2>${escapeHtml(tUI('globalFiltersTitle'))}</h2><span>${escapeHtml(tUI('filterHint'))}</span></div>
          <div class="global-filters">
            <select id="globalFilterInstitution">${renderSelectOptions(getInstitutionOptions(), filterState.institution, tUI('filterInstitution'))}</select>
            <select id="globalFilterCountry">${renderSelectOptions(getCountryOptions(), filterState.country, tUI('filterCountry'))}</select>
            <select id="globalFilterDomainType">${renderSelectOptions(getDomainTypeOptions(), localizeDomainType(filterState.domainType), tUI('filterDomainType'))}</select>
            <select id="globalFilterStatus">${renderSelectOptions(getStatusOptions(), filterState.status, tUI('filterStatus'))}</select>
          </div>
          ${filterState.institution === 'all' ? renderActiveFilterBadges() : ''}
          <div class="filters-actions">
            <button type="button" id="resetFiltersBtn" class="ghost-btn">${escapeHtml(tUI('resetFilters'))}</button>
          </div>
        </div>

        ${instituteBanner}
        ${segmentExportBar}

        <div class="kpi-grid focus-kpis">
          <div class="card focus-kpi activation"><div class="kpi-label">${escapeHtml(tUI('focusActivation'))}</div><div class="kpi-value">${formatPct(t.activationRate)}</div><div class="kpi-sub">${escapeHtml(tUI('focusActivationSub'))}</div></div>
          <div class="card focus-kpi coverage"><div class="kpi-label">${escapeHtml(tUI('focusCoverage'))}</div><div class="kpi-value">${formatPct(t.avgCoverage)}</div><div class="kpi-sub">${escapeHtml(tUI('focusCoverageSub'))}</div></div>
          <div class="card focus-kpi problems kpi-card-clickable" tabindex="0" data-filter="realProblems" data-label="Real problems"><div class="kpi-label">${escapeHtml(tUI('focusProblems'))}</div><div class="kpi-value">${formatInt(t.realProblems)}</div><div class="kpi-sub">${escapeHtml(tUI('focusProblemsSub'))}</div><div class="kpi-hint">${escapeHtml(tUI('clickToViewPeople'))}</div></div>
        </div>

        <div class="section-title"><h2>Header</h2><span>Reading the real structure of the file</span></div>
        <div class="meta-grid">
          <div class="card"><div class="meta-label">Analyzed file</div><div class="meta-value">${escapeHtml(currentFileMeta?.fileName || '—')}</div></div>
          <div class="card"><div class="meta-label">Sheet read</div><div class="meta-value">${escapeHtml(currentFileMeta?.sheetName || '—')}</div></div>
          <div class="card"><div class="meta-label">Institutes detected</div><div class="meta-value">${formatInt(t.institutesDetected)}</div></div>
          <div class="card"><div class="meta-label">Email domains detected</div><div class="meta-value">${formatInt(t.domainsDetected)}</div></div>
        </div>

        <div class="section-title"><h2>Main KPIs</h2><span>Rules automatically applied from the Excel file</span></div>
        <div class="kpi-grid">
          ${renderMainKpis(t)}
        </div>

        <div class="section-title"><h2>Management reading</h2><span>Simple alerts for decision-makers</span></div>
        <div class="alerts">${summary.alerts.map(a => `<div class="alert ${a.level}"><div class="alert-title">${escapeHtml(a.title)}</div><div>${escapeHtml(a.text)}</div></div>`).join('')}</div>

        <div class="section-title"><h2>Charts</h2><span>Activation, invitations and most / least active institutes</span></div>
        <div class="chart-grid">
          <div class="card"><div class="chart-box"><canvas id="activationChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="invitationChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="topActiveInstitutesChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="topLeastActiveInstitutesChart"></canvas></div></div>
          <div class="card"><div class="chart-box"><canvas id="domainTypeChart"></canvas></div></div>
        </div>

        <div class="section-title"><h2>Engagement and data quality</h2><span>Login, score, country and roles</span></div>
        <div class="engagement-grid">
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="neverLogged" data-label="Users who never logged in"><div class="meta-label">Users who never logged in</div><div class="meta-value">${formatInt(t.neverLogged)}</div><div class="small muted">Activated without a last login date</div></div>
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="longInactive" data-label="Inactive for >180 days"><div class="meta-label">Inactive for &gt;180 days</div><div class="meta-value">${formatInt(t.longInactive)}</div><div class="small muted">Based on Last log in date</div></div>
          <div class="card engagement-clickable" tabindex="0" data-engagement-filter="affiliationMissing" data-label="Missing affiliations"><div class="meta-label">Missing affiliations</div><div class="meta-value">${formatInt(t.affiliationMissing)}</div><div class="small muted">Click to view people and emails</div></div>
        </div>

        <div class="section-title"><h2>Analysis by institute</h2><span>Coverage, activation and recommended action</span></div>
        <div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderInstituteTable(summary.institutes)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Analysis by email domain</h2><span>Detection of personal domains and inactive pockets</span></div>
        <div class="card table-card"><div class="table-toolbar"></div><div class="table-wrap">${renderDomainTable(summary.domains)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Decision support</h2><span>Recommendations linked to measurable findings</span></div>
        <div class="card recommendations">${summary.recommendations.map(r => `<div class="rec"><strong>${escapeHtml(r.title)}</strong><div>${escapeHtml(r.text)}</div></div>`).join('')}</div>

        <div class="section-title"><h2>Final consolidated table</h2><span>Summary view for monitoring</span></div>
        <div class="card table-card"><div class="table-toolbar"><button type="button" id="exportConsolidatedBtn" class="export-btn">${escapeHtml(tUI('exportConsolidated'))}</button></div><div class="table-wrap">${renderConsolidatedTable(summary.consolidated)}</div><div class="table-bottom-toolbar"></div></div>

        <div class="section-title"><h2>Detected columns and rules</h2><span>Transparency about the fields actually used</span></div>
        <div class="card">
          <div class="small"><strong>Fields used:</strong> ${baseRows[0] ? Object.entries(baseRows[0].fields).map(([k,v]) => `${escapeHtml(k)} → ${escapeHtml(v || 'not found')}`).join(' | ') : '—'}</div>
          <div class="footer-note">${escapeHtml(tUI('rulesNote'))}</div>
        </div>
      `;

      bindGlobalFilterEvents();
      bindDashboardInteractions();
      createCharts(summary);
      if (currentLang === 'fr') translateUiToFrench(dashboardEl);
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
        ['Coverage, activation and recommended action','Couverture, activation et action recommandée'], ['Analysis by email domain','Analyse par domaine email'],
        ['Detection of personal domains and inactive pockets','Détection des domaines personnels et des poches de non-activation'], ['Decision support','Aide à la décision'],
        ['Recommendations linked to measurable findings','Recommandations liées à des constats mesurables'], ['Final consolidated table','Tableau consolidé final'],
        ['Summary view for monitoring','Vue synthèse pour pilotage'], ['Detected columns and rules','Colonnes détectées et règles'], ['Fields used:','Champs utilisés :'],
        ['Good','Bon'], ['Watch','À surveiller'], ['Priority','Priorité'], ['Institution','Institution'], ['Domain','Domaine'], ['Type','Type'],
        ['Status','Statut'], ['Action','Action'], ['Coverage rate','Taux couverture'], ['Users — ','Utilisateurs — ']
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
      return [
        `<option value="all">${escapeHtml(label)} — ${escapeHtml(tUI('all'))}</option>`,
        ...options.map(opt => {
          const display = opt === 'active' ? tUI('active') : opt === 'inactive' ? tUI('inactive') : opt;
          return `<option value="${escapeHtml(opt)}"${opt === selectedValue ? ' selected' : ''}>${escapeHtml(display)}</option>`;
        })
      ].join('');
    }

    function getInstitutionOptions() { return [...new Set(baseRows.map(r => r.mappedInstitution).filter(v => v && v !== 'Non rattaché'))].sort(); }
    function getCountryOptions() { return [...new Set(baseRows.map(r => r.country).filter(Boolean))].sort(); }
    function getDomainTypeOptions() {
      const map = { 'Institutionnel': tUI('institutional'), 'Personnel': tUI('personal'), 'Inconnu / autre': tUI('unknownOther') };
      return [...new Set(baseRows.map(r => map[r.domainType] || r.domainType))];
    }
    function getStatusOptions() { return ['active', 'inactive']; }

    function bindGlobalFilterEvents() {
      const inst = document.getElementById('globalFilterInstitution');
      const country = document.getElementById('globalFilterCountry');
      const domainType = document.getElementById('globalFilterDomainType');
      const status = document.getElementById('globalFilterStatus');
      if (!inst) return;
      inst.addEventListener('change', e => { filterState.institution = e.target.value; applyFiltersAndRender(); });
      country.addEventListener('change', e => { filterState.country = e.target.value; applyFiltersAndRender(); });
      domainType.addEventListener('change', e => {
        const reverse = { [tUI('institutional')]: 'Institutionnel', [tUI('personal')]: 'Personnel', [tUI('unknownOther')]: 'Inconnu / autre' };
        filterState.domainType = e.target.value === 'all' ? 'all' : (reverse[e.target.value] || e.target.value);
        applyFiltersAndRender();
      });
      status.addEventListener('change', e => {
        const value = e.target.value;
        filterState.status = value === 'all' ? 'all' : (value === tUI('active').toLowerCase() ? 'active' : 'inactive');
        applyFiltersAndRender();
      });
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) resetBtn.addEventListener('click', () => {
        filterState = { institution: 'all', country: 'all', domainType: 'all', status: 'all' };
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
      const by = {
        all: r => true,
        active: r => r.active,
        inactive: r => !r.active,
        realProblems: r => r.realProblem,
        invitedRecent: r => !r.active && r.invitationBucket === '≤30 jours',
        invitedAging: r => !r.active && r.invitationBucket === '31–90 jours',
        invitedOld: r => !r.active && r.invitationBucket === '>90 jours',
        neverInvited: r => !r.active && r.invitationBucket === 'Jamais envoyée',
        technical: r => r.technical
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
      bindDetailControls(rows);
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
        estimated_coverage: selected.coverageRate !== null ? Number((selected.coverageRate || 0).toFixed(1)) : '',
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
    }

    function renderInstituteTable(items) {
      const sorted = sortItems(items, tableSortState.institutes);
      return `<table>
        <thead><tr>${[
          sortableTh('institutes','institution','Institution'),
          sortableTh('institutes','globalStaff','Global staff'),
          sortableTh('institutes','scientificStaff','Scientific'),
          sortableTh('institutes','supportStaff','Support'),
          sortableTh('institutes','totalUsers','PNLink users'),
          sortableTh('institutes','activeUsers','Activated'),
          sortableTh('institutes','inactiveUsers','Inactive'),
          sortableTh('institutes','activationRate','Activation rate'),
          sortableTh('institutes','coverageRate','% coverage'),
          sortableTh('institutes','affiliationRate','% affiliation'),
          sortableTh('institutes','realProblems','Real problems'),
          sortableTh('institutes','status','Status'),
          sortableTh('institutes','action','Action')
        ].join('')}</tr></thead>
        <tbody>
          ${sorted.map(i => `<tr>
            <td><strong class="stat-link" data-institution="${escapeHtml(i.institution)}">${escapeHtml(i.institution)}</strong><div class="small muted">Confidence: ${escapeHtml(localizeBusinessText('mappingConfidence', i.mappingLevel))}</div></td>
            <td>${i.globalStaff ?? '—'}</td><td>${i.scientificStaff ?? '—'}</td><td>${i.supportStaff ?? '—'}</td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.institution)}">${formatInt(i.totalUsers)}</span></td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.institution)}">${formatInt(i.activeUsers)}</span></td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.institution)}">${formatInt(i.inactiveUsers)}</span></td>
            <td>${formatPct(i.activationRate)}</td><td>${formatPct(i.coverageRate)}</td><td>${formatPct(i.affiliationRate)}</td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.institution)}">${formatInt(i.realProblems)}</span></td>
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
          sortableTh('consolidated','organizationalCoverage','Coverage rate'),
          sortableTh('consolidated','status','Status'),
          sortableTh('consolidated','priority','Priority'),
          sortableTh('consolidated','action','Action')
        ].join('')}</tr></thead>
        <tbody>
          ${sorted.map(i => `<tr>
            <td><strong class="stat-link" data-institution="${escapeHtml(i.segment)}">${escapeHtml(i.segment)}</strong></td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.segment)}">${formatInt(i.totalUsers)}</span></td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.segment)}">${formatInt(i.activeUsers)}</span></td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.segment)}">${formatInt(i.inactiveUsers)}</span></td>
            <td>${formatPct(i.activationRate)}</td><td>${formatInt(i.invitedRecent)}</td><td>${formatInt(i.invitedAging)}</td><td>${formatInt(i.invitedOld)}</td><td>${formatInt(i.neverInvited)}</td>
            <td><span class="stat-link" data-institution="${escapeHtml(i.segment)}">${formatInt(i.realProblems)}</span></td>
            <td>${formatPct(i.organizationalCoverage)}</td><td>${renderStatusBadge(i.status)}</td><td>${renderPriorityBadge(i.priority)}</td><td>${escapeHtml(localizeBusinessText('action', i.action))}</td>
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
        coverage_rate: i.organizationalCoverage,
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
      const t = summary.totals;
      const l = chartLabels();
      const selectedInstitution = filterState.institution !== 'all' ? filterState.institution : null;
      charts.activation = new Chart(document.getElementById('activationChart'), {
        type: 'doughnut',
        data: { labels: l.activation, datasets: [{ data: [t.active, t.inactive], backgroundColor: ['#213c83', '#ff7940'], borderWidth: 0 }] },
        options: { maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; openDetailModal(els[0].index===0?'active':'inactive', l.activation[els[0].index]); }, plugins:{ title:{display:true,text:l.actTitle}, legend:{position:'bottom'} } }
      });

      charts.invitation = new Chart(document.getElementById('invitationChart'), {
        type: 'bar',
        data: { labels: l.invitation, datasets: [{ label: l.inactive, data: [t.invitedRecent,t.invitedAging,t.invitedOld,t.neverInvited], backgroundColor:['#213c83','#6d85c7','#ff7940','#c93636'] }] },
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
            datasets:[{ label:l.activeUsersMetric, data: activeUsers.length ? activeUsers.map(r => r.score ?? 0) : [0], backgroundColor:'#213c83' }]
          },
          options:{
            indexAxis:'y',
            maintainAspectRatio:false,
            onClick:(e,els)=>{ if(!els.length || !activeUsers.length) return; const row = activeUsers[els[0].index]; openRowsDetail([row], getUserDisplayName(row), tUI('rowsSegment', 1)); },
            plugins:{ title:{display:true,text:`${l.activeUsersTitle} — ${selectedInstitution}`}, legend:{display:false} },
            scales:{ x:{ beginAtZero:true } }
          }
        });

        charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), {
          type:'bar',
          data:{
            labels: followUpUsers.length ? followUpUsers.map(getUserShortLabel) : [l.noData],
            datasets:[{ label:l.followUpMetric, data: followUpUsers.length ? followUpUsers.map(r => getFollowUpPriority(r)) : [0], backgroundColor:'#ff7940' }]
          },
          options:{
            indexAxis:'y',
            maintainAspectRatio:false,
            onClick:(e,els)=>{ if(!els.length || !followUpUsers.length) return; const row = followUpUsers[els[0].index]; openRowsDetail([row], `${getUserDisplayName(row)} — ${getFollowUpReason(row, l)}`, tUI('rowsSegment', 1)); },
            plugins:{ title:{display:true,text:`${l.followUpTitle} — ${selectedInstitution}`}, legend:{display:false} },
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
          data:{ labels:invitationStatusLabels, datasets:[{ data: invitationStatusRows.map(rows => rows.length), backgroundColor:['#213c83','#6d85c7','#ff7940','#c93636'], borderWidth:0 }]},
          options:{ maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; const idx=els[0].index; const rows = invitationStatusRows[idx]; openRowsDetail(rows, `${l.invitationStatusTitle} — ${invitationStatusLabels[idx]}`, tUI('rowsSegment', rows.length)); }, plugins:{ title:{display:true,text:`${l.invitationStatusTitle} — ${selectedInstitution}`}, legend:{position:'bottom'} } }
        });
        return;
      }

      const instituteRateBase = summary.institutes.filter(i => i.totalUsers > 0 && i.activationRate !== null);
      const topActive = instituteRateBase.slice().sort((a,b)=>(b.activationRate||0)-(a.activationRate||0)).slice(0,10);
      const topLeast = instituteRateBase.slice().sort((a,b)=>(a.activationRate||0)-(b.activationRate||0)).slice(0,10);

      charts.topActiveInstitutes = new Chart(document.getElementById('topActiveInstitutesChart'), {
        type:'bar',
        data:{ labels: topActive.map(i => i.institution.length>30 ? i.institution.slice(0,30)+'…' : i.institution), datasets:[{ label:l.actRate, data: topActive.map(i => Number((i.activationRate||0).toFixed(1))), backgroundColor:'#213c83' }]},
        options:{ indexAxis:'y', maintainAspectRatio:false, onClick:(e,els)=>{ if(els.length) openInstitutionDetail(topActive[els[0].index].institution); }, plugins:{ title:{display:true,text:l.topA}, legend:{display:false} }, scales:{ x:{ beginAtZero:true, max:100, ticks:{ callback:v=>v+' %' } } } }
      });

      charts.topLeastActiveInstitutes = new Chart(document.getElementById('topLeastActiveInstitutesChart'), {
        type:'bar',
        data:{ labels: topLeast.map(i => i.institution.length>30 ? i.institution.slice(0,30)+'…' : i.institution), datasets:[{ label:l.actRate, data: topLeast.map(i => Number((i.activationRate||0).toFixed(1))), backgroundColor:'#ff7940' }]},
        options:{ indexAxis:'y', maintainAspectRatio:false, onClick:(e,els)=>{ if(els.length) openInstitutionDetail(topLeast[els[0].index].institution); }, plugins:{ title:{display:true,text:l.topL}, legend:{display:false} }, scales:{ x:{ beginAtZero:true, max:100, ticks:{ callback:v=>v+' %' } } } }
      });

      const domainTypes = ['Institutionnel', 'Personnel', 'Inconnu / autre'].map(type => summary.domains.filter(d => d.type === type).reduce((acc,cur) => acc + cur.totalUsers, 0));
      charts.domainType = new Chart(document.getElementById('domainTypeChart'), {
        type:'pie',
        data:{ labels:l.domain, datasets:[{ data: domainTypes, backgroundColor:['#213c83','#ff7940','#94a3b8'], borderWidth:0 }]},
        options:{ maintainAspectRatio:false, onClick:(e,els)=>{ if(!els.length) return; const idx=els[0].index; const source = ['Institutionnel','Personnel','Inconnu / autre'][idx]; const rows = currentSummary.rows.filter(r => r.domainType === source); openRowsDetail(rows, tUI('domainBreakdownTitle', l.domain[idx]), tUI('rowsDomain', rows.length)); }, plugins:{ title:{display:true,text:l.domTitle}, legend:{position:'bottom'} } }
      });
    }
  
