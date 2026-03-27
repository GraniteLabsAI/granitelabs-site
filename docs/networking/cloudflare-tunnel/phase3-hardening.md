---
title: Phase 3 – Hardening & Zero Trust Access
sidebar_label: Phase 3 – Hardening
description: Secure the Cloudflare Tunnel with Zero Trust policies, authentication, and controlled access to Blue Iris.
---

# 🔐 Cloudflare Tunnel — Phase 3 (Hardening)

## 📌 Project
**GraniteLabs.ai – Secure Remote Access (Blue Iris)**  
**Status:** Hardening and production security configuration

<img src="/img/cloudflare-tunnel-phase3-dark.png" alt="Cloudflare Tunnel Phase 3 Diagram" />

---

## 🎯 Objective

Apply Zero Trust security controls to protect access to the Blue Iris system exposed through the Cloudflare Tunnel.

---

## 🧠 Phase 3 Goal

- enforce authentication before access  
- restrict who can reach Blue Iris  
- eliminate anonymous exposure  
- apply identity-based security controls  
- prepare system for long-term production use  

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
