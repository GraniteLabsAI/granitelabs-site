---
title: GraniteLabs Projects
description: Real-world system builds — designed, tested, and documented by GraniteLabs.
---

# GraniteLabs Projects

These are not concept projects. Every system on this page was designed, built, tested, 
and is running in production. Each project replaced a failing or limiting system with 
a modern, self-managed, field-tested solution.

## UniFi Property-Wide Network

**The problem:** An 8-year-old Araknis-Pakedge WiFi system had become unusable — 
constant disconnects, slow speeds, and unstable access point transitions. The system 
could only be managed by the original integrator. SnapAV's business model locks end 
users out of their own systems, making self-management nearly impossible.

**The build:** Full property-wide UniFi deployment replacing every access point and 
switch. 20+ APs covering attic, garage, pool, patio, front gate, generator, basement, 
well house, workbench, and study. Three switches: USW 16 PoE, USW Flex, USW Lite 16 PoE.

**The result:** All original issues resolved. Complete self-management with no 
integrator dependency. Widely available community support. The only remaining 
refinement is smooth roaming handoff between access points — an active fine-tuning 
project. Key discovery: the client device (not the AP) controls roaming decisions. 
Resetting network settings on iPhone produced significant improvement.

**Note on the integrator:** The relationship remains excellent. The limitation is 
SnapAV's business model, not the integrator personally. They simply cannot give 
end users access to the management software.

→ [Full UniFi Documentation](/unifi)

---

## Fiber to Well House

**The problem:** The well house was fed by aging Cat 5e ethernet cables with a history 
of performance issues and a prior physical repair. The access point at that location 
was underperforming, and the copper run created lightning surge vulnerability for 
connected equipment.

**The build:** Fiber run to the well house with a new UniFi switch and UPS backup. 
Fiber eliminated the electrical surge risk entirely. The new switch provides abundant 
PoE ports for current and future devices.

**The result:** Stable, high-performance connectivity at the well house. Lightning 
surge risk eliminated. Future-proofed for additional cameras, access points, or PoE 
lighting without infrastructure changes.

---

## Blue Iris NVR System

**The problem:** The previous system was a LUMA NVR from the original integrator — 
aging hardware with no AI detection, almost no remote viewing capability, and 
management locked behind Control4. Remote access relied on Internet Explorer 
compatibility mode in Edge. SnapAV's own instructions for this were incorrect 
and outdated.

**The build:** Full migration to Blue Iris v6 on a dedicated PC with an NVIDIA 
RTX 4070 SUPER. Built-in ONNX AI running yolov8s with animal detection. 
Successfully integrated cameras from multiple manufacturers: Reolink, Luma, 
Axis, Amcrest, and Hikvision — all running simultaneously on one platform.

**The result:** A fully self-managed, AI-powered camera system with granular 
control over every setting. Real-world alert system that is actually usable 
in daily operation. Remote access via Cloudflare Tunnel. No integrator 
dependency. No proprietary lock-in.

→ [Full Blue Iris Documentation](/blue-iris/)

---

## Cloudflare Tunnel — Zero Trust Remote Access

**The problem:** Remote access to Blue Iris previously required an open port — 
a direct security vulnerability with no authentication layer between the 
internet and the NVR system.

**The build:** Cloudflare Tunnel (Zero Trust) replacing open port forwarding. 
No open ports. No VPN infrastructure to manage. Setup completed in a single 
session at no cost.

**The result:** Secure, encrypted remote access to Blue Iris from anywhere. 
Free to implement and operate. Eliminated the attack surface entirely. 
An unusual combination: a genuine security upgrade that was also easier 
and cheaper than what it replaced.

→ [Full Cloudflare Documentation](/networking/cloudflare-tunnel/)

---

## Active Projects

| Project | Status |
|---|---|
| UniFi roaming optimization | In progress — fine-tuning RSSI and BSS transition |
| Blue Iris AI tuning | Ongoing — confidence threshold and model refinement |
| GraniteLabs documentation site | Active build — this site |
| SEO development | Planned |

---

## Design Principles

Every GraniteLabs project follows the same approach:

1. **Identify the real problem** — not the symptom
2. **Research best-in-class solutions** — that support self-management
3. **Build and test in production** — no staging environments
4. **Document everything** — so it can be reproduced, improved, or handed off
5. **Eliminate dependencies** — on integrators, proprietary systems, or locked software
