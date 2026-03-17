 // @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Granite Labs',
  tagline: 'Searchable Deployment Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://granitelabsai.github.io',
  baseUrl: '/granitelabs-site/',

  organizationName: 'GraniteLabsAI',
  projectName: 'granitelabs-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
   colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Granite Labs',
      logo: {
        alt: 'Granite Labs Logo',
        src: 'img/cube_1024_master.png',
        height: 40,
        width: 40,
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
};

export default config;
