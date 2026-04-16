/**
 * Developed by Haja Faniry RAZAFIMAHENINA as an independent consultant
 * Contact: hello@hajafaniry.com
 * Website: hajafaniry.com
 *
 * Unauthorized copying, modification, distribution, or reuse of this code,
 * in whole or in part, is strictly prohibited without prior written permission.
 */
// Shared workbook normalization and business rules engine.
const STAFF_REFERENCE = [
  { name: 'Centre Pasteur du Cameroun', aliases: ['centre pasteur du cameroun', 'centre pasteur cameroun', 'cpc'], domains: ['pasteur-yaounde.org'] },
  { name: 'Institut Pasteur de Bangui', aliases: ['institut pasteur de bangui', 'bangui'], domains: ['pasteur-bangui.cf'] },
  { name: 'Centre de Recherche Medicale et Sanitaire (CERMES Niger)', aliases: ['cermes', 'cermes niger', 'centre de recherche medicale et sanitaire'], domains: ['cermes.org'] },
  { name: "Institut Pasteur de Cote d'Ivoire", aliases: ["institut pasteur de cote d'ivoire", "cote d'ivoire", 'ipc'], domains: ['pasteur.ci'] },
  { name: 'Institut Pasteur de Dakar', aliases: ['institut pasteur de dakar', 'dakar'], domains: ['pasteur.sn'] },
  { name: 'Institut Pasteur de Guinee', aliases: ['institut pasteur de guinee', 'guinee'], domains: ['pasteur-guinee.org'] },
  { name: 'Institut Pasteur de Madagascar', aliases: ['institut pasteur de madagascar', 'madagascar'], domains: ['pasteur.mg'] },
  { name: 'INRS - Centre Armand-Frappier Sante Biotechnologie', aliases: ['inrs', 'armand-frappier', 'armand frappier'], domains: ['iaf.inrs.ca', 'inrs.ca'] },
  { name: 'Institut Pasteur de la Guadeloupe', aliases: ['guadeloupe', 'institut pasteur de la guadeloupe'], domains: ['pasteur-guadeloupe.fr'] },
  { name: 'Institut Pasteur de la Guyane', aliases: ['guyane', 'institut pasteur de la guyane'], domains: ['pasteur-cayenne.fr'] },
  { name: 'Institut Pasteur de Montevideo', aliases: ['montevideo', 'pasteur montevideo', 'ipmontevideo'], domains: ['pasteur.edu.uy'] },
  { name: 'Oswaldo Cruz Foundation (FIOCRUZ)', aliases: ['fiocruz', 'fundacao oswaldo cruz', 'oswaldo cruz foundation'], domains: ['fiocruz.br', 'ioc.fiocruz.br', 'bio.fiocruz.br'] },
  { name: 'Institut Pasteur de Sao Paulo', aliases: ['institut pasteur de sao paulo', 'sao paulo'], domains: [] },
  { name: 'University of Hong Kong - Pasteur Research Pole (HKU-PRP)', aliases: ['hku-pasteur research pole', 'hku pasteur research pole', 'hku-pasteur', 'hku pasteur', 'hku-prp'], domains: ['hku.hk', 'connect.hku.hk'] },
  { name: 'Institut Pasteur de Nouvelle-Caledonie', aliases: ['institut pasteur de nouvelle-caledonie', 'nouvelle-caledonie'], domains: ['pasteur.nc'] },
  { name: 'Institut Pasteur du Cambodge', aliases: ['institut pasteur du cambodge', 'cambodge'], domains: ['pasteur-kh.org'] },
  { name: 'Institut Pasteur du Laos', aliases: ['institut pasteur du laos', 'laos'], domains: ['pasteur.la'] },
  { name: 'Institut Pasteur in Ho Chi Minh City', aliases: ['pasteur institute in ho chi minh city', 'institut pasteur in ho chi minh city'], domains: ['pasteurhcm.edu.vn'] },
  { name: 'Institut Pasteur in Iran', aliases: ['institut pasteur in iran', 'pasteur institute of iran', 'iran', 'ipi'], domains: [] },
  { name: 'Institut Pasteur in Nha Trang', aliases: ['institut pasteur in nha trang', 'nha trang'], domains: [] },
  { name: 'Institut Pasteur Korea', aliases: ['institut pasteur korea', 'ip korea'], domains: ['ip-korea.org'] },
  { name: 'National Institute of Hygiene and Epidemiology (NIHE)', aliases: ['nihe', 'national institute of hygiene and epidemiology'], domains: ['nihe.org.vn'] },
  { name: 'Institut Pasteur (Paris)', aliases: ['institut pasteur paris', 'institut pasteur'], domains: ['pasteur.fr'] },
  { name: 'Hellenic Pasteur Institute', aliases: ['hellenic pasteur institute', 'hpi'], domains: ['pasteur.gr'] },
  { name: 'Institut Pasteur de Lille', aliases: ['institut pasteur de lille', 'pasteur lille', 'lille'], domains: ['pasteur-lille.fr'] },
  { name: 'Istituto Pasteur Italia - Cenci Bolognetti Foundation', aliases: ['istituto pasteur italia', 'cenci bolognetti', 'istituto pasteur.it'], domains: ['istitutopasteur.it', 'uniroma1.it'] },
  { name: 'Institut Pasteur in Saint Petersburg', aliases: ['saint-petersburg pasteur institute', 'saint petersburg', 'st petersburg'], domains: ['pasteurorg.ru'] },
  { name: 'Sciensano', aliases: ['sciensano'], domains: ['sciensano.be'] },
  { name: 'Stephan Angeloff Institute of Microbiology', aliases: ['stephan angeloff institute of microbiology', 'microbiology bas'], domains: ['microbio.bas.bg'] },
  { name: "Institut Pasteur d'Algerie", aliases: ["institut pasteur d'algerie", 'algeria', 'ipa'], domains: ['pasteur.dz'] },
  { name: 'Institut Pasteur du Maroc', aliases: ['institut pasteur du maroc', 'morocco', 'ipm'], domains: ['pasteur.ma'] },
  { name: 'Institut Pasteur de Tunis', aliases: ['institut pasteur de tunis', 'institut pasteur tunis', 'tunis'], domains: ['pasteur.tn', 'pasteur.utm.tn'] },
  { name: 'Pasteur Network', aliases: ['pasteur network'], domains: [] }
];

