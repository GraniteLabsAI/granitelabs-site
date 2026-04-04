---
title: Blue Iris – Remote Access (Secure Setup)
description: Secure Blue Iris remote access using Cloudflare Tunnel and Zero Trust. Avoid port forwarding and protect your system from exposure.
image: /img/og/cloudflare-tunnel-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Remote Access (Secure Setup)

<img src="/img/og/cloudflare-tunnel-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

## 🔹 Overview

Remote access is one of the most important — and most risky — parts of a Blue Iris system.

Traditional approaches often rely on:

- Port forwarding  
- Direct exposure of Blue Iris to the internet  

This is **not recommended**.

---

## 🔹 Recommended Approach

Use a secure tunnel:

- Cloudflare Tunnel (preferred)  
- Zero Trust access  
- HTTPS encryption  
- No open inbound ports  

---

## 🔹 Why Avoid Port Forwarding

Problems with port forwarding:

- Exposes your system directly to the internet  
- Vulnerable to scanning and automated attacks  
- Requires constant monitoring  
- Weak authentication increases risk  

---

## 🔹 Secure Architecture

**Internet → Cloudflare → Secure Tunnel → Blue Iris Server**

- No inbound ports open  
- Encrypted connection  
- Identity-based access control  

---

## 🔹 Blue Iris Web Server Setup

Basic configuration:

- Enable HTTPS  
- Use a non-default port  
- Disable HTTP if possible  
- Set strong authentication credentials  

---

## 🔹 Cloudflare Tunnel Benefits

- No port forwarding required  
- Internal IP is never exposed  
- Protection from direct inbound attacks  
- Adds an authentication layer via Zero Trust  

---

## 🔹 Mobile Access

Access Blue Iris using:

- Secure browser URL (Cloudflare-protected)  
- Blue Iris mobile app (when properly configured)  

---

## 🔹 Common Mistakes

- Leaving port 81 open to the internet  
- Using weak or reused passwords  
- Running without HTTPS  
- No access control or authentication layer  

---

## 📊 Related Networking Pages

- [Networking Overview](/networking/)
- [Cloudflare Tunnel](/networking/cloudflare-tunnel/)
- [Cloudflare Tunnel – Phase 1 Overview](/networking/phase1-overview/)
- [Cloudflare Tunnel – Phase 2 Setup](/networking/phase2-onsite-installation/)
- [Cloudflare Tunnel – Phase 3 Hardening](/networking/phase3-hardening/)

---

## 🔹 Final Thought

Remote access should be:

- Secure  
- Encrypted  
- Controlled  

Not simply “open and working.”
