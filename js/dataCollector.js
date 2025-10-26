
async function getIpInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) return null;
    const data = await response.json();
    return {
      ip: data.ip,
      network: data.network,
      city: data.city,
      region: data.region,
      country: data.country_name,
      postal: data.postal,
      org: data.org,
    };
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return null;
  }
}

function getNavigatorInfo() {
  const dnt = navigator.doNotTrack;
  let doNotTrackStatus = 'Not Supported / Unspecified';
  if (dnt === '1') doNotTrackStatus = 'Enabled';
  if (dnt === '0') doNotTrackStatus = 'Disabled';

  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    cookieEnabled: navigator.cookieEnabled,
    onlineStatus: navigator.onLine,
    doNotTrack: doNotTrackStatus,
  };
}

function getGpuInfo() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl instanceof WebGLRenderingContext) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        return {
          gpuVendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
          gpuRenderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        };
      }
    }
  } catch (e) {
    console.error("Could not get GPU info", e);
  }
  return {
    gpuVendor: 'N/A',
    gpuRenderer: 'N/A',
  };
}


function getDeviceInfo() {
  const gpuInfo = getGpuInfo();
  return {
    cores: navigator.hardwareConcurrency,
    memory: navigator.deviceMemory || 0,
    touchPoints: navigator.maxTouchPoints || 0,
    plugins: navigator.plugins.length,
    mimeTypes: navigator.mimeTypes.length,
    ...gpuInfo,
  };
}


function getScreenInfo() {
  return {
    width: window.screen.width,
    height: window.screen.height,
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
  };
}

function getGeolocationInfo() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        console.error('Error getting geolocation:', { code: error.code, message: error.message });
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  });
}

function getStorageInfo() {
    const timestamp = new Date().toISOString();
    try {
        localStorage.setItem('user_interaction_timestamp', timestamp);
        const storedTimestamp = localStorage.getItem('user_interaction_timestamp');
        return { timestamp: storedTimestamp || 'Could not write to storage' };
    } catch (e) {
        console.error("Could not access localStorage", e);
        return { timestamp: 'Storage access denied' };
    }
}

function getConnectionInfo() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection) {
    return null;
  }
  return {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  };
}

async function getBatteryInfo() {
    if (!navigator.getBattery) return null;
    try {
        const battery = await navigator.getBattery();
        return {
            level: Math.round(battery.level * 100),
            charging: battery.charging,
        };
    } catch (e) {
        console.error("Could not get battery info", e);
        return null;
    }
}

function getTimeInfo() {
    return {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
    };
}

function getCanvasFingerprint() {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        const text = "BrowserLeaks.com 👣 1.0";
        ctx.textBaseline = "top";
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = "#069";
        ctx.fillText(text, 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.fillText(text, 4, 17);
        
        const dataUrl = canvas.toDataURL();

        let hash = 0;
        for (let i = 0; i < dataUrl.length; i++) {
            const char = dataUrl.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; 
        }
        return { hash: hash.toString(16) };
    } catch (e) {
        console.error("Canvas fingerprinting failed", e);
        return null;
    }
}

function getWebRTCInfo() {
    return new Promise((resolve) => {
        const ips = { local: new Set(), public: new Set() };
        const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        
        if (!RTCPeerConnection) {
            resolve({ localIps: [], publicIps: [] });
            return;
        }

        const pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel('');
        pc.createOffer().then(pc.setLocalDescription.bind(pc));
        
        const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
        
        pc.onicecandidate = (ice) => {
            if (ice && ice.candidate && ice.candidate.candidate) {
                const matches = ice.candidate.candidate.match(ipRegex);
                if (matches) {
                    matches.forEach((ip) => {
                        if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
                            ips.local.add(ip);
                        } else {
                            ips.public.add(ip);
                        }
                    });
                }
            }
        };

        setTimeout(() => resolve({
            localIps: Array.from(ips.local),
            publicIps: Array.from(ips.public)
        }), 1000);
    });
}

