import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/Reference/hc-oneclick-api-installments",
    },
    {
      type: "category",
      label: "API Specification",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/Reference/login-partner",
          label: "Login partner",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
