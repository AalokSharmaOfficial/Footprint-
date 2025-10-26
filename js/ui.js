
const icons = {
  GlobeIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.881 4.618a9 9 0 11-3.762 0M12 2v2.086M12 20v2.086M5 11a9 9 0 0114 0" /></svg>`,
  BrowserIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
  DeviceIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
  ScreenIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.5 21L12 18l2.5 3M4 11h16M4 5h16M4 17h16" /></svg>`,
  LocationIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  StorageIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s0 2 8 2 8-2 8-2" /></svg>`,
  WifiIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.556A5.5 5.5 0 0112 15c1.445 0 2.801.53 3.889 1.556M4.889 13.222A9.5 9.5 0 0112 11c2.445 0 4.801.93 6.611 2.556m-13.222 0A9.5 9.5 0 0112 11c2.445 0 4.801.93 6.611 2.556M12 19h.01" /></svg>`,
  BatteryIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9.5a2.5 2.5 0 015 0V19M3 11h18" /></svg>`,
  ClockIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  CanvasIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
  WebRTCIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>`,
  FontIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v12M11 5h10M17 3v12M5 21h14a2 2 0 002-2v-2" /></svg>`,
  ClipboardIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>`,
  CameraIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  KeyIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>`,
};

function createDataRow(label, value) {
    const row = document.createElement('div');
    row.className = 'data-row';
    const dt = document.createElement('dt');
    dt.textContent = label.replace(/([A-Z])/g, ' $1');
    const dd = document.createElement('dd');
    dd.textContent = Array.isArray(value) ? value.join(', ') : String(value);
    row.append(dt, dd);
    return row;
}

function createInfoCard({ title, icon, category, data = {}, note = '', children = null }) {
    const card = document.createElement('div');
    card.className = `info-card border-${category}`;

    const content = document.createElement('div');
    content.className = 'info-card-content';

    const header = document.createElement('div');
    header.className = 'info-card-header';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'info-card-icon';
    iconSpan.innerHTML = icon;
    const titleH3 = document.createElement('h3');
    titleH3.className = 'info-card-title';
    titleH3.textContent = title;
    header.append(iconSpan, titleH3);
    content.appendChild(header);

    const dataEntries = Object.entries(data).filter(([, value]) => value !== null && value !== undefined && value !== '');
    
    if (dataEntries.length > 0) {
        const dl = document.createElement('dl');
        dataEntries.forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    dl.appendChild(createDataRow(subKey, subValue));
                });
            } else {
                dl.appendChild(createDataRow(key, value));
            }
        });
        content.appendChild(dl);
    } else if (children) {
        content.appendChild(children);
    }

    if (note) {
        const noteEl = document.createElement('div');
        noteEl.className = 'info-card-note';
        noteEl.innerHTML = note; // Use innerHTML to parse strong tags
        
        // Append note inside if there's data, or as primary content if not
        if (dataEntries.length > 0) {
            content.appendChild(noteEl);
        } else if (!children) {
             const p = document.createElement('p');
             p.innerHTML = note;
             content.appendChild(p);
        }
    }
    
    // If there is data and children, append children below the note
    if (dataEntries.length > 0 && children) {
         content.appendChild(children);
    }


    card.appendChild(content);
    return card;
}

