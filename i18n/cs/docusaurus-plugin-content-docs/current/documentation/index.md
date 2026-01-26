# Home Credit on-line: Základní informace pro partnerské e-shopy

- Rozhraní pro platební metodu HC On-line je **REST API**, kde se pro veškerou komunikaci (dotazy - requesty a odpovědi - response) a popis dat využívá notace JSON.
- **Technická dokumentace** k API (dále TD) a základní popis fungování platební metody je k nalezení na [zde](../api/Reference/home-credit-partner-api-order-future)
- Veřejně přístupná **repository s podkladovými daty** je k dispozici na https://github.com/homecreditcz, najdete zde:
  - **Tuto příručku k veřejnému API** včetně návodů a vzorových dat
  - **Kalkulačku splátek** ve formě javascriptového widgetu ([*widget-calculator*](../widgets/install))
  - **PHP skript** obstarávající základní funkcionalitu nezbytnou pro integraci HC platby na váš e-shop ([*php-script*](https://github.com/homecreditcz/php-script))
  - **PHP knihovnu** obstarávající základní funkcionalitu nezbytnou pro integraci HC platby na váš e-shop ([*oneclick-api-client*](https://github.com/homecreditcz/oneclick-api-client)) - **POZOR - ZASTARALÉ - pouze pro PHP 5.6!!!**
