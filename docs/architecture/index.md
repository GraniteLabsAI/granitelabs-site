---
title: title: System Architecture (Blue Iris, Networking, AI & Infrastructure)
description: Complete system architecture covering Blue Iris surveillance, AI detection, secure networking, Cloudflare Tunnel remote access, and real-world infrastructure design.
image: /img/og/blueiris-system-architecture-og.jpg
---

# System Architecture

<img src="/img/og/blueiris-system-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## <span class="cube-icon"></span> Overview

A structured view of how all major infrastructure components connect,
communicate, and operate as a unified system.

This deployment runs multiple interdependent systems across a single property.
Each system is purpose-built, connected through a shared network core, and
designed so failures do not cascade across layers.

---

## 🧠 Architecture Layers

The system is organized into four primary layers:

### Network Layer
- Switching, routing, and wireless infrastructure  
- Fiber backbone and PoE distribution  
- Internet connectivity and core network services  

---

### Security Layer
- Blue Iris NVR system  
- Camera infrastructure (Reolink, Axis, Luma, etc.)  
- AI detection (YOLO / CodeProject / ONNX)  
- Local recording and event processing  

---

### Business Layer
- Acumatica ERP  
- Velixo reporting  
- Financial and operational data systems  

---

### Access Layer
- Cloudflare Tunnel  
- Zero Trust authentication  
- Secure remote access to internal systems  

---

## 🎯 Design Principles

### Engineered
Every component exists for a defined purpose.  
No speculative deployments.

---

### Modular
Systems are decoupled where possible.

- Surveillance does not depend on ERP  
- Network does not depend on remote access  
- Changes in one system do not require global changes  

---

### Scalable
Supports expansion without redesign.

- Additional cameras  
- Additional APs and switches  
- Expanded storage and compute  

---

### Local-First
Core systems operate locally:

- Surveillance recording  
- AI detection  
- Network switching  

Internet enhances — but does not control — the system.

---

### Failure-Isolated
Failures are contained:

- Camera failure → isolated  
- Switch failure → zone-level impact  
- Internet failure → remote access only  

---

## 🏗️ Infrastructure Diagram

```text
                INTERNET
                    │
        ┌───────────▼───────────┐
        │   Cloudflare (Access) │
        └───────────┬───────────┘
                    │
            Secure Tunnel
                    │
        ┌───────────▼───────────┐
        │     Network Core      │
        │  (Switching / VLAN)   │
        └───────┬───────┬───────┘
                │       │
         ┌──────▼───┐   │
         │ Blue Iris│   │
         │   Server │   │
         └──────┬───┘   │
                │       │
        ┌───────▼───────▼───────┐
        │ Cameras / APs / Devices│
        └───────────────────────┘

        ┌───────────────────────┐
        │ Business Systems       │
        │ (Acumatica / Velixo)   │
        └───────────────────────┘

---

## 📊 Related Systems

- [Blue Iris Setup Guide](/blue-iris/)
- [Cloudflare Tunnel](/networking/cloudflare-tunnel/)
- [AI Detection System](/ai-systems/)
- [Networking Overview](/networking/)
