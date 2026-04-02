---
title: UniFi Network
description: UniFi access point and switching deployment for property-wide wireless coverage, operating downstream of an Araknis core switching infrastructure.
image: /img/og/unifi-og.jpg
---

# UniFi Network

![UniFi Network](/img/og/unifi-og.jpg)

Property-wide wireless coverage and zone switching built on UniFi hardware.
UniFi operates as the wireless layer and outbuilding sub-distribution,
downstream of an Araknis core switching and routing infrastructure.

---

## 🔹 Overview

The network runs a flat single-subnet architecture with no VLAN segmentation.
An Araknis router handles all gateway, DHCP, and firewall functions.
An Araknis 48-port PoE switch serves as the core distribution point —
connecting the Blue Iris server, cameras, fiber runs, and UniFi sub-switches.

UniFi hardware provides:
- Property-wide wireless access via a mixed WiFi 5 / WiFi 6 AP fleet
- Zone switching at the Well House (USW 16 PoE via fiber uplink)
- Compact PoE switching at the BirdBuddy location (USW Flex)
- Sub-distribution for areas not served directly by the Araknis 48-port

All UniFi devices are managed centrally through the UniFi Network Application
on a Cloud Key Gen2. All devices run current firmware.

---

## 🎯 Objectives

- Deliver seamless wireless roaming across all indoor and outdoor zones
- Extend switching to outbuildings via fiber backbone
- Maintain a clean flat topology with a static IP plan for stability
- Keep UniFi wireless management independent of Araknis core configuration
- Design for failure isolation — a fault in one zone does not affect others

---

## 🏗️ Architecture

### Final Topology
```
                INTERNET
                    │
          Araknis Router
      Gateway / DHCP / Firewall
                    │
        ┌───────────┴───────────┐
        │  Araknis 48-Port PoE  │
        │  Core Distribution    │
        └───────────┬───────────┘
                    │
   ┌────────────┬───┴────────┬────────────┬────────────┐
   │            │            │            │            │
Blue Iris    UniFi APs   Cameras      Fiber Link    Misc
Server        (PoE)        (PoE)           │
(Puget)                                    ↓
                                  Well House Switch
                                  USW 16 PoE
                                       │
                                 Cameras + AP
```

### Key Architecture Points

- Araknis router is the sole gateway and DHCP server for the entire network
- Araknis 48-port PoE is the core — all primary connections terminate here
- Blue Iris server and cameras connect directly to the Araknis 48-port
- UniFi switches are sub-distribution only — no routing role
- Fiber run from Araknis core (SFP) to Well House eliminates long copper runs
- Well House switch operates as a dumb Layer 2 extension — no DHCP, no routing
- UniFi APs run as an overlay on the Araknis network — no UniFi gateway required
- Araknis and UniFi are managed through separate interfaces

---

## 🔷 Core Configuration

### Araknis Router

**Role:** Gateway, DHCP server, firewall, internet routing. No switching complexity.

- Use a private /24 subnet on the LAN interface
- Configure a DHCP pool for dynamic clients (laptops, phones, temporary devices)
- Reserve the lower portion of the address range for static assignments — outside the DHCP pool
- Router handles firewall rules at the WAN boundary only

### Araknis 48-Port PoE Switch

**Role:** Central distribution. PoE for cameras, UniFi APs, and flex switches.

- Operates as flat Layer 2 — no VLANs
- PoE enabled per-port where required
- Unused services disabled
- All primary device connections terminate here

---

## 🗂️ IP Plan

Static IP assignments organized by device type for fast identification
and stable operation. All static addresses assigned outside the DHCP pool.

| Device Type | Block | Examples |
|---|---|---|
| Core Infrastructure | Lowest static block | Araknis router, Araknis switch |
| Blue Iris Server | Fixed static address | Puget Systems build |
| UniFi Devices | Next static block | Cloud Key, APs, USW switches |
| Cameras | Dedicated static block | Reolink, Axis units |
| Flex / Remote Switches | Upper static block | Well House USW 16 PoE |

**Rules:**
- Assign static IPs via DHCP reservation (preferred) or device-side static config
- Keep cameras in their dedicated block — simplifies Blue Iris troubleshooting
- Document every static assignment — no undocumented fixed IPs
- Never assign a static IP inside the DHCP pool range

---

## 🛠️ Hardware

### Switches

| Device | Location | Role | Uplink |
|---|---|---|---|
| Araknis 48-Port PoE | Main building | Core distribution | Araknis Router |
| USW Lite 16 PoE | Main building | Sub-distribution | Araknis 48-Port |
| USW 16 PoE | Well House | Outbuilding distribution | Fiber from Araknis 48-Port SFP |
| USW Flex | BirdBuddy area | Compact zone switching | USW Lite 16 PoE (PoE-in) |

### Access Points

