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
        {
          type: 'category',
          label: 'Blue Iris 6',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'blue-iris/index',
              label: 'Overview',
            },
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
      items: [
        'brand/index',
      ],
    },

    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/index',
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/index',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/index',
      ],
    },
  ],
};

export default sidebars;
