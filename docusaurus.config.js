// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nodefusion Account User Manual',
  tagline: 'NodefusionAccount.UserManual',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://account-manual.nodefusion.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nodefusion', // Usually your GitHub org/user name.
  projectName: 'NodefusionAccount.UserManual', // Usually your repo name.

  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nodefusion/NodefusionAccount.UserManual/tree/main/',
        },
        gtag: {
          trackingID: 'G-RKP1Z2TM6J'
        },
        googleTagManager: {
          containerId: 'GTM-W56JJCVG'
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nodefusion-account.png',
      navbar: {
        title: 'Nodefusion Account User Manual',
        logo: {
          alt: 'Nodefusion Account',
          src: 'img/nfnaccount-heading-logo-light.svg',
          srcDark: 'img/nfnaccount-heading-logo-dark.svg',
        },
        items: [
          {
            href: 'https://github.com/Nodefusion/NodefusionAccount.UserManual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'appid',
        apiKey: 'apikey',
        indexName: 'indexname',
        insights: true,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Nodefusion',
                href: 'https://www.nodefusion.com/',
              },              
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Nodefusion',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/Nodefusion',
              },
              {
                label: 'X',
                href: 'https://x.com/Nodefusion',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Nodefusion Account',
                href: 'https://login.nodefusion.com/'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Nodefusion',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nodefusion`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
