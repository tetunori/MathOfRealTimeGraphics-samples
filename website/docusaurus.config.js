// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Samples for "Math of Real-time Graphics"📚',
  tagline: 'UNOFFICIAL sample viewer for the book "Mathmatics of Real-Time Graphics"📚',
  url: 'https://tetunori.github.io/MathOfRealTimeGraphics-samples/',
  baseUrl: '/MathOfRealTimeGraphics-samples/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tetunori', // Usually your GitHub org/user name.
  projectName: 'MathOfRealTimeGraphics-samples', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['jp', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      jp: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja',
        calendar: 'gregory',
        path: 'jp',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Top',
        items: [
          {
            type: 'doc',
            docId: 'top',
            position: 'left',
            label: 'Samples',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }, 
          {
            href: 'https://github.com/tetunori/MathOfRealTimeGraphics-samples',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Samples',
                to: '/docs/top',
              },
              {
                label: 'Others',
                to: '/docs/others',
              },
            ],
          },
          {
            title: 'Links on the Book',
            items: [
              {
                label: 'Official Site',
                href: 'https://gihyo.jp/book/2022/978-4-297-13034-3',
              },
              {
                label: 'Author Twitter',
                href: 'https://twitter.com/hayamatomoe',
              },
            ],
          },
          {
            title: 'About me',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tetunori/MathOfRealTimeGraphics-samples',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tetunori_lego',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tetsunori Nakayama.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['glsl'],
      },
    }),
};

module.exports = config;
