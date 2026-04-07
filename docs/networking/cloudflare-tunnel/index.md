---
title: Cloudflare Tunnel
description: Secure remote access using Cloudflare Tunnel with zero trust architecture and edge protection.
image: /img/og/cloudflare-tunnel-og.jpg
---

# 🌐 Cloudflare Tunnel

<img src="/img/og/cloudflare-tunnel-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## <span class="cube-icon cube-network"></span> Project

**GraniteLabs.ai – Secure Remote Access (Blue Iris)**  
**Status:** All Three Phases Complete

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

## <span class="cube-icon cube-network"></span> System Architecture

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