| Device | Generation | Rating | Best Use |
|---|---|---|---|
| AC Mesh | WiFi 5 | Outdoor | Extended range, remote zones |
| AC Mesh Pro | WiFi 5 | Outdoor | Outdoor high-capacity zones |
| U6 Mesh | WiFi 6 | Outdoor | Outdoor WiFi 6 coverage |
| U6 Mesh Pro | WiFi 6 | Outdoor | Outdoor WiFi 6, high capacity |
| U6 Pro | WiFi 6 | Indoor | Indoor ceiling-mount, high performance |

**Notes:**
- All APs wired via PoE — no wireless mesh uplinks in use
- AC Mesh and all U6 Mesh units are weather-rated for outdoor installation
- U6 Pro is indoor ceiling-mount only
- Mixed WiFi 5 / WiFi 6 fleet — clients negotiate best available generation
- Cloud Key Gen2 manages all APs and UniFi switches

---

## 📍 AP Placement

| Location | AP Model | Mount | Notes |
|---|---|---|---|
| Attic | U6 Pro | Ceiling | Central coverage, upper floor |
| Study | U6 Pro | Ceiling | High-density indoor zone |
| Basement | U6 Mesh or AC Mesh | Wall / ceiling | Below-grade coverage |
| Garage | U6 Mesh | Wall or eave | Vehicle bay and workbench area |
| Pool | U6 Mesh Pro or AC Mesh Pro | Eave / pole | Outdoor, weather-rated |
| Patio | U6 Mesh or AC Mesh | Eave | Outdoor entertainment zone |
| Front Gate | AC Mesh | Pole / post | Extended range, entry point |
| Well House | AP via USW 16 PoE | Wall | Outbuilding zone, fiber-fed switch |
| Generator | Wired via USW 16 PoE | — | Device connectivity only |

**Placement principles:**
- Outdoor APs mounted at eave height or on dedicated poles
- Indoor APs ceiling-mounted for full omni coverage
- Adjacent APs intentionally overlap — supports seamless roaming
- Well House served entirely by the fiber-fed USW 16 PoE

---

## 🔌 Port Assignment — Araknis 48-Port Switch

Group device types into dedicated port blocks and document all assignments.
Consistent grouping makes faults faster to isolate and prevents accidental reuse.

**Recommended grouping strategy:**
- **Router uplink** — dedicated ports, clearly labeled, not reused
- **Blue Iris server + core infrastructure** — isolated from camera PoE load
- **Cameras** — grouped together; a fault in one camera stays contained
- **UniFi APs** — grouped together for clean PoE management
- **Fiber / remote switch uplinks** — fixed ports, not reassigned
- **Spare / expansion** — reserved, not patched until needed

**Why this matters:**
- Grouped camera ports make it easy to power-cycle or isolate a single camera
- Blue Iris server on dedicated ports keeps it away from camera PoE load
- Fiber uplinks on fixed ports prevent accidental disconnection during changes

---

## 🔗 Blue Iris Integration
```
PoE Cameras → Araknis 48-Port Switch → Blue Iris Server (Puget)
```

**Requirements:**
- All cameras wired directly to Araknis 48-port via PoE
- Blue Iris server NIC: 1 Gbps minimum — gigabit port required
- All cameras and server on the same subnet — no VLAN separation
- Cameras assigned static addresses in their dedicated IP block

**Key rule:** Camera traffic stays local to the switch. The router is not
involved in camera-to-server traffic. Do not route camera streams through
the gateway — this creates unnecessary load and a single point of failure.

**Related:** [Blue Iris System](/blue-iris/)

---

## 📡 UniFi AP Integration
```
Araknis 48-Port Switch → UniFi APs (PoE)
                               ↓
                     Managed by Cloud Key Gen2
```

**Design notes:**
- UniFi runs as a wireless overlay on the Araknis network
- No UniFi gateway required — Araknis router handles all routing and DHCP
- Cloud Key Gen2 manages AP adoption, configuration, and monitoring
- No VLANs required at current scale
- Keep configuration simple until performance baseline is confirmed
- SSID broadcast from all APs — clients roam transparently

---

## 🔧 Fiber to Well House
```
Araknis 48-Port (SFP port)
         ↓
  Fiber run (MM or SM)
         ↓
  USW 16 PoE (Well House)
         │
  ┌──────┴──────────┐
  │                 │
Camera(s)           AP
```

**Critical configuration:**
- Well House switch operates as a dumb Layer 2 extension — bridge only
- No DHCP server on the Well House switch
- No routing — all traffic forwarded back to Araknis core
- Devices at Well House receive IPs from the Araknis router DHCP pool
- Well House switch assigned a static address in the remote switch block
- Fiber type (MM or SM) determined by installed run — verify SFP modules match

**Failure behavior:**
If the fiber link fails, only the Well House zone is affected. Main building
cameras, APs, and all other devices continue operating normally.

---

