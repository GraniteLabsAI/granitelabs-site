---
title: System Architecture
description: Full infrastructure architecture for a property-scale deployment — surveillance, networking, ERP, remote access, and AI running as an integrated system.
---

# System Architecture

A structured overview of how all major infrastructure components connect,
communicate, and operate as a unified system.

---

## 🔹 Overview

This deployment runs multiple interdependent systems across a single property.
Each system is purpose-built for its function, connected through a shared
network core, and designed so that a failure in one layer does not cascade
into others.

The architecture is organized into four layers:

- **Network layer** — physical infrastructure, switching, wireless, and internet
- **Security layer** — surveillance, AI detection, and recording
- **Business layer** — ERP, reporting, and financial systems
- **Access layer** — remote access, zero trust, and edge security

Each layer has clear boundaries and defined integration points.

---

## 🎯 Design Principles

### Engineered

Every component exists for a specific reason. Nothing is installed speculatively.
Configuration decisions are documented with rationale, not assumed.

### Modular

Systems are decoupled where possible. The surveillance system does not depend
on the ERP. The network does not depend on the remote access layer. A failure
or change in one module does not require changes in another.

### Scalable

The architecture supports expansion without redesign. Additional cameras,
access points, switches, and services can be added within the existing
topology. Fiber backbone, PoE switching, and flat network design provide
headroom for growth.

### Local-First

Core functions — surveillance recording, AI detection, network switching —
run entirely on local hardware. Internet connectivity enhances the system
(remote access, cloud ERP) but is not required for local operation.

### Failure-Isolated

Each branch of the topology fails independently. A camera outage affects
that camera. A switch outage affects that switch's zone. Internet loss
suspends remote access but does not affect local recording or networking.

---

## 🏗️ Infrastructure Diagram
```