function createPermissionCard({ title, icon, category, description, buttonText, onButtonClick }) {
    const container = document.createElement('div');

    const desc = document.createElement('p');
    desc.style.marginBottom = '1rem';
    desc.textContent = description;

    const button = document.createElement('button');
    button.className = 'btn btn-card';
    button.textContent = buttonText;
    
    container.append(desc, button);

    const card = createInfoCard({ title, icon, category, children: container });
    
    button.addEventListener('click', async () => {
        button.disabled = true;
        button.textContent = 'Waiting...';
        const data = await onButtonClick();
        
        // Remove button and description
        container.innerHTML = ''; 

        if (data && (!Array.isArray(data.devices) || data.devices.length > 0)) {
            const dl = document.createElement('dl');
            if (data.text) {
                 dl.appendChild(createDataRow('Content', `"${data.text}"`));
            }
            if (data.devices) {
                dl.appendChild(createDataRow('Count', data.count));
                dl.appendChild(createDataRow('Devices', data.devices.map(d => `${d.kind.split('input')[0]}: ${d.label}`).join('; ')));
            }
             if (data.error) {
                dl.appendChild(createDataRow('Error', data.error));
            }
            container.appendChild(dl);
        } else {
            const p = document.createElement('p');
            p.textContent = 'Permission was denied or no data was found.';
            container.appendChild(p);
        }
    });

    return card;
}

function createCredentialManagerCard({ onSave, onRetrieve }) {
    const container = document.createElement('div');

    const description = document.createElement('p');
    description.style.marginBottom = '1rem';
    description.innerHTML = 'This is a <strong>live demonstration</strong> of the Credential Management API. Websites use this to interact with your browser\'s built-in password manager. Click to save a sample credential, then try to retrieve it. Notice how the browser always asks for your permission before filling in login info.';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '0.5rem';
    buttonContainer.style.flexWrap = 'wrap';

    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-card';
    saveButton.textContent = 'Save Demo Credentials';
    saveButton.style.flex = '1';
    
    const retrieveButton = document.createElement('button');
    retrieveButton.className = 'btn btn-card';
    retrieveButton.textContent = 'Read Saved Login';
    retrieveButton.style.flex = '1';

    const resultContainer = document.createElement('div');
    resultContainer.style.marginTop = '1rem';
    
    buttonContainer.append(saveButton, retrieveButton);
    container.append(description, buttonContainer, resultContainer);

    const card = createInfoCard({
        title: "Browser Password Manager",
        icon: icons.KeyIcon,
        category: 'credentials',
        children: container
    });
    
    saveButton.addEventListener('click', async () => {
        saveButton.disabled = true;
        saveButton.textContent = 'Saving...';
        const result = await onSave();
        saveButton.textContent = 'Save Demo Credentials';
        saveButton.disabled = false;
        resultContainer.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = result.message;
        resultContainer.appendChild(p);
    });
    
    retrieveButton.addEventListener('click', async () => {
        retrieveButton.disabled = true;
        retrieveButton.textContent = 'Waiting for you...';
        const result = await onRetrieve();
        retrieveButton.textContent = 'Read Saved Login';
        retrieveButton.disabled = false;
        resultContainer.innerHTML = '';
        
        if (result.username) {
            const dl = document.createElement('dl');
            dl.appendChild(createDataRow('Username Found', result.username));
            resultContainer.appendChild(dl);

            const note = document.createElement('p');
            note.className = 'info-card-note';
            note.style.borderTop = 'none';
            note.style.paddingTop = '0.5rem';
            note.style.marginTop = '0';
            note.innerHTML = '<strong>Note:</strong> The password itself is <strong>never</strong> exposed to the website. The browser handles it securely.';
            resultContainer.appendChild(note);
        } else {
            const p = document.createElement('p');
            p.textContent = result.message;
            resultContainer.appendChild(p);
        }
    });
    
    return card;
}


function createSection(title, cards, containerClass = 'results-grid') {
    const fragment = document.createDocumentFragment();
    const h2 = document.createElement('h2');
    h2.className = 'section-title';
    h2.textContent = title;
    fragment.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = containerClass;
    cards.forEach(card => card && grid.appendChild(card));
    fragment.appendChild(grid);
    return fragment;
}

export function renderLoadingView() {
    const initialView = document.getElementById('initial-view');
    const loadingView = document.getElementById('loading-view');
    const resultsView = document.getElementById('results-view');

    if (initialView) initialView.style.display = 'none';
    if (loadingView) loadingView.style.display = 'flex';
    if (resultsView) {
        resultsView.style.display = 'none';
        resultsView.innerHTML = '';
    }
}

