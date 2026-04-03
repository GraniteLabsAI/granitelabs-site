---
title: Cloudflare Tunnel – Phase 1 Overview
description: Phase 1 of Cloudflare Tunnel deployment covering initial setup, Zero Trust architecture, and secure connectivity design for Blue Iris.
image: /img/og/cloudflare-tunnel-phase1-og.jpg
---

# 🌐 Cloudflare Tunnel — Phase 1

<img src="/img/og/cloudflare-tunnel-phase1-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 📌 Project
**GraniteLabs.ai – Secure Remote Access (Blue Iris)**  
**Status:** Phase 1 Complete – Awaiting Onsite Installation (Phase 2)

<img src="/img/cloudflare-tunnel-phase1-dark.png" alt="Cloudflare Tunnel Phase 1 Diagram" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

---

## 🎯 Objective

Establish a secure, zero-port-forwarding remote access method to internal LAN services (Blue Iris) using Cloudflare Tunnel.

---

## 🧠 Architecture Goal

- Eliminate open ports on firewall  
- Avoid VPN dependency  
- Use Cloudflare Zero Trust for secure access  
- Route external HTTPS traffic → internal Blue Iris web server  

---

## 🌍 Domain Configuration

**Domain:** `granitelabs.ai`

### Completed Actions

- Domain added to Cloudflare  
- Free Cloudflare plan selected  
- DNS records imported:  
  - MX (Microsoft 365)  
  - TXT (SPF + MS verification)  
  - CNAME (autodiscover, www)  

### Nameservers
- ****.ns.cloudflare.com  
- *****.ns.cloudflare.com  

### Status

- ✅ Domain Active  
- ✅ DNS managed by Cloudflare  

---

## 🔐 Cloudflare Zero Trust Setup

- Accessed via: https://dash.cloudflare.com/one/  
- Guided onboarding skipped (manual setup preferred)  

---

## 🚇 Tunnel Configuration

**Location:**  
`Zero Trust → Networks → Connectors`

### Tunnel Details

- Name: `blueiris-tunnel`  
- Type: Cloudflared (outbound connector)  

### Status

- ✅ Tunnel created  
- ⛔ Connector not installed yet  

---

## 🖥️ Connector Preparation

**Platform:** Windows (64-bit)  
**Installer:** `cloudflared-windows-amd64.msi`

### Notes

- “amd64” = standard 64-bit (Intel + AMD)  
- No compatibility concerns  

### Target Device

- Blue Iris PC (Puget System)  

---

## 🔑 Authentication Token

- Generated in Cloudflare  
- Tied to `blueiris-tunnel`  
- Will be used in Phase 2 installation  

---

## 🔒 Security Planning (Deferred)

### Phase 2

- Cloudflare Access (Zero Trust)  
  - Email-based authentication  
  - Optional SSO / OTP  

### Future

- DMARC policy  
  - Align with M365 (SPF + DKIM)  

---

## 🌐 Planned Hostname
`bi.granitelabs.ai`

➡ Will route to Blue Iris local web server  

---

## 📊 Current System State

| Component | Status |
|----------|--------|
| Domain Active | ✅ |
| DNS via Cloudflare | ✅ |
| Tunnel Created | ✅ |
| Connector Installed | ❌ |
| Blue Iris Exposure | ❌ |
| Open Ports | ❌ |

---

## 🚧 Phase 2 (Onsite)

### Steps

1. Install `cloudflared` on Blue Iris PC  
2. Authenticate using tunnel token  
3. Bring tunnel online  
4. Create hostname:  
   - `bi.granitelabs.ai`  
5. Map to:  
   - `http://localhost:<BI_PORT>`  
6. Configure Cloudflare Access  
7. Test remote access  

---

## 🔐 Security Model

Internet  
↓  
Cloudflare (HTTPS + Authentication)  
↓  
Secure Tunnel (Outbound Only)  
↓  
Blue Iris PC (cloudflared)  
↓  
Blue Iris Web Server  

---

## 📝 Notes

- No port forwarding required  
- WAN IP is never exposed  
- HTTPS enforced via Cloudflare  
- Adds identity-based access layer  

---

## ▶ Next Step

Phase 1 is complete. Continue to the onsite implementation guide for connector installation, tunnel activation, hostname mapping, and Blue Iris service routing.

➡ **Continue to Phase 2:** [Phase 2 – Onsite Installation](./phase2-onsite-installation)

👉 Begin Phase 2 when onsite:

**Command:**  
`Start Phase 2`
