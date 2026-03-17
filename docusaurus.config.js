  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Granite Labs',
      logo: {
        alt: 'Granite Labs Logo',
        src: 'img/cube_1024_master.png',
        height: 32,
        width: 32,
      },
      items: [
        {
          href: 'https://github.com/GraniteLabsAI/granitelabs-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Granite Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
