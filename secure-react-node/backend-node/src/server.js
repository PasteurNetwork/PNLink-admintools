/**
 * Developed by Haja Faniry RAZAFIMAHENINA as an independent consultant
 * Contact: hello@hajafaniry.com
 * Website: hajafaniry.com
 *
 * Unauthorized copying, modification, distribution, or reuse of this code,
 * in whole or in part, is strictly prohibited without prior written permission.
 */
import express from 'express';
import multer from 'multer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import XLSX from 'xlsx';
import { normalizeWorkbookRows } from './dashboardEngine.js';

// Backend server bootstrap and routing.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');
const frontendDist = path.resolve(projectRoot, 'frontend-react', 'dist');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: '25mb' }));
app.use('/assets', express.static(path.resolve(projectRoot, 'assets')));

// Workbook processing API.
app.post('/api/dashboard/process', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'Missing file upload.' });
    return;
  }

  const workbook = XLSX.read(req.file.buffer, { type: 'buffer', cellDates: true });
  const firstSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheetName];
  const sourceRows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  const { fields, rows } = normalizeWorkbookRows(sourceRows, firstSheetName);

  res.json({
    fields,
    rows,
    fileMeta: {
      fileName: req.file.originalname,
      importedAt: new Date().toISOString(),
      lastModified: req.body.lastModified ? new Date(Number(req.body.lastModified)).toISOString() : null,
      sheetName: firstSheetName,
      rowCount: rows.length
    }
  });
});

// Workbook download helper.
function sendWorkbook(res, rows, sheetName, fileName, format = 'xlsx') {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  const bookType = format === 'csv' ? 'csv' : 'xlsx';
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType });
  const contentType =
    format === 'csv'
      ? 'text/csv; charset=utf-8'
      : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  res.send(buffer);
}

// Detail export API.
app.post('/api/dashboard/export/detail', (req, res) => {
  const { rows = [], format = 'xlsx', fileBaseName = 'detail_export', lang = 'en' } = req.body || {};
  const payload = rows.map((row) => ({
    last_name: row.lastName || '',
    first_name: row.firstName || '',
    email: row.email || '',
    affiliated_institute: row.affiliation || '',
    mapped_institute: row.mappedInstitution || '',
    location: row.country || '',
    organization: row.company || '',
    role: row.role || '',
    priority: row.priority || '',
    status: row.active ? (lang === 'fr' ? 'Actif' : 'Active') : (lang === 'fr' ? 'Inactif' : 'Inactive'),
    invitation_bucket: row.invitationBucket || '',
    last_login: row.lastLoginText || ''
  }));

  sendWorkbook(res, payload, 'detail', `${fileBaseName}.${format === 'csv' ? 'csv' : 'xlsx'}`, format);
});

// Institute view export API.
app.post('/api/dashboard/export/institute-view', (req, res) => {
  const { rows = [], selected = null, totals = {} } = req.body || {};
  const payload = rows.map((row) => ({
    institute: selected?.institution || '',
    total_filtered_users: rows.length,
    activation_rate: Number((totals.activationRate || 0).toFixed(1)),
    real_problems: totals.realProblems || 0,
    estimated_coverage: selected?.coverageRate !== null && selected?.coverageRate !== undefined ? Number((selected.coverageRate || 0).toFixed(1)) : '',
    user_last_name: row.lastName || '',
    user_first_name: row.firstName || '',
    user_email: row.email || '',
    organization: row.company || '',
    role: row.role || '',
    priority: row.priority || '',
    invitation_bucket: row.invitationBucket || '',
    active: row.active ? 1 : 0
  }));

  sendWorkbook(res, payload, 'institute_view', 'institute_view_export.xlsx', 'xlsx');
});

// Consolidated export API.
app.post('/api/dashboard/export/consolidated', (req, res) => {
  const { items = [] } = req.body || {};
  const payload = items.map((item) => ({
    institution: item.segment,
    total: item.totalUsers,
    activated: item.activeUsers,
    inactive: item.inactiveUsers,
    activation_rate: item.activationRate,
    invited_30d: item.invitedRecent,
    invited_31_90d: item.invitedAging,
    invited_over_90d: item.invitedOld,
    no_invitation: item.neverInvited,
    real_problems: item.realProblems,
    coverage_rate: item.organizationalCoverage,
    status: item.status,
    priority: item.priority,
    action: item.action
  }));

  sendWorkbook(res, payload, 'consolidated', 'consolidated_table_export.xlsx', 'xlsx');
});

// Production static serving.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(frontendDist));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`PNLink backend listening on http://localhost:${port}`);
});
