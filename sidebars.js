const sidebars = {
  graniteLabsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },

    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        'projects/index',
      {
  type: 'category',
  label: 'Blue Iris 6',
  collapsed: false,
  items: [
    'blue-iris/docs/index',
    'blue-iris/docs/overview',
    'blue-iris/docs/documentation-map',
    'blue-iris/system-reference',
    'blue-iris/docs/installation',
  ],
},

    {
      type: 'category',
      label: 'Brand',
      collapsed: false,
      items: [
        'brand/index',
      ],
    },

    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/index',
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/index',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: [
        'research/index',
      ],
    },
  ],
};

export default sidebars;
