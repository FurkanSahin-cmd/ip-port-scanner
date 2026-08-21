from flask import Flask, request, jsonify
from flask_cors import CORS
import socket
import requests

app = Flask(__name__)
CORS(app)

PORTS_TO_SCAN = [21, 22, 80, 443, 8080]

@app.route('/scan', methods=['POST'])
def scan_target():
    data = request.get_json()
    target = data.get('target')

    if not target:
        return jsonify({'error': 'Target is required'}), 400

    try:
        target_ip = socket.gethostbyname(target)
    except socket.gaierror:
        return jsonify({'error': 'Invalid Target / Unresolvable Host'}), 400

    # --- GeoIP Bilgisi Çekme ---
    geo_info = {}
    try:
        geo_res = requests.get(f"http://ip-api.com/json/{target_ip}?fields=country,city,isp,org", timeout=3)
        if geo_res.status_code == 200:
            geo_info = geo_res.json()
    except Exception:
        geo_info = {"country": "Unknown", "city": "Unknown", "isp": "Unknown"}

    # --- Port Tarama ---
    port_results = {}
    for port in PORTS_TO_SCAN:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(1.0)
        result = s.connect_ex((target_ip, port))
        
        if result == 0:
            port_results[port] = "OPEN"
        else:
            port_results[port] = "CLOSED"
        s.close()

    return jsonify({
        'target': target,
        'ip': target_ip,
        'geo': geo_info,
        'ports': port_results
    })

if __name__ == '__main__':
    print("CyberSentinel Recon Engine Active...")
    app.run(port=5000, debug=True)