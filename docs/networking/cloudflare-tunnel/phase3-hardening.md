---
title: Cloudflare Tunnel – Hardening & Zero Trust Access
description: Advanced configuration, optimization, and production deployment considerations for Cloudflare Tunnel.
image: /img/og/cloudflare-tunnel-phase3-og.jpg
---

# 🔐 Cloudflare Tunnel — Phase 3 (Hardening & Zero Trust Access)

<img src="/img/og/cloudflare-tunnel-phase3-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 📌 Project
**GraniteLabs.ai – Secure Remote Access (Blue Iris)**  
**Status:** Hardening and production security configuration

<img src="/img/cloudflare-tunnel-phase3-dark.png" alt="Cloudflare Tunnel Phase 3 Diagram" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

---

## 🎯 Objective

Apply Zero Trust security controls to protect access to the Blue Iris system exposed through the Cloudflare Tunnel.

---

## 🧠 Phase 3 Goal

- Enforce authentication before access  
- Restrict who can reach Blue Iris  
- Eliminate anonymous exposure  
- Apply identity-based security controls  
- Prepare system for long-term production use  

---

## 🔐 Core Security Model

All access to Blue Iris must pass through Cloudflare authentication before reaching the tunnel.

```text
Remote User
    │
    ▼
Cloudflare Access (Authentication Required)
    │
    ▼
Cloudflare Tunnel
    │
    ▼
Blue Iris Web Server
