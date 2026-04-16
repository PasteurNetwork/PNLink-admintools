/**
 * Developed by Haja Faniry RAZAFIMAHENINA as an independent consultant
 * Contact: hello@hajafaniry.com
 * Website: hajafaniry.com
 *
 * Unauthorized copying, modification, distribution, or reuse of this code,
 * in whole or in part, is strictly prohibited without prior written permission.
 */
import { useEffect } from 'react';
import { createDashboardApp } from './legacy/createDashboardApp.js';

export default function App() {
  useEffect(() => {
    const app = createDashboardApp();
    return () => {
      app.destroy();
    };
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="hero">
          <div className="hero-top">
            <div>
              <img src="/assets/logo.png" alt="Pasteur Network logo" className="hero-logo" />
              <h1 id="heroTitle">PNLink - Dashboard User Engagement</h1>
              <p id="heroDescription">
                Import a PNLink users Excel export to automatically display KPIs, alerts,
                institute analysis, email domain analysis and action recommendations.
              </p>
              <div
                id="heroInstruction"
                className="hero-instruction"
                dangerouslySetInnerHTML={{
                  __html:
                    'From PNLink, export the most recent file from <a href="https://community.pasteur-network.org/backoffice/networks/3786/data_management/exports" target="_blank" rel="noopener noreferrer">"Export history &gt; Export all users"</a> on this page, making sure all fields are checked.'
                }}
              />
              <div className="toolbar">
                <div className="lang-switch">
                  <button type="button" className="lang-btn active" data-lang="en">
                    EN
                  </button>
                  <button type="button" className="lang-btn" data-lang="fr">
                    FR
                  </button>
                </div>
              </div>
            </div>
            <div className="uploader">
              <label htmlFor="excelFile">
                <strong id="uploadLabel">Import an Excel export</strong>
              </label>
              <div className="upload-actions">
                <input
                  id="excelFile"
                  className="native-file-input"
                  type="file"
                  accept=".xlsx,.xls"
                />
                <button type="button" id="selectFileBtn" className="upload-btn">
                  Choose file
                </button>
                <button type="button" id="clearFileBtn" className="upload-btn danger">
                  Clear
                </button>
                <span id="fileNameLabel" className="file-name-badge">
                  No file selected
                </span>
              </div>
              <div className="hint" id="uploadHint">
                The dashboard reads the first sheet of the file and automatically applies the
                calculation rules.
              </div>
            </div>
          </div>
        </div>

        <div id="dashboard">
          <div className="empty" id="initialEmpty">
            Load an Excel file to display the interactive dashboard.
          </div>
        </div>
      </div>

      <div id="detailModal" className="modal-backdrop" aria-hidden="true">
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="detailModalTitle">
          <div className="modal-head">
            <div>
              <h3 id="detailModalTitle">Detail</h3>
              <div id="detailModalMeta" className="modal-meta"></div>
            </div>
            <button id="detailModalClose" className="modal-close" type="button">
              Close
            </button>
          </div>
          <div id="detailModalBody" className="modal-body"></div>
        </div>
      </div>
    </>
  );
}