const PERSONAL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'yahoo.fr', 'outlook.com', 'hotmail.com', 'live.com',
  'icloud.com', 'aol.com', 'proton.me', 'protonmail.com', 'gmx.com', 'mail.com',
  'orange.fr', 'wanadoo.fr', 'free.fr'
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

// Text normalization helpers.
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

// Column detection helpers.
function findField(columns, logicalName) {
  const wanted = REQUIRED_FIELD_HINTS[logicalName] || [];
  for (const value of wanted) {
    if (columns.includes(value)) return value;
  }
  const normalizedWanted = wanted.map(normalize);
  const matched = columns.find((column) => normalizedWanted.includes(normalize(column)));
  return matched || null;
}

// Date and numeric parsing helpers.
function parseExcelDate(value) {
  if (value === null || value === undefined || value === '') return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value === 'number') {
    const utcDays = Math.floor(value - 25569);
    return new Date(utcDays * 86400 * 1000);
  }
  const date = new Date(String(value).trim());
  return Number.isNaN(date.getTime()) ? null : date;
}

function daysBetween(dateA, dateB = new Date()) {
  if (!dateA) return null;
  return Math.floor((dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24));
}

function safeNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

// Email and domain classification helpers.
function getDomain(email) {
  const match = String(email || '').toLowerCase().trim().match(/@([^@]+)$/);
  return match ? match[1] : '';
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

function isTestOrSystem(row, email, company, role) {
  const haystack = normalize([email, company, role, row['First name'], row['Last name']].join(' '));
  return ['test', 'demo', 'sample', 'admin', 'system', 'fake', 'dummy', 'noreply', 'do not use']
    .some((token) => haystack.includes(token));
}

function classifyDomain(domain) {
  if (!domain) return 'Inconnu / autre';
  if (PERSONAL_DOMAINS.has(domain)) return 'Personnel';
  if (
    domain.includes('pasteur') || domain.includes('fiocruz') || domain.includes('inrs') ||
    domain.includes('hku') || domain.includes('sciensano') || domain.includes('nihe') ||
    domain.includes('microbio')
  ) {
    return 'Institutionnel';
  }
  if (domain.includes('.org') || domain.includes('.edu') || domain.includes('.ac.') || domain.includes('.gov') || domain.includes('.int')) {
    return 'Institutionnel';
  }
  return 'Inconnu / autre';
}

// Institution mapping helpers.
function mapInstitution(affiliation, company, domain) {
  const textAffiliation = normalize(affiliation);
  const textCompany = normalize(company);
  const textDomain = normalize(domain);

  for (const ref of STAFF_REFERENCE) {
    if (textAffiliation && (normalize(ref.name) === textAffiliation || ref.aliases.some((alias) => textAffiliation.includes(normalize(alias))))) {
      return { name: ref.name, confidence: 'Fort', source: 'Affiliation' };
    }
  }

  for (const ref of STAFF_REFERENCE) {
    if (textCompany && (normalize(ref.name) === textCompany || ref.aliases.some((alias) => textCompany.includes(normalize(alias))))) {
      return { name: ref.name, confidence: 'Moyen', source: 'Organisation déclarée' };
    }
  }

  for (const ref of STAFF_REFERENCE) {
    if (textDomain && ref.domains.some((candidate) => textDomain === normalize(candidate))) {
      return { name: ref.name, confidence: 'Moyen', source: 'Domaine email' };
    }
  }

  return { name: 'Non rattaché', confidence: 'Faible', source: 'Aucun indice fiable' };
}

function getColumnValueCaseInsensitive(row, candidates) {
  const keys = Object.keys(row || {});
  for (const candidate of candidates) {
    const match = keys.find((key) => normalize(key) === normalize(candidate));
    if (match && row[match] !== undefined && row[match] !== null && String(row[match]).trim() !== '') {
      return String(row[match]).trim();
    }
  }
  return '';
}

function formatDate(value) {
  return value ? value.toLocaleDateString('fr-FR') : '';
}

// Main workbook normalization entry point.
export function normalizeWorkbookRows(sourceRows, sheetName) {
  if (!sourceRows.length) {
    return { fields: {}, rows: [] };
  }

  const columns = Object.keys(sourceRows[0]);
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
  sourceRows.forEach((row) => {
    const email = String(row[fields.email] || '').trim().toLowerCase();
    if (email) {
      emailCounts.set(email, (emailCounts.get(email) || 0) + 1);
    }
  });

  const rows = sourceRows.map((row) => {
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
    const active = Boolean(activationDate);
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

    let scoreBand = 'Non renseigné';
    if (score !== null) {
      scoreBand = score >= 70 ? 'Élevé' : score >= 40 ? 'Moyen' : 'Faible';
    }

    const mapped = mapInstitution(affiliation, company, domain);

    return {
      firstName,
      lastName,
      email,
      domain,
      domainType: classifyDomain(domain),
      invitationDate: invitationDate ? invitationDate.toISOString() : null,
      activationDate: activationDate ? activationDate.toISOString() : null,
      lastLoginDate: lastLoginDate ? lastLoginDate.toISOString() : null,
      creationDate: creationDate ? creationDate.toISOString() : null,
      invitationAge,
      loginAge,
      company,
      role,
      affiliation,
      country,
      score,
      scoreBand,
      active,
      technical,
      duplicateEmail,
      emailValid,
      invitationBucket,
      realProblem: !active && invitationBucket === '>90 jours' && !technical,
      mappedInstitution: mapped.name,
      mappingConfidence: mapped.confidence,
      mappingSource: mapped.source,
      hasAffiliation: Boolean(affiliation),
      neverLogged: active && !lastLoginDate,
      longInactive: active && loginAge !== null && loginAge > 180,
      lastLoginText: formatDate(lastLoginDate),
      sheetName
    };
  });

  return { fields, rows };
}
