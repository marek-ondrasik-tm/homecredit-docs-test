import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-psd2/home-credit-psd-2-api",
    },
    {
      type: "category",
      label: "Security",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-psd2/exchange-code-for-token",
          label: "Exchange code for token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "My contracts",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-psd2/list-of-contracts",
          label: "List of contracts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-psd2/transactions-on-contract",
          label: "Transactions on contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-psd2/initialize-payment",
          label: "Initialize payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-psd2/authorize-payment",
          label: "Authorize payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-psd2/cancel-payment",
          label: "Cancel payment",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
