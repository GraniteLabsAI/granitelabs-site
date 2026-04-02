---
title: GraniteLabs Searchable Hub
description: AI-powered tools for finding hidden settings and features inside complex software systems.
---

# GraniteLabs Searchable Hub

One of the most frustrating problems with complex software like Blue Iris is that 
critical settings are buried — sometimes three or four tabs deep with no search 
function to help you find them. The GraniteLabs Searchable Hub solves this with 
AI-powered indexing tools built specifically for the systems documented here.

## Blue Iris Tab Indexer

The Blue Iris Tab Indexer is a Python-based tool that systematically captures 
every tab and dialog in Blue Iris 6 using screenshots, extracts all visible 
text and settings using AI vision, and builds a fully searchable HTML index.

### How It Works

1. Launch the Tab Indexer on your Blue Iris machine
2. Open Blue Iris and navigate to each tab
3. Press **F9** to capture the current tab
4. Press **F10** when finished with a section
5. Press **F11** to generate the complete searchable HTML index

The indexer uses hotkeys so you stay in Blue Iris the entire time — no 
switching back and forth.

### What Was Indexed

A complete run of the Blue Iris Tab Indexer captured **47 tabs** across 
the entire Blue Iris 6 interface:

| Section | Tabs Captured | Items Found |
|---|---|---|
| Blue Iris Settings | 14 tabs | 500+ items |
| Camera Configuration | 12 tabs | 450+ items |
| AI & Detection | 4 tabs | 145 items |
| Alerts & Triggers | 4 tabs | 130 items |
| Status & Monitoring | 5 tabs | 115 items |
| Schedule & Automation | 3 tabs | 105 items |
| Other sections | 5 tabs | 150+ items |

**Total: 47 tabs, 1,600+ indexed settings and UI elements**

### Why This Matters

Blue Iris has hundreds of settings with no built-in search. Features like 
alert confirmation, PTZ auto-tracking, object tracking, and IoT integrations 
are buried in non-obvious locations. The Tab Indexer makes every setting 
findable in seconds.

### Live Index

→ [Blue Iris Tab Index](/blue-iris/tab-index/)

The live tab index is available in the Blue Iris documentation section. 
Search for any setting, checkbox, or feature by name to find exactly 
which tab and dialog it lives in.

## Scope

The Tab Indexer was built to support Blue Iris 6 and is designed to 
be extended to other systems in the GraniteLabs stack:

| System | Status |
|---|---|
| Blue Iris 6 | ✅ Complete — 47 tabs indexed |
| Acumatica | 🔄 Planned |
| Velixo | 🔄 Planned |
| UniFi | 🔄 Planned |

## Technical Stack

- **Language:** Python
- **Capture method:** Hotkey-triggered screenshot (F9/F10/F11)
- **AI processing:** Vision-based text extraction
- **Output:** Searchable HTML index
- **Resume support:** Saves progress — can stop and continue later
