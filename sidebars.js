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
  label: 'IT Core',
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
      label: 'Projects',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'projects/index',
      },
      items: [
        {
          type: 'category',
          label: 'Blue Iris 6',
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
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Brand',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'brand/index',
      },
      items: [],
    },

    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'architecture/index',
      },
      items: [],
    },

    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'guides/index',
      },
      items: [],
    },

    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'research/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
