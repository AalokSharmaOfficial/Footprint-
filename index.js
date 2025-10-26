
import { collectAllData, getClipboardInfo, getMediaDeviceInfo } from './js/dataCollector.js';
import { renderInitialView, renderLoadingView, renderResultsView, renderErrorView } from './js/ui.js';

const APP_VERSION = '2.2.1';

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const resultsView = document.getElementById('results-view');
    const revealButton = document.getElementById('reveal-button');
    const versionBadge = document.getElementById('app-version');

    if (!mainContent || !revealButton || !resultsView || !versionBadge) {
        console.error('Essential DOM elements not found!');
        return;
    }
    
    versionBadge.textContent = `v${APP_VERSION}`;

    const handleDataCollection = async () => {
        renderLoadingView();
        revealButton.style.display = 'none';

        try {
            const data = await collectAllData();
            renderResultsView(resultsView, data, {
                getClipboardInfo,
                getMediaDeviceInfo,
            });
            
            // Show "Run Again" button
            revealButton.textContent = 'Run Again';
            revealButton.className = 'btn btn-primary';
            revealButton.style.display = 'block';

        } catch (err) {
            console.error('Failed to collect data:', err);
            renderErrorView('Failed to collect some data. Please try again.');
        }
    };
    
    renderInitialView();
    revealButton.addEventListener('click', handleDataCollection);
});