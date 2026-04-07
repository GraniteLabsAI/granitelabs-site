---
title: Power Protection Systems
description: Power protection strategies including UPS sizing, surge protection, and electrical reliability for stable system operation.
image: /img/projects/power-protection-icon.png
---

[← Back to Icon System](/icon-system/)

# Power Protection

<img src="/img/projects/power-protection-icon.png" style={{width: '180px', display: 'block', margin: '0 auto 24px'}} />

---

## <span class="cube-icon cube-storage"></span> Overview
Power protection ensures system stability during outages, surges, and electrical inconsistencies.

This includes UPS systems, surge protection layers, and runtime planning to maintain continuous operation.

---

## 🎯 Scope

- UPS sizing and load planning  
- Surge protection (layered approach)  
- Runtime strategy and shutdown planning  

---

## 🧠 Key Concepts

- Power instability can cause system failures, data corruption, and hardware damage  
- UPS systems provide both backup power and power conditioning  
- Surge protection should be layered (service entrance + device level)  
- Runtime must align with actual shutdown or continuity requirements  

---

## <span class="cube-icon cube-storage"></span> System Design

### UPS Sizing
- Calculate total load (watts, not just VA)  
- Include headroom (20–30%)  
- Account for startup surge if applicable  

---

### Surge Protection
- Whole-building surge protection (primary layer)  
- Rack or device-level protection (secondary layer)  
- Protect network, cameras, and server hardware  

---

### Runtime Strategy
- Short runtime → graceful shutdown  
- Medium runtime → ride-through outages  
- Long runtime → generator integration  

---

## ⚠️ Common Mistakes

- Undersizing UPS capacity  
- Ignoring total system load  
- No surge protection at service entrance  
- Assuming UPS = surge protection (it is not enough alone)  
- Not testing runtime under real load  

---

## 📊 Related Systems

- [Storage Architecture](/blue-iris/storage-architecture/)  
- [Performance Optimization](/blue-iris/performance-optimization/)  
- [Networking](/networking/)  

---

## ✅ Result
A stable power protection strategy that prevents downtime, protects equipment, and ensures predictable system behavior during electrical events.
