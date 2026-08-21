# 🔍 CyberSentinel — Network & Security Analyzer

A web-based network reconnaissance tool built with **Python, Flask, JavaScript, and Socket Programming**.

CyberSentinel allows users to enter an IP address or domain name through a browser-based interface, resolve the target IP, retrieve basic GeoIP information, and scan selected TCP ports for accessibility.

> ⚠️ **Responsible Use:** This project is intended for educational and authorized security testing purposes only. Only scan systems you own or have explicit permission to test.

## 🚀 Features

* 🌐 IP address and domain name resolution
* 🔌 TCP port scanning
* 📡 Socket-based network connections
* 🌍 GeoIP information lookup
* 🏢 ISP / Provider identification
* 🖥️ Browser-based scanning interface
* 🔄 Frontend-to-backend communication through a Flask API
* ⚡ Real-time scan result display
* 🛡️ CORS support for API requests

### Currently Scanned Ports

The scanner currently checks the following TCP ports:

```text
21    FTP
22    SSH
80    HTTP
443   HTTPS
8080  HTTP Alternate
```

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript
* Font Awesome

### Backend

* Python 3
* Flask
* Flask-CORS
* Requests

### Networking

* Socket Programming
* TCP/IP
* DNS Resolution
* HTTP Requests

### External API

* IP-API — GeoIP information

## 🧠 How It Works

The application follows a simple frontend-to-backend workflow:

```text
User Input
    ↓
Web Interface
    ↓
JavaScript Fetch Request
    ↓
Flask REST API
    ↓
Domain → IP Resolution
    ↓
GeoIP Lookup
    ↓
TCP Port Scanning
    ↓
JSON Response
    ↓
Results Displayed in Browser
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ip-port-scanner.git
cd ip-port-scanner
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

### 3. Activate the virtual environment

**Windows:**

```bash
venv\Scripts\activate
```

**Linux / macOS:**

```bash
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

## ▶️ Running the Backend

Start the Flask application:

```bash
python app.py
```

The backend will run on:

```text
http://127.0.0.1:5000
```

## 🌐 Running the Frontend

Open `index.html` in a web browser while the Flask backend is running.

Enter an IP address or domain name and click:

```text
SCAN TARGET
```

The application will send the target to the Flask API and display:

* Resolved IP address
* Country
* City
* ISP / Provider
* Status of the selected TCP ports

## 📚 What I Learned

This project was developed to strengthen practical knowledge in:

* Python socket programming
* TCP/IP networking fundamentals
* Port scanning
* DNS resolution
* REST API development with Flask
* Frontend ↔ Backend communication
* HTTP requests
* CORS
* Basic network reconnaissance
* Integrating external APIs into a Python application

## 🔮 Future Improvements

Possible future improvements include:

* Custom port range selection
* Multi-port scanning
* Service/version detection
* Scan history
* Improved error handling
* Asynchronous scanning
* More detailed network information
* Improved security and input validation

## 👨‍💻 Author

**Furkan Şahin**

This project was created as part of my practical learning journey in **Networking, Cybersecurity, Python, and IT Systems**.