export function renderErrorView(message) {
    const initialView = document.getElementById('initial-view');
    const loadingView = document.getElementById('loading-view');
    const resultsView = document.getElementById('results-view');

    if (initialView) initialView.style.display = 'none';
    if (loadingView) loadingView.style.display = 'none';
    
    if (resultsView) {
        resultsView.style.display = 'block';
        resultsView.innerHTML = `<p style="color: var(--color-red); text-align: center;">${message}</p>`;
    }
}

export function renderInitialView() {
    const initialView = document.getElementById('initial-view');
    const loadingView = document.getElementById('loading-view');
    const resultsView = document.getElementById('results-view');
    
    if (initialView) initialView.style.display = 'block';
    if (loadingView) loadingView.style.display = 'none';
    if (resultsView) {
        resultsView.style.display = 'none';
        resultsView.innerHTML = '';
    }
}

export function renderResultsView(container, userData, actionHandlers) {
    const { getClipboardInfo, getMediaDeviceInfo, saveCredentials, getCredentials } = actionHandlers;
    const initialView = document.getElementById('initial-view');
    const loadingView = document.getElementById('loading-view');
    
    if (initialView) initialView.style.display = 'none';
    if (loadingView) loadingView.style.display = 'none';

    container.innerHTML = ''; // Clear previous results
    container.style.display = 'block';

    // --- Basic Info Section ---
    const basicGrid = document.createElement('div');
    basicGrid.className = 'results-grid';
    
    basicGrid.appendChild(createInfoCard({
        title: "Network & IP Info",
        icon: icons.GlobeIcon,
        category: 'network',
        data: userData.ipInfo,
        note: `Note: The location shown here (city, country) is an <strong>estimate based on your IP address</strong> and may differ significantly from your actual physical location.`
    }));
    basicGrid.appendChild(createInfoCard({
        title: "Connection Info",
        icon: icons.WifiIcon,
        category: 'connection',
        data: userData.connectionInfo ? { ...userData.connectionInfo, downlink: `${userData.connectionInfo.downlink} Mbps (approx)`, rtt: `${userData.connectionInfo.rtt} ms` } : {},
        note: `Could not retrieve connection details. Your browser may not support the Network Information API.`
    }));
    basicGrid.appendChild(createInfoCard({ title: "Browser Info", icon: icons.BrowserIcon, category: 'browser', data: userData.navigatorInfo }));
    basicGrid.appendChild(createInfoCard({ title: "Language & Timezone", icon: icons.ClockIcon, category: 'time', data: userData.timeInfo }));
    basicGrid.appendChild(createInfoCard({
        title: "Device Hardware",
        icon: icons.DeviceIcon,
        category: 'device',
        data: userData.deviceInfo ? {
            cores: userData.deviceInfo.cores, 
            memory: `${userData.deviceInfo.memory || 'N/A'} GB (approx)`,
            gpuVendor: userData.deviceInfo.gpuVendor,
            gpuRenderer: userData.deviceInfo.gpuRenderer,
            touchPoints: `${userData.deviceInfo.touchPoints} points`,
            plugins: `${userData.deviceInfo.plugins} installed`,
            mimeTypes: `${userData.deviceInfo.mimeTypes} supported`,
        } : {},
        note: `<p>The combination of these features can contribute to <strong>"device fingerprinting."</strong></p><p class="mt-2">Note: A specific device model (e.g., "iPhone 13") is not directly exposed. Clues in the <strong>User Agent string</strong> (in Browser Info) are often used to estimate it.</p>`
    }));
     basicGrid.appendChild(createInfoCard({
        title: "Battery Status",
        icon: icons.BatteryIcon,
        category: 'battery',
        data: userData.batteryInfo ? { level: `${userData.batteryInfo.level}%`, charging: userData.batteryInfo.charging ? 'Yes' : 'No' } : {},
        note: userData.batteryInfo ? `For privacy, browsers do not expose detailed battery info like capacity (mAh) or serial numbers.` : `Could not retrieve battery status. Your browser may not support the Battery Status API.`
    }));
    basicGrid.appendChild(createInfoCard({ title: "Screen & Display", icon: icons.ScreenIcon, category: 'screen', data: userData.screenInfo ? {...userData.screenInfo, resolution: `${userData.screenInfo.width}x${userData.screenInfo.height}`} : {} }));
    basicGrid.appendChild(createInfoCard({
        title: "Geolocation",
        icon: icons.LocationIcon,
        category: 'location',
        data: userData.locationInfo ? {...userData.locationInfo, accuracy: `${userData.locationInfo.accuracy.toFixed(2)} meters` } : {},
        note: userData.locationInfo ? `This is a more <strong>precise location</strong> from your device (GPS, Wi-Fi), available only when you grant permission.` : `Location permission was not granted. Granting access provides a much more accurate position than the IP-based estimate.`
    }));
    basicGrid.appendChild(createInfoCard({
        title: "Local Storage",
        icon: icons.StorageIcon,
        category: 'storage',
        data: {},
        note: `This site just stored a timestamp in your browser. Sites use this to remember you, track your visits, and personalize content or ads. This is a common way your activity is monitored on a specific website.<br />Current timestamp stored: <strong style="color: var(--brand-secondary);">${userData.storageInfo.timestamp}</strong>`
    }));

    container.appendChild(basicGrid);
    
    // --- Advanced Fingerprinting Section ---
    const advancedCards = [
        createInfoCard({
            title: "Canvas Fingerprinting",
            icon: icons.CanvasIcon,
            category: 'fingerprint',
            data: userData.canvasFingerprint,
            note: `An invisible image was rendered in your browser. Tiny variations in your GPU, drivers, and fonts produce a <strong>unique hash</strong>. This is a powerful method to identify and track you across different websites.`
        }),
        createInfoCard({
            title: "WebRTC IP Leaks",
            icon: icons.WebRTCIcon,
            category: 'webrtc',
            data: userData.webrtcInfo,
            note: `WebRTC found IP addresses that could be used to identify you, <strong>even if you use a VPN</strong>. A leak can expose your real IP address, bypassing privacy tools.`
        }),
        createInfoCard({
            title: "Installed Fonts",
            icon: icons.FontIcon,
            category: 'fonts',
            data: userData.fontInfo ? { count: `${userData.fontInfo.count} detected` } : {},
            note: userData.fontInfo ? `The unique set of fonts installed on your device is another strong identifier. We detected <strong>${userData.fontInfo.count} fonts</strong>, including: ${userData.fontInfo.detectedFonts.slice(0, 3).join(', ')}...` : 'Could not detect fonts.'
        })
    ];
    container.appendChild(createSection("Advanced Fingerprinting Techniques", advancedCards));

    // --- Deeper Data Access Section ---
    const permissionCards = [
        createPermissionCard({
            title: "Clipboard Access",
            icon: icons.ClipboardIcon,
            category: 'clipboard',
            description: "Websites can request to read the content of your clipboard. This could potentially expose sensitive information you have copied.",
            buttonText: 'Request Clipboard Access',
            onButtonClick: getClipboardInfo
        }),
        createPermissionCard({
            title: "Media Devices",
            icon: icons.CameraIcon,
            category: 'media',
            description: "A site can ask for camera and microphone access. Even if you don't stream, this permission allows the site to list all your media devices.",
            buttonText: 'Request Media Device Access',
            onButtonClick: getMediaDeviceInfo
        }),
        createCredentialManagerCard({
            onSave: saveCredentials,
            onRetrieve: getCredentials
        })
    ];
    container.appendChild(createSection("Deeper Data Access (With Your Permission)", permissionCards, 'results-grid'));
}