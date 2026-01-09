# Getting started

This online document describes Home Credit (HC) One-Click API - the means for partner e-shops through which they can offer their customers the benefits of one of Home Credit's payment methods.

The aim of here described services is to allow customers the smooth running through the process of an online purchase. The services that allow achieving this goal are divided into the following groups:

| Group of services | Purpose |
|-------------------|---------|
| Security | Security rules and principles |
| Application resources | Resources that allows processing of *application* and *order* during their whole life cycle |
| Installments calculator resources | Resources that allow partner e-shops to implement an installment calculator on their websites |
| Merchantsite resources | Resources that should be developed and exposed by partner e-shops to allow HC asynchronously inform these partner e-shops about important changes regarding particular *applications* and *orders* |
| Health check | Health check usage description |

### Basic implementation

Basic and minimum way how to implement HCO API is to at least implement:

1. [Login](#reference/security/login-partner)
   - You must be authorized to be able to access to the most resources

2. [Create application](#reference/application-resources/create-application)
   - When you collect necessary data of a customer and his/her order, call this resource to start the loan approval process by creating an `application`. `Application` itself and its ID are essential for a successful process completion.

3. Redirect handlers.
   - Special URLs for customers that shows payment success or rejection (more info [here](#introduction/getting-started/parameters-added-to-your-return-urls)).

4. [Application notification](#reference/merchantsite-resources/application-notification)
   - This endpoint has to be exposed on your side to allow HC back-end to asynchronously notify you about the important changes regarding particular applications and orders.

5. [Mark order items as sent](#reference/application-resources/mark-order-items-as-sent) or [Mark order items as delivered](#reference/application-resources/mark-order-items-as-delivered) (use the one that suits your expedition and invoicing process, `Mark order items as delivered` is preferred)
   - HC does not start the process of financial compensation unless the order is marked as `SENT` / `DELIVERED`.

[![Sequence diagram of minimum implementation](https://github.com/mdostal-hci/oneclick-images/raw/master/SequenceDiagramInstallmentMinimum.png)](https://github.com/mdostal-hci/oneclick-images/raw/master/SequenceDiagramInstallmentMinimum.png)

[![State diagram of Application](https://github.com/mdostal-hci/oneclick-images/raw/master/StateDiagramApplication.png)](https://github.com/mdostal-hci/oneclick-images/raw/master/StateDiagramApplication.png)

It is necessary to fill in all attributes marked as required in the request but filling optional parameters will result in better application approval rate. You should always consider to fill as many attributes as possible. Contact the sales support to find out which attributes correlate with approval rate the most.

### Parameters added to your return URLs

- During redirection of the customer from Home Credit's front-end back to e-shop (to one of the provided URLs - `approvedRedirectUrl`, `rejectedRedirectUrl`) there are some potentially useful information about a customer's outcome in Home Credit's front-end added:

- `orderNumber` (string) - E-shop's internal order number provided within API call of [Create application](#reference/application-resources/create-application)

- `withdrawal` (boolean) – True when the customer's purchase is financed directly from his already existing revolving loan; false when a new contract is being created

- `downPayment` (number) – Value of down payment, usually set to 0

- `stateReason` (enum) – Application substate

- `applicationId` (string) - HCO application identifier

- `checkSum` (string) – hashed message

- e.g. `http://youreshop.cz?orderNumber=0606104036&stateReason=PROCESSING_SIGNED&downPayment=100000&checkSum=443E150D3406F6A8DC62C1DB224AFDD84FA9907071BB1AD9B2C7701031793662191501B26AADF3A31361341EA176C80B23D8A9A5E5B5219538289945FE0C20A7&applicationId=01-11b00a1ef1&withdrawal=false`