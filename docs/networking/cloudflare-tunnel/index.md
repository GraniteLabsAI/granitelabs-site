---
title: Cloudflare Tunnel
description: Secure remote access using Cloudflare Tunnel with zero trust architecture and edge protection.
image: /img/og/cloudflare-og.jpg
---

# 🌐 Cloudflare Tunnel


## 📌 Project
**GraniteLabs.ai – Secure Remote Access (Blue Iris)**  
**Status:** All Three Phases Complete

<img src="/img/cloudflare-tunnel-phase1-dark.png" alt="Cloudflare Tunnel Architecture" />

---

## 🎯 Objective

Replace traditional remote access methods with a modern Zero Trust architecture that provides secure, authenticated access to Blue Iris without exposing the internal network.

---

## 🧠 What This Replaces

| Old Method | Risk |
|-----------|------|
| Port forwarding | Exposes WAN IP and internal services |
| Direct WAN exposure | Vulnerable to scanning and attacks |
| VPN dependency | Complex setup, open inbound ports |

---

## ✅ What This Achieves

- No open inbound firewall ports
- WAN IP never exposed
- HTTPS enforced at Cloudflare
- Identity-based authentication required
- Outbound-only connector on internal network

---

## 🏗️ System Architecture
```text
Remote User
    │
    ▼
Cloudflare (DNS + HTTPS + Authentication)
    │
    ▼
Secure Tunnel (Outbound Only)
    │
    ▼
Blue Iris PC (cloudflared)
    │
    ▼
Blue Iris Web Server
```

---

## 📋 Three-Phase Implementation

| Phase | Purpose | Status |
|-------|---------|--------|
| [Phase 1 – Foundation](./phase1-overview) | Cloudflare setup, DNS, tunnel creation | ✅ Complete |
| [Phase 2 – Onsite Installation](./phase2-onsite-installation) | Connector install, tunnel activation, hostname mapping | ✅ Complete |
| [Phase 3 – Hardening](./phase3-hardening) | Zero Trust authentication, access control | ✅ Complete |

---

## ▶ Start Here

➡ [Phase 1 – Foundation](./phase1-overview)
