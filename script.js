document.getElementById("scanBtn").addEventListener("click", runScan);

function runScan() {
    const target = document.getElementById("targetInput").value.trim();
    const consoleBox = document.getElementById("consoleLog");

    if (!target) {
        alert("Please enter a target IP address or domain name.");
        return;
    }

    // Konsolu temizle ve yeni akışı başlat
    consoleBox.innerHTML = `<p class="log-info">[i] Target locked: ${target}</p>`;
    consoleBox.innerHTML += `<p class="system-msg">[i] Initializing CyberSentinel Recon Engine...</p>`;

    fetch('http://127.0.0.1:5000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: target })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            consoleBox.innerHTML += `<p class="log-danger">[!] Error: ${data.error}</p>`;
            return;
        }

        consoleBox.innerHTML += `<p class="log-success">[+] IP Address: ${data.ip}</p>`;
        
        if (data.geo) {
            consoleBox.innerHTML += `<p class="log-info">[i] Location: ${data.geo.city || 'N/A'}, ${data.geo.country || 'N/A'}</p>`;
            consoleBox.innerHTML += `<p class="log-info">[i] ISP / Provider: ${data.geo.isp || 'N/A'}</p>`;
        }

        consoleBox.innerHTML += `<p class="system-msg">[i] Scanning critical ports (21, 22, 80, 443, 8080)...</p>`;

        for (const [port, status] of Object.entries(data.ports)) {
            if (status === "OPEN") {
                consoleBox.innerHTML += `<p class="log-danger">  └─ Port ${port}: OPEN</p>`;
            } else {
                consoleBox.innerHTML += `<p class="system-msg">  └─ Port ${port}: CLOSED</p>`;
            }
        }

        consoleBox.innerHTML += `<p class="log-success">[✓] Recon scan completed successfully.</p>`;
        consoleBox.scrollTop = consoleBox.scrollHeight;
    })
    .catch(err => {
        consoleBox.innerHTML += `<p class="log-danger">[!] Backend connection failed! Make sure app.py is running.</p>`;
    });
}