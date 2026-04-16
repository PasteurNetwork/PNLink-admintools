# PNLink Data Dashboard

Decision-support dashboard for PNLink user export analysis.

This project loads an Excel file exported from PNLink, analyzes user engagement data, and displays:

- global KPIs
- management alerts
- institute-level analysis
- email-domain analysis
- action recommendations
- targeted exports
- interactive user detail modals

The current version is based on a conservative migration to:

- a React frontend
- a Node.js backend
- a production build with bundling and minification

The main goal of this migration is to preserve the existing dashboard behavior without breaking the user experience that was already working well.

## 1. Project Goal

The dashboard helps transform a raw PNLink export into actionable decision-support analysis.

It is designed to:

- detect active and inactive accounts
- identify problematic accounts
- flag technical or inconsistent accounts
- measure activation by institute
- estimate institute coverage
- identify users who need priority follow-up
- export useful operational segments for teams

## 2. Main Features

The project supports:

- Excel import `.xlsx` / `.xls`
- first-sheet reading
- automatic detection of useful columns
- row normalization
- institute mapping
- email domain classification
- KPI and metric calculation
- global filters
- consolidated tables
- Chart.js visualizations
- detail modals
- CSV / Excel export
- EN / FR language switch
- decision-support views

## 3. Current Architecture

The project is organized around two applications:

- `frontend-react/`
- `backend-node/`

### React Frontend

The frontend:

- renders the UI
- preserves the existing design
- reuses the historical CSS
- hosts a legacy controller to preserve the already validated imperative behavior
- manages interactions, charts, filters, modals, and in-dashboard navigation

Important files:

- [frontend-react/src/App.jsx](frontend-react/src/App.jsx)
- [frontend-react/src/main.jsx](frontend-react/src/main.jsx)
- [frontend-react/src/legacy/createDashboardApp.js](frontend-react/src/legacy/createDashboardApp.js)

### Node.js Backend

The backend:

- receives the Excel file
- parses the workbook
- normalizes rows
- applies an important part of the business rules
- exposes export APIs
- serves static assets and the frontend build in production

Important files:

- [backend-node/src/server.js](backend-node/src/server.js)
- [backend-node/src/dashboardEngine.js](backend-node/src/dashboardEngine.js)

### Historical Assets

The original assets are preserved:

- [index.html](index.html)
- [assets/css/styles.css](assets/css/styles.css)
- [assets/js/app.js](assets/js/app.js)
- [assets/vendor/chart.umd.js](assets/vendor/chart.umd.js)
- [assets/vendor/xlsx.full.min.js](assets/vendor/xlsx.full.min.js)

They are kept as functional and visual references during the migration.

## 4. Project Tree

```text
pnlinkdata/
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ app.js
│  ├─ vendor/
│  │  ├─ chart.umd.js
│  │  └─ xlsx.full.min.js
│  └─ logo.png
├─ backend-node/
│  ├─ package.json
│  └─ src/
│     ├─ dashboardEngine.js
│     └─ server.js
├─ frontend-react/
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ index.html
│  └─ src/
│     ├─ App.jsx
│     ├─ main.jsx
│     └─ legacy/
│        └─ createDashboardApp.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md
```

## 5. Requirements

Before running the project, make sure you have:

- Node.js 18 or newer
- npm

You can verify with:

```powershell
node -v
npm -v
```

## 6. Installation

From the project root:

```powershell
npm install
```

This installs:

- root workspace dependencies
- React frontend dependencies
- Node.js backend dependencies

## 7. Running in Development

The project runs with two separate processes:

- backend
- frontend

### Terminal 1: backend

```powershell
npm run dev:backend
```

The backend will be available at:

```text
http://localhost:3001
```

### Terminal 2: frontend

```powershell
npm run dev:frontend
```

The frontend will be available at:

```text
http://localhost:5173
```

The Vite frontend automatically proxies:

- `/api` to `http://localhost:3001`
- `/assets` to `http://localhost:3001`

## 8. Production Build

To generate the frontend production build:

```powershell
npm run build
```

This creates a minified build in:

```text
frontend-react/dist/
```

To run the app in production mode:

```powershell
npm run start
```

Then open:

```text
http://localhost:3001
```

In production:

- the backend serves the assets
- the backend also serves the React build

## 9. How to Use the Dashboard

### Step 1

Export the file from PNLink.

The dashboard expects a user export containing the columns required for analysis.

### Step 2

Open the application and import an Excel file using:

- `Choose file`

### Step 3

The backend processes the file and the frontend displays:

- KPIs
- charts
- tables
- alerts
- recommendations

### Step 4

Use:

- global filters
- KPI clicks
- table row and metric clicks
- charts
- exports

## 10. Business Behaviors Covered

The current engine handles:

- active account detection
- inactive account detection
- invitation bucket calculation
- real-problem detection for `>90 days`
- technical account detection
- duplicate email detection
- institute mapping from:
  - affiliation
  - declared organization
  - email domain
- domain classification:
  - institutional
  - personal
  - unknown / other

## 11. Backend API

### `POST /api/dashboard/process`

Receives an Excel file and returns:

- detected fields
- normalized rows
- file metadata

### `POST /api/dashboard/export/detail`

Returns a detail export:

- CSV or XLSX

### `POST /api/dashboard/export/institute-view`

Returns an institute-view export.

### `POST /api/dashboard/export/consolidated`

Returns a consolidated export.

## 12. Decision Support

The dashboard currently includes decision-support elements such as:

- executive summary
- top priority institutes
- users needing follow-up
- clickable recommendations

This helps move more quickly from:

- observation

to:

- action

## 13. Languages

The dashboard supports:

- English
- French

Language switching updates:

- static texts
- rendered dashboard content
- detail modals

## 14. Git and Ignored Files

The project includes a `.gitignore` to avoid pushing to GitHub:

- `node_modules/`
- `frontend-react/dist/`
- `backend-node/dist/`
- logs
- `.env` files
- IDE folders

## 15. Migration Notes

This migration was done conservatively.

That means:

- maximum preservation of the visual rendering
- preservation of existing CSS classes
- reuse of the historical behavior
- wrapping instead of aggressive rewriting

The file `createDashboardApp.js` currently acts as the bridge between:

- the modern React shell
- the legacy dashboard behavior

## 16. Quick Troubleshooting

### The frontend does not load

Make sure the frontend is running:

```powershell
npm run dev:frontend
```

### The backend does not respond

Make sure the backend is running:

```powershell
npm run dev:backend
```

### Assets do not load

Make sure the backend is correctly serving:

- `/assets`

### The Excel file produces no output

Check:

- that the file contains a readable first sheet
- that the expected columns are present
- that the backend is not returning an error

### The EN / FR switch seems incomplete

Rendering depends on the legacy controller. After code changes, restarting the frontend may be necessary.

## 17. Useful Commands

Install:

```powershell
npm install
```

Run backend in development:

```powershell
npm run dev:backend
```

Run frontend in development:

```powershell
npm run dev:frontend
```

Build frontend:

```powershell
npm run build
```

Run production:

```powershell
npm run start
```
