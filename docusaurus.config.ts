import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Home Credit Developer Documentation",
  tagline: "Integrate your ecommerce system with Home Credit easily and provide your customers with a seamless payment experience.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://hc-docs.pages.dev", // TODO: replace with actual URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Algolia site verification
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification', // Or whatever name your tag uses
        content: '4C6B0500CCB5D6F7',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cs"],
    localeConfigs: {
      en: { label: "English", htmlLang: "en-US" },
      cs: { label: "Čeština", htmlLang: "cs-CZ" }
    }
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          // homeCreditApi: {
          //   specPath: 'api-docs-source/testopenapi.yaml',
          //   outputDir: 'docs/api/Reference',
          //   sidebarOptions: {
          //     groupPathsBy: 'tag',
          //     sidebarCollapsible: true,
          //     sidebarCollapsed: false,
          //   },
          // } satisfies OpenApiPlugin.Options,
          // psd2Api: {
          //   specPath: 'api-docs-source/openapi.yaml',
          //   outputDir: 'docs/api-psd2',
          //   sidebarOptions: {
          //     groupPathsBy: 'tag',
          //     sidebarCollapsible: true,
          //     sidebarCollapsed: false,
          //   },
          // } satisfies OpenApiPlugin.Options,
          // homeCreditApi: {
          //   specPath: 'api-docs-source/swaggerspec.yaml',
          //   outputDir: 'docs/api/Reference',
          //   sidebarOptions: {
          //     groupPathsBy: 'tag',
          //     sidebarCollapsible: true,
          //     sidebarCollapsed: false,
          //   },
          // } satisfies OpenApiPlugin.Options,
          homeCreditApi: {
            specPath: 'api-docs-source/openapispec.yaml',
            outputDir: 'docs/api/Reference',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
              sidebarCollapsible: false,
              sidebarCollapsed: false,
            },
          } satisfies OpenApiPlugin.Options,
        } as any,
      }
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: '2LFKCQ1DQW',

      // Public API key: it is safe to commit it
      apiKey: '0a0f61b5d7d13fbaec8b8456de829168',

      indexName: 'testCrawler',

      // Optional: see doc section below
      contextualSearch: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Home Credit Documentation",
      logo: {
        alt: "HC Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "apiReference",
          position: "left",
          label: "API Reference",
        },
        {
          type: "docSidebar",
          sidebarId: "widgetsSidebar",
          position: "left",
          label: "Widgets",
        },
        { to: "docs/contact", label: "Contact", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/documentation/button-quarter",
            },
            {
              label: "API reference",
              to: "docs/api/Reference/home-credit-partner-api-order-future",
            },
            {
              label: "Widgets",
              to: "/docs/widgets/install",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/homecredit/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/homecreditcz",
            },
            {
              label: "Home Credit",
              href: "https://www.homecredit.cz/",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/homecreditcz",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Home Credit a.s., Nové sady 996/25, 602 00 Brno`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
