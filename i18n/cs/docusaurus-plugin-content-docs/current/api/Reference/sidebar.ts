import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/api/Reference/home-credit-partner-api-order-future",
    },
    {
      type: "category",
      label: "Security",
      link: {
        type: "doc",
        id: "current/api/Reference/security",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/login-partner",
          label: "Přihlášení partnera",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Application resources",
      link: {
        type: "doc",
        id: "current/api/Reference/application-resources",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/create-application",
          label: "Vytvořit aplikaci",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/Reference/mark-order-as-shipped",
          label: "Označit objednávku jako odeslanou",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/api/Reference/mark-order-as-delivered",
          label: "Označit objednávku jako doručenou",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/api/Reference/cancel-application",
          label: "Zrušit žádost",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "current/api/Reference/get-application",
          label: "Získat aplikaci",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health check",
      link: {
        type: "doc",
        id: "current/api/Reference/health-check",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/api-status-check",
          label: "Kontrola stavu API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Scoring resources",
      link: {
        type: "doc",
        id: "current/api/Reference/scoring-resources",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/run-precheck",
          label: "Spustit předběžnou kontrolu",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/Reference/run-multi-precheck",
          label: "Spustit multiPrecheck",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/Reference/get-multi-precheck-result",
          label: "Získejte výsledky více předběžných kontrol",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/api/Reference/oznameni-vysledku",
          label: "Oznámení výsledku",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Installments calculator resources",
      link: {
        type: "doc",
        id: "current/api/Reference/installments-calculator-resources",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/calculate-installment-programs-offer",
          label: "Vypočítat nabídku splátkového programu",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/Reference/calculate-installment-program-detail",
          label: "Vypočítat podrobnosti splátkového programu",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/Reference/calculate-installment-programs-down-payments",
          label: "Vypočítat splátkové programy a zálohy",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "JavaScript widget integration",
      link: {
        type: "doc",
        id: "current/api/Reference/java-script-widget-integration",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/api-health-check",
          label: "Kontrola stavu API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Merchantsite resources",
      link: {
        type: "doc",
        id: "current/api/Reference/merchantsite-resources",
      },
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "current/api/Reference/application-notification",
          label: "Oznámení o podání žádosti",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
