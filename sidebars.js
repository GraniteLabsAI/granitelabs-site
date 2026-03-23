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
