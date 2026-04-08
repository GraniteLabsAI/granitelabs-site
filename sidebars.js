const sidebars = {
  graniteLabsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'architecture/index',
      label: 'Architecture',
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
        // FOUNDATION
        'blue-iris/start-here',
        'blue-iris/installation',
        'blue-iris/how-to-add-a-camera',
        'blue-iris/blue-iris-ai-setup',

        // UNDERSTAND
        'blue-iris/overview',
        'blue-iris/system-architecture',
        'blue-iris/documentation-map',
        'blue-iris/system-reference',
        'blue-iris/tab-index',

        // REAL WORLD
        'blue-iris/real-world-operations',
        'blue-iris/real-config-examples',

        // OPTIMIZE
        'blue-iris/tuning',
        'blue-iris/detection-flow',
        'blue-iris/ai-tuning',
        'blue-iris/storage-architecture',
        'blue-iris/performance-optimization',
        'blue-iris/best-settings',
        'blue-iris/blue-iris-best-settings',
        'blue-iris/blue-iris-vs-nvr',
        
        // TROUBLESHOOT
        'blue-iris/fix-false-alerts',
        'blue-iris/alerts-not-working',
        'blue-iris/troubleshooting',

        // DEPLOY
        'blue-iris/remote-access',

        // CAMERA MODELS
        'blue-iris/reolink-rlc-810a',
        'blue-iris/reolink-rlc-843a',
        'blue-iris/axis-p1485-le',

        // FIELD
        'blue-iris/field-quick-sheet',
        'blue-iris/field-quick-sheet-print',
      ],
    },

    {
      type: 'doc',
      id: 'unifi',
      label: 'UniFi',
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
      link: {
        type: 'doc',
        id: 'networking/index',
      },
      items: [
        {
          type: 'category',
          label: 'Cloudflare Tunnel',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'networking/cloudflare-tunnel/index',
          },
          items: [
            'networking/cloudflare-tunnel/phase1-overview',
            'networking/cloudflare-tunnel/phase2-onsite-installation',
            'networking/cloudflare-tunnel/phase3-hardening',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'AI Systems',
      collapsed: false,
      items: [
        'ai-systems/index',
        'ai-inference/index',
        'searchable-hub/index',
        'chatgpt/index',
        'wildlife-specialist/index',
        'knowledge-monolith/index',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'research/index',
      },
      items: [
        'research/environmental-abatement-overview',
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

    {
      type: 'doc',
      id: 'brand/index',
      label: 'Brand System',
    },
  ],
};

export default sidebars;