## ⚙️ Optimization

### Roaming

- **Fast Roaming (802.11r)** enabled — reduces client handoff time between APs
- **BSS Transition** enabled — directs clients to stronger AP when signal degrades
- **Minimum RSSI: –75 dBm** — forces weak clients to roam rather than hold a distant connection

Clients that stick to a far AP cause degraded throughput and intermittent drops.
Minimum RSSI enforcement is the primary fix on a property this size.

### Channel Planning

- **2.4 GHz** — manual assignment: channels 1, 6, 11 on adjacent APs
- **5 GHz** — auto channel acceptable; assign manually if interference appears
- WiFi 6 clients benefit from OFDMA efficiency without degrading WiFi 5 clients

### Transmit Power

- **Outdoor APs** — high power acceptable in open space
- **Indoor APs** — medium power recommended; over-powered indoor APs cause sticky client behavior
- Reduce indoor transmit power if roaming between floors is poor

### Band Steering

- Enabled — pushes capable clients from 2.4 GHz to 5 GHz
- Verify cameras and 2.4 GHz-only IoT devices connect successfully after enabling

### Performance Rules

1. **Avoid bottlenecks** — camera-to-Blue Iris traffic is switch-local; keep it that way
2. **Use substreams in Blue Iris** — reduces bandwidth per camera, improves CPU headroom
3. **Balance AP transmit power** — outdoor APs on low/medium; avoid excessive overlap

---

## 🔒 Failure Isolation

The network is designed so failures do not cascade between zones.

| Failure | Impact | Everything Else |
|---|---|---|
| Fiber link to Well House | Well House zone only | Unaffected |
| Single AP failure | That AP's coverage area only | Unaffected |
| Single camera failure | That camera only | Unaffected |
| USW Flex (BirdBuddy) | BirdBuddy area only | Unaffected |

**Design principle:** Each branch of the topology is independently faulted.
The Araknis core switch is the single critical path — protect it accordingly
(UPS, physical security, no unnecessary config changes).

---

## 🔮 Future — Do Not Implement Yet

When scale or requirements demand it, these are the logical next steps:

- **VLANs** — segment cameras, IoT, and guest WiFi onto separate networks
- **2.5G / 10G uplinks** — upgrade Blue Iris server NIC and switch ports as camera count grows
- **NVR segmentation** — move camera traffic to a dedicated VLAN away from client traffic
- **AP fleet refresh** — migrate remaining AC Mesh (WiFi 5) units to U6 generation

Do not implement VLANs until the flat network baseline is fully stable
and a specific isolation requirement exists.

---

## 📊 Reference

### Key Settings — UniFi Network Application

| Setting | Path |
|---|---|
| AP radio / power config | Devices → [AP] → Settings → Radios |
| Fast Roaming | Networks → WiFi → [SSID] → Advanced |
| Minimum RSSI | Networks → WiFi → [SSID] → Advanced |
| Band Steering | Networks → WiFi → [SSID] → Advanced |
| PoE port control | Devices → [Switch] → Ports |
| Firmware update | Devices → [Device] → Settings → Manage Device |
| Topology view | Topology (left sidebar) |
| Client list and signal | Clients (left sidebar) |

### Hardware Summary

| Category | Devices |
|---|---|
| Gateway / Firewall | Araknis Router |
| Core Switch | Araknis 48-Port PoE |
| UniFi Switches | USW Lite 16 PoE, USW 16 PoE (Well House), USW Flex |
| UniFi APs | AC Mesh, AC Mesh Pro, U6 Mesh, U6 Mesh Pro, U6 Pro |
| Controller | Cloud Key Gen2 |

### Related Pages

- [Blue Iris System](/blue-iris/) — cameras served by this network
- [PoE](/poe/) — PoE power and cabling reference
- [Cloudflare Tunnel](/networking/cloudflare-tunnel/) — remote access over this infrastructure

---

## ⚠️ Notes

- UniFi Network Application manages UniFi devices only — Araknis is a separate management system
- USW Flex requires 802.3at (PoE+) on its uplink port to power downstream PoE-out ports; 802.3af will not work
- Fiber run to Well House bypasses copper distance limits — do not replace with copper
- Cloud Key Gen2 must remain online for UniFi management; APs continue operating if Cloud Key is unreachable
- AC Mesh units are WiFi 5 generation — plan gradual migration to U6 as hardware ages
- Never assign a static IP inside the DHCP pool — use DHCP reservations or assign outside the pool

---

## ✅ Result

A stable, property-wide flat network with an Araknis core handling all routing
and distribution. UniFi manages the wireless overlay and outbuilding sub-switching.
Fiber backbone to Well House. Mixed WiFi 5 / WiFi 6 AP fleet covering all indoor
zones, outdoor areas, and utility locations. Clean IP plan and port grouping
supports fast troubleshooting and clear failure isolation.
