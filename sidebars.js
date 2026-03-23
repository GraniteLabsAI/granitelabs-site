const sidebars = {
  graniteLabsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },

    {
      type: 'doc',
      id: 'icon-system',
      label: 'Icon System',
    },

    {
      type: 'category',
      label: 'Blue Iris',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'blue-iris/index',
      },
      
    items: [
  'blue-iris/overview',
  'blue-iris/documentation-map',
  'blue-iris/system-reference',
  'blue-iris/installation',
  'blue-iris/tab-index',
  'blue-iris/tuning',
  'blue-iris/reolink-rlc-810a',
  'blue-iris/reolink-rlc-843a',
  'blue-iris/axis-p1485-le',
  'blue-iris/ai-tuning',
  'blue-iris/storage-architecture',
  'blue-iris/troubleshooting',
  'blue-iris/alerts-not-working',
  'blue-iris/performance-optimization',
  'blue-iris/field-quick-sheet',
  'blue-iris/system-architecture',
  'blue-iris/detection-flow',
  'blue-iris/field-quick-sheet-print',
],
      
    },

{
  type: 'category',
  label: 'Acumatica',
  collapsed: false,
  link: {
    type: 'doc',
    id: 'acumatica/index',
  },
  items: [
    'acumatica/overview',
    'acumatica/system-reference',
    'acumatica/practical-guide',
  ],
},

{
  type: 'category',
  label: 'Velixo',
  collapsed: false,
  link: {
    type: 'doc',
    id: 'velixo/index',
  },
  items: [
    'velixo/overview',
    'velixo/system-reference',
    'velixo/reporting-patterns',
  ],
},
    
    {
      type: 'category',
      label: 'IT Core Systems',
      collapsed: false,
      items: [
        'poe',
        'power-protection',
        'satellite',
        'cloud',
        'telemetry',
        'alerting',
        'logging',
        'database',
      ],
    },

    {
      type: 'category',
      label: 'Networking',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Cloudflare Tunnel',
          collapsed: false,
          items: [
            'networking/cloudflare-tunnel/phase1-overview',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'AI & Automation',
      collapsed: false,
      items: [
        'ai-systems/index',
        'ai-inference/index',
        'searchable-hub/index',
        'wildlife-specialist/index',
        'knowledge-monolith/index',
        'chatgpt/index',
      ],
    },

    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'projects/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
