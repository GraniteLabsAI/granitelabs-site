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
          items: [
            'blue-iris/index',
            'blue-iris/overview',
            'blue-iris/installation',
          ],
        },
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
  ],
};

export default sidebars;
