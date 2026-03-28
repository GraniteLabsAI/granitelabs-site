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
```

---

## ⚙️ Cloudflare Access Configuration

### Application Setup

**Location:**
`Zero Trust → Access → Applications`

| Setting | Value |
|--------|-------|
| Type | Self-hosted |
| Name | Blue Iris Access |
| Domain | `bi.granitelabs.ai` |

---

### Access Policy

**Initial configuration:**

| Setting | Value |
|--------|-------|
| Action | Allow |
| Rule | Email-based |
| Example | `*********@gmail.com` |

---

### Authentication Method

**Recommended:**
- One-Time Passcode (OTP via email)

**Optional:**
- Google SSO
- Microsoft SSO

---

### Session Settings

| Setting | Value |
|--------|-------|
| Duration | 24 hours |
| Re-authentication | Enforced |

---

## 🔒 Security Controls Achieved

- Identity-based access
- Encrypted HTTPS traffic
- No anonymous access
- No open ports
- Controlled hostname entry point

---

## ✅ Validation Checklist

Before considering Phase 3 complete:

- [ ] Login prompt appears at `bi.granitelabs.ai`
- [ ] Unauthorized users are blocked
- [ ] Authorized users gain access
- [ ] No direct IP access possible

---

## 📊 Expected State After Phase 3

| Component | Status |
|----------|--------|
| Authentication Required | ✅ |
| Tunnel Secured | ✅ |
| Anonymous Access | ❌ |
| Open Ports | ❌ |

---

## 🔭 Future Enhancements

- SSO integration (Microsoft / Google)
- Multi-user access policies
- Logging and audit tracking
- Additional services behind tunnel
- Role-based access control

---

## ▶ Phase 3 Complete

The Cloudflare Tunnel deployment is now fully operational with Zero Trust access controls enforced. The system eliminates traditional attack surfaces, provides controlled authenticated access, and maintains full internal network isolation.

This serves as the **GraniteLabs reference implementation** for secure remote access across all future systems.

⬅ **Back to Phase 2:** [Phase 2 – Onsite Installation](./phase2-onsite-installation)  
⬅ **Back to Phase 1:** [Phase 1 – Overview](./phase1-overview)---
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
```

## ▶ Next Step

Phase 3 completes the security hardening of the Cloudflare Tunnel and brings the system to a production-ready state with Zero Trust access controls enforced.

⬅ **Back to Phase 2:** [Phase 2 – Onsite Installation](./phase2-onsite-installation)  
⬅ **Back to Phase 1:** [Phase 1 – Overview](./phase1-overview)
