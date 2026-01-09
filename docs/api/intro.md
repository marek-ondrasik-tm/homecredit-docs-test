# API Docs Version

API documentation for Home Credit One-Click API.

> Version of documentation: `1.28.2`

| Version | Release | Release date | News |
|---------|---------|--------------|------|
| 1.28.2 | CS133 | 8.10.2025 | replacement of endpoint for change application state |

> List of attributes switching from required to optional:
> 
> - request.customer
> - request.customer.firstName
> - request.customer.lastName
> - request.customer.fullName
> - request.customer.email
> - request.customer.phone
> - request.customer.addresses
> - request.customer.addresses.city
> - request.customer.addresses.streetAddress
> - request.customer.addresses.streetNumber
> - request.customer.addresses.zip
> - request.customer.addresses.addressType
> - request.merchantUrls.notificationEndpoint

In case of any question, please contact our integration department (integrace_eshop@homecredit.cz).

> **IMPORTANT NOTE:** Resource calls made from **Slovakia** MUST use appropriate dedicated `.sk` endpoints. E.g. `https://api.homecredit.sk/financning/v1/applications`
