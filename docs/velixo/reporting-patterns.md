# Velixo – Reporting Patterns

---

## <span class="cube-icon cube-storage"></span> Overview

This page documents practical Velixo reporting patterns for building useful, repeatable, and maintainable Excel-based reports from Acumatica data.

The emphasis is on reports that are easy to understand, reliable to refresh, and valuable to operations and finance.

---

## 🎯 Objective

- Standardize useful report structures  
- Improve repeatability  
- Support job cost and financial reporting  
- Reduce formula sprawl and report fragility  
- Capture practical reporting patterns that work  

---

## 🧠 Key Concepts

- Structure first, formulas second  
- Reusable patterns are better than one-off workbooks  
- Velixo depends on Acumatica data design  
- GI structure often determines reporting success  
- Simpler reports are easier to maintain and trust  

---

## 🛠️ Core Reporting Patterns

### Summary + Detail Pattern
Use one summary section for high-level visibility and one detail section for drill-down.

Best for:
- Job cost summaries  
- Project financial review  
- Customer or contract analysis  

Benefits:
- Easy executive review  
- Clear path to supporting detail  
- Better balance between readability and depth  

---

### Parameter-Driven Pattern
Use input cells for:
- Project ID  
- Period  
- Branch  
- Company  
- Report date range  

Best for:
- Reusable templates  
- Operator-driven reports  
- Monthly reporting packs  

Benefits:
- Fewer duplicate workbooks  
- Easier refresh and reuse  
- Better consistency  

---

### Project Reporting Pattern
Center the report around:
- ContractCD / Project ID  
- Customer  
- Cost categories  
- Budget vs actual  
- Time period filters  

Best for:
- Job cost reporting  
- PM review  
- Contract performance tracking  

Benefits:
- Aligns operations with accounting data  
- Supports project-specific decision-making  
- Easy to expand later  

---

### Financial Snapshot Pattern
Use a high-level summary view with supporting sections below.

Best for:
- Income statement style reporting  
- Cash or AR visibility  
- Company-level monthly review  

Benefits:
- Easy leadership consumption  
- Better readability  
- Faster decision support  

---

### GI-Assisted Pattern
Use Generic Inquiries when standard Velixo functions do not expose the needed data cleanly.

Best for:
- Customer / project relationships  
- Custom dimensions  
- Cross-object lookups  
- Special reporting logic  

Benefits:
- Cleaner Excel formulas  
- Better maintainability  
- Less guesswork in workbook logic  

---

## 📊 Recommended Structure

### Strong Baseline
- Clear title  
- Input / parameter section at top  
- Summary section first  
- Detail section second  
- Notes / definitions section if needed  
- Consistent row and column logic  

---

## 🧠 Real-World Notes

- Many reporting problems are actually data structure problems  
- GI design is often the cleanest path when direct formulas become awkward  
- Project / job cost reporting usually needs clear Project ID handling from the start  
- Reports should answer business questions directly, not just expose raw data  
- A boring, repeatable workbook is usually better than a clever one that is hard to maintain  

---

## ⚠️ Common Mistakes

- Building reports with no standard layout  
- Using too many hard-coded references  
- Mixing summary and detail without structure  
- Overcomplicating formulas when a GI would solve the problem better  
- Creating workbooks that only one person can understand  
- Skipping definitions for important fields or assumptions  

---

## 📊 Related Pages

- [Overview](/velixo/overview/)  
- [System Reference](/velixo/system-reference/)  

---

## ✅ Result

This page provides a practical framework for building Velixo reports that are usable, repeatable, and aligned with real reporting needs.
