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

  ],
};

export default sidebars;
