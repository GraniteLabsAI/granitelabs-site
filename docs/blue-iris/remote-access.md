---
title: Blue Iris Remote Access (Secure Setup Without Port Forwarding)
description: How to access Blue Iris remotely using secure methods like Cloudflare Tunnel. Avoid port forwarding and reduce security risks.
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris Remote Access (Secure Setup)

## 🔹 Overview

Remote access is one of the most important — and most risky — parts of a Blue Iris system.

Traditional setup:
- Port forwarding
- Exposing Blue Iris directly to the internet

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

- Exposes your system to the internet
- Vulnerable to scanning and attacks
- Requires constant monitoring
- Weak authentication risks

---

## 🔹 Secure Architecture

**Internet → Cloudflare → Secure Tunnel → Blue Iris Server**

- No inbound ports open
- Encrypted connection
- Access controlled through identity

---

## 🔹 Blue Iris Web Server Setup

Basic configuration:

- Enable HTTPS
- Use a secure port (non-default)
- Disable HTTP if possible
- Set strong authentication

---

## 🔹 Cloudflare Tunnel Benefits

- No port forwarding required
- Hides internal IP
- Protects against direct attacks
- Adds authentication layer

---

## 🔹 Mobile Access

Access Blue Iris using:

- Web browser via secure URL
- Blue Iris mobile app (if configured properly)

---

## 🔹 Common Mistakes

- Leaving port 81 open to the internet
- Weak passwords
- No HTTPS encryption
- No access control

---

## 🔹 Final Thought

Remote access should be:

- Secure
- Encrypted
- Controlled

Not simply “open and working.”
