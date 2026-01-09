# Application resources

Services that allows processing of _application_ and _order_ during their whole lifecycle.

## Create application

Elementary flow starts when customer wants to use one of Home Credit's payment method for financing his purchase made in partner e-shop.

| Financing type | Supported |
| --- | --- |
| `INSTALLMENT` | YES |

Use `/financing/v1/applications` resource with properly filled request that contains at least following data

+   Customer information are not necessary to send, however, sending them is highly recommended - it will simplify the application process for the client
    
    +   Name (first name and last name or full name)
    +   E-mail
    +   Mobile phone number
    +   Addresses (array)
        +   City
        +   Street
        +   Street number
        +   ZIP
        +   Address type
+   Order details
    
    +   Number
    +   Total Price (including VAT)
    +   Order items (array, at least one item is required)
        +   Code
        +   Order item name
        +   Total price (all pieces, including VAT)
+   Financing type (always `INSTALLMENT`)
    
+   Financing type details
    
    +   \*Installment settings - preferred installment amount
    +   \*Installment settings - preferred down payment amount
    +   \*Installment settings - installment program product code
+   Additional information necessary for the continuation and completion of the process

> \* = Must be filled properly in case customer has already used installment calculator embedded on your website and selected preferred installment program. See the [Installments calculator resources section](#reference/installments-calculator-resources) for more details about possibility to embed installment calculator on your website. Leave empty otherwise.

If the request was successfully processed, you receive HTTP status code 201 and `Application` object with at least following information in the response:

+ Application unique ID
+ Application state
+ Application substate
+ Gateway redirect URL where you should redirect a customer after processing of the response

> You may also receive information about initially requested **down payment** - this can be later changed by customer during the process of finalization of financing application. In such cases we recommend you to check the final **down payment** of approved loan (after the *application* is approved) via `/financing/v1/applications/{applicationId}`.

If the request was **recognized as duplication**

+ and previously created `Application` is canceled (`Application.state = CANCELLED` and `Application.stateReason = CANCELLED_NOT_PAID`), new `Application` is created, you receive HTTP status code 201 and `Application` object with information specified above (at least) in the response
    
+ and previously created `Application` is still new (i.e. without any recorded action by a client), no `Application` is created, you receive HTTP status code 200 and the `Application` object created during the first related successful resource call.
    
+ and previously created `Application` is neither canceled nor new anymore, you receive HTTP status code 422 with error code `DUPLICATE_ORDER_NUMBER`.


In case of an error, you receive one of the following results:

| Status code | Code | Explanation |
| --- | --- | --- |
| 400 | INVALID\_REQUEST | Request was not well formatted (malformed request syntax, size too large, etc.) |
| 422 | UNPROCESSABLE | Request was well-formed but was unable to be followed due to semantic errors |
| 422 | DUPLICATE\_ORDER\_NUMBER | Creating of Application with duplicated Order number is not allowed |
| 500 | INTERNAL\_SERVER\_ERROR | Unexpected condition was encountered and no more specific message is suitable |

[

#### Create application

](/reference/application-resources/create-application/create-application)

Create new *application* of particular financing type