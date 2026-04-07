---
title: GraniteLabs Projects
description: Real-world system builds — designed, tested, and documented by GraniteLabs.
image: /img/og/granitelabs-preview.jpg
---

# GraniteLabs Projects

<img src="/img/og/granitelabs-preview.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '28px'}} />

---

## <span class="cube-icon"></span> Overview

These are not concept projects.

Every system on this page was designed, built, tested, and is running in production. Each project replaced a failing or limiting system with a modern, self-managed, field-tested solution.

---

## 🌐 UniFi Property-Wide Network

**The problem:**  
An 8-year-old Araknis-Pakedge WiFi system had become unusable — constant disconnects, slow speeds, and unstable access point transitions. The system could only be managed by the original integrator. SnapAV's business model locks end users out of their own systems, making self-management nearly impossible.

**The build:**  
Full property-wide UniFi deployment replacing every access point and switch. 20+ APs covering attic, garage, pool, patio, front gate, generator, basement, well house, workbench, and study. Three switches: USW 16 PoE, USW Flex, USW Lite 16 PoE.

**The result:**  
All original issues resolved. Complete self-management with no integrator dependency. Widely available community support. The only remaining refinement is smooth roaming handoff between access points — an active fine-tuning project.

**Key discovery:**  
The client device (not the AP) controls roaming decisions. Resetting network settings on iPhone produced significant improvement.

**Note on the integrator:**  
The relationship remains excellent. The limitation is SnapAV's business model, not the integrator personally.

➡ [Full UniFi Documentation](/unifi)

---

## 🔗 Fiber to Well House

**The problem:**  
The well house was fed by aging Cat 5e ethernet cables with a history of performance issues and a prior physical repair. The access point at that location was underperforming, and the copper run created lightning surge vulnerability.

**The build:**  
Fiber run to the well house with a new UniFi switch and UPS backup. Fiber eliminated electrical surge risk entirely.

**The result:**  
Stable, high-performance connectivity. Lightning risk eliminated. Infrastructure is now future-proofed for additional devices.

---

## 📹 Blue Iris NVR System

**The problem:**  
The previous system was a LUMA NVR — aging hardware, no AI detection, limited remote viewing, and locked behind Control4. Remote access relied on outdated browser compatibility modes.

**The build:**  
Migration to Blue Iris v6 on a dedicated PC with NVIDIA RTX 4070 SUPER. ONNX AI using YOLOv8s with animal detection. Integrated multiple camera brands into one platform.

**The result:**  
Fully self-managed, AI-powered surveillance system with granular control and usable alerting. Remote access secured via Cloudflare Tunnel.

➡ [Full Blue Iris Documentation](/blue-iris/)

---

## 🌐 Cloudflare Tunnel — Zero Trust Remote Access

**The problem:**  
Remote access required open ports — a direct security vulnerability.

**The build:**  
Cloudflare Tunnel (Zero Trust). No open ports. No VPN. Deployed in a single session at no cost.

**The result:**  
Secure, encrypted remote access with no exposed attack surface. Simpler and more secure than the previous approach.

➡ [Full Cloudflare Documentation](/networking/cloudflare-tunnel/)

---

## 🧪 Active Projects

| Project | Status |
|---|---|
| UniFi roaming optimization | In progress — RSSI and transition tuning |
| Blue Iris AI tuning | Ongoing — model and confidence refinement |
| GraniteLabs documentation site | Active build |
| SEO development | Planned |

---

## 🧠 Design Principles

Every GraniteLabs project follows the same approach:

1. Identify the real problem — not the symptom  
2. Use best-in-class solutions that support self-management  
3. Build and test in production  
4. Document everything  
5. Eliminate dependencies on proprietary systems  

---

## ✅ Result

A collection of real-world systems that demonstrate practical, scalable, and self-managed technical design.
