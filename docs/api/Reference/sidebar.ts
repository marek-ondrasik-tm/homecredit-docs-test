import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/Reference/loanit-application-financing",
    },
    {
      type: "category",
      label: "financing-v1",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/Reference/create-using-post-3",
          label: "create (v1)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/get-using-get-7",
          label: "get (v1)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/cancel-using-put",
          label: "cancel (v1)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/change-application-order-using-put",
          label: "change order",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/deliver-using-put",
          label: "deliver (v1)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/send-order-items-using-put",
          label: "send",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/get-health-using-get",
          label: "getHealth (v1)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/calculate-installment-program-using-post",
          label: "calculateInstallmentProgram",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/calculate-installment-program-down-payments-using-post",
          label: "calculateInstallmentProgramDownPayments",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/calculate-installment-programs-using-post",
          label: "calculateInstallmentPrograms",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/get-using-get-9",
          label: "get order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/precheck-using-post",
          label: "precheck (v1)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/precheck-using-post-2",
          label: "precheck scorings (v1)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "financing-v2",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/Reference/get-applications-using-get",
          label: "search",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/create-using-post-2",
          label: "create (v2)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/get-application-results-using-get",
          label: "get application results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/get-using-get-6",
          label: "get (v2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/cancel-using-post-1",
          label: "cancel (v2)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/ship-order-using-post",
          label: "setStatus",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/get-application-result-using-get",
          label: "get application result",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/get-health-using-get-2",
          label: "getHealth (v2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/calculate-offers-using-post-1",
          label: "calculateOffers (v2)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/precheck-using-post-1",
          label: "precheck (v2)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "financing-v3",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/Reference/create-using-post-4",
          label: "create (v3)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/deliver-using-put-1",
          label: "deliver (v3)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/ship-using-put",
          label: "ship",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/get-using-get-8",
          label: "get (v3)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/cancel-using-put-1",
          label: "cancel (v3)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/Reference/get-health-using-get-1",
          label: "getHealth (v3)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/Reference/calculate-offers-using-post",
          label: "calculateOffers (v3)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/Reference/get-register-using-get",
          label: "getRegister",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