function getFontInfo() {
    const fonts = [
        "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", 
        "Garamond", "Courier New", "Brush Script MT", "Calibri", "Cambria", "Candara", 
        "Consolas", "Constantia", "Corbel", "Franklin Gothic Medium", "Gabriola", "Impact",
        "Lucida Console", "Lucida Sans Unicode", "Palatino Linotype", "Segoe UI", "Rockwell",
        "Fira Code", "Source Code Pro", "Roboto", "Open Sans", "Lato", "Montserrat",
        "Menlo", "Monaco", "DejaVu Sans Mono", "Inconsolata", "Droid Sans Mono",
        "Apple Garamond", "Apple Chancery", "Baskerville", "Big Caslon", "Bodoni 72",
        "Cochin", "Copperplate", "Didot", "Futura", "Geneva", "Gill Sans", "Helvetica Neue",
        "Hoefler Text", "Lucida Grande", "Marker Felt", "Myriad Pro", "Optima", "Papyrus",
        "Skia", "Zapfino"
    ];
    
    const detectedFonts = new Set();
    const baseElement = document.body;
    const testElement = document.createElement("div");
    testElement.style.position = 'absolute';
    testElement.style.left = '-9999px';
    testElement.style.fontSize = '72px';
    
    baseElement.appendChild(testElement);
    
    const getWidth = (font) => {
        testElement.style.fontFamily = font;
        testElement.innerHTML = "mmmmmmmmmmlli";
        return testElement.clientWidth;
    }
    
    const defaultWidth = getWidth("monospace");

    fonts.forEach(font => {
        if (getWidth(`monospace, "${font}"`) !== defaultWidth) {
            detectedFonts.add(font);
        }
    });

    baseElement.removeChild(testElement);
    
    return {
        detectedFonts: Array.from(detectedFonts),
        count: detectedFonts.size,
    };
}


export async function collectAllData() {
  const [ipInfo, locationInfo, batteryInfo, webrtcInfo] = await Promise.all([
    getIpInfo(),
    getGeolocationInfo(),
    getBatteryInfo(),
    getWebRTCInfo(),
  ]);

  return {
    ipInfo,
    locationInfo,
    batteryInfo,
    webrtcInfo,
    navigatorInfo: getNavigatorInfo(),
    deviceInfo: getDeviceInfo(),
    screenInfo: getScreenInfo(),
    storageInfo: getStorageInfo(),
    connectionInfo: getConnectionInfo(),
    timeInfo: getTimeInfo(),
    canvasFingerprint: getCanvasFingerprint(),
    fontInfo: getFontInfo(),
  };
}

export async function getClipboardInfo() {
    try {
        if (!navigator.clipboard || !navigator.clipboard.readText) {
            return { text: "Clipboard API not supported by your browser." };
        }
        const text = await navigator.clipboard.readText();
        return { text: text || '(Clipboard is empty)' };
    } catch (error) {
        console.error("Could not read clipboard:", error);
        if (error instanceof Error && error.message.includes('permissions policy')) {
            return { text: "Access blocked by browser security policy." };
        }
        return { text: "Permission to read clipboard was denied." };
    }
}

export async function getMediaDeviceInfo() {
    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return { devices: [], count: 0 };
        }
        
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        
        const allDevices = await navigator.mediaDevices.enumerateDevices();
        const devices = allDevices
            .filter(device => device.deviceId)
            .map(device => ({
                kind: device.kind,
                label: device.label || `${device.kind.replace('input', '')} device`,
            }));
        
        stream.getTracks().forEach(track => track.stop());

        return { devices, count: devices.length };
    } catch (error) {
        console.error("Could not get media devices:", error);
        return { devices: [], count: 0, error: "Permission denied or no devices found." };
    }
}

export async function saveCredentials() {
    try {
        if (!navigator.credentials) {
            return { message: "Credential Management API not supported." };
        }
        const cred = new PasswordCredential({
            id: 'demo_user@example.com',
            name: 'Demo User',
            password: 'fakepassword123',
        });
        await navigator.credentials.store(cred);
        return { message: 'Successfully stored demo credentials for "demo_user@example.com" in your browser\'s password manager.' };
    } catch (error) {
        console.error("Could not save credentials:", error);
        return { message: "Failed to save credentials. You might have cancelled the operation." };
    }
}

export async function getCredentials() {
    try {
        if (!navigator.credentials) {
            return { message: "Credential Management API not supported." };
        }
        const cred = await navigator.credentials.get({
            password: true,
        });

        if (cred) {
            return { username: cred.id, message: 'Credential retrieved successfully.' };
        } else {
            return { message: 'No credential chosen or available.' };
        }
    } catch (error) {
        console.error("Could not retrieve credentials:", error);
        return { message: "Operation to retrieve credentials failed or was cancelled." };
    }
}