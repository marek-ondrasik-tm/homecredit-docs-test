# REST API principles

### Request restrictions

Please, keep in mind following restrictions regarding requests:

- Maximum request size is **10 MB**.

- Maximum size of accepted single file is **500 kB**.

- Here is the list of supported files:

| MIME type | Example(s) |
|-----------|------------|
| application/pdf | *.pdf |
| application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | *.xlsx |
| application/vnd.openxmlformats-officedocument.wordprocessingml.document | *.docx |
| application/vnd.openxmlformats-officedocument.presentationml.presentation | *.pptx |
| application/vnd.ms-excel | *.xls, *.xlt, *.xla |
| application/msword | *.doc, *.dot |
| application/vnd.ms-powerpoint | *.ppt, *.pot, *.pps, *.ppa |
| plain/text | *.csv, *.txt |
| image/jpeg | *.jpg, *.jpeg |
| image/png | *.png |
| image/gif | *.gif |

### API calls limits

When partner reaches API calls limit (calls the API more times than is his quota), HTTP error 429 is returned. To inform about limits we use following response headers:

- `X-Rate-Limit-Limit` - The number of allowed requests in the current period

- `X-Rate-Limit-Remaining` - The number of remaining requests in the current period

- `X-Rate-Limit-Reset` - The number of seconds left in the current period

### Versioning

We use API version in URL (e.g. `https://api.homecredit.cz/customer/v1/my/profile`). *Minor* changes and *patches* (see below) that don't break backwards compatibility do NOT increase API version, e.g. they MAY happen without prior notice and your application should be ready to handle them.

*Minor* changes include:

- adding new resource

- adding new optional header/URL parameter or optional body attribute to request

- adding new attribute to response body

- adding new error codes and messages, provided that error structure is the same

### Response encoding

Unless stated otherwise, all responses are sent as `Content-Type: application/json; charset=utf-8`

### HTTP status codes

We use following status codes throughout the API, except for OAuth flow when response codes are prescribed in RFC

- 200 `OK` - request was successful

- 201 `Created` - request was successful and resource was created

- 202 `Accepted` - request has been accepted for processing, but the processing has not been completed

- 204 `No Content` - we accepted partner's request but there is nothing to return (e.g. response is empty)

- 400 `Bad Request` - syntax error, e.g. request is missing required parameters/attributes or parameter values are of incorrect type

- 401 `Unauthorized` - partner is not authorized

- 403 `Forbidden` - access denied (e.g. user / application is not allowed to use the resource)

- 404 `Not Found` - resource could not be found

- 405 `Method Not Allowed` - specified method is not allowed for resource

- 422 `Unprocessable Entity` -  business (semantic) errors. Request is well-formed, but cannot be processed (e.g. payment due date is in past). Errors are specified in response body (see below)

- 429 `Too Many Requests` - partner exceeded the rate limit (see section [API calls limit](#introduction/api-calls-limits) above)

- 500 `Internal Server Error` - something went wrong on our side

- 503 `Service Unavailable` - there is planned service outage

### Error handling

Besides HTTP status codes, which are the main indication if something goes wrong, we also use `errors` object to report more details about errors.

Errors object example:

```javascript
{
    ...

    errors: [
        {
            "code": "ERR_100",
            "message": "Invalid contract number",
            "severity": "ERROR",
            "attribute": "partyAccount.accountNumber",          // optional
            "ticketId": "UAT1:AMS:20160516-091658.450:45e4" // optional
        },
        {
            "code": 352,
            "message": "Insufficiend funds for payment order realization",
            "severity": "WARN"
        },
        {
            "code": 523,
            "message": "This order will trigger currency exchange operation",
            "severity": "INFO"
        }
    ]
}
```

Error object attributes

| Attribute name | Description |
|----------------|-------------|
| code | unique error code |
| message | human readable error description (non-localized) |
| severity | error severity (see below) |
| attribute | json path of request attribute that caused the error (optional) |
| ticketId | internal ticket ID, used for error backtracking |

There are 3 levels of error severity:

- `ERROR` - critical error, execution cannot continue. This MUST be indicated also by appropriate HTTP status code (e.g. `422 Unprocessable Entity`)

- `WARN` - non-critical error, execution can continue but further user interaction is advisable (for request to proceed, partner MUST specify this error code in `override` request attribute). This MIGHT be indicated also by appropriate HTTP status code.

- `INFO` - information only, execution can continue without user interaction.

#### Errors overview

| Status code | Code | Explanation | Message |
|-------------|------|-------------|---------|
| 400 | INVALID_REQUEST | Request was not well formatted (malformed request syntax, size too large, etc.) | (*Various messages possible*) e.g. Unsupported combination of application state and order state |
| 404 | OBJECT_NOT_FOUND | The requested resource could not be found | (*Various messages possible*) e.g. Specified object was not found |
| 422 | NOT_ALLOWED | Operation is not allowed (internal reason) | (*Various messages possible*) e.g. Not allowed (other reason) |
| 500 | INTERNAL_SERVER_ERROR | Unexpected condition was encountered and no more specific message is suitable | (*Various messages possible*) e.g. Failed to parse given JSON |

### Formats

- **date** and **time** uses [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatting, e.g.:
  - date is represented as `YYYY-mm-dd`. Timezone (local) is added when necessary.
  - time is represented as `Thh:mm:ss`. Timezone is added when necessary. Time with arbitrary number of digits respresenting miliseconds is also accepted (when [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format criteria is met) but the time without miliseconds is always returned.
  - day of week is represented as number 1..7, with 1 being Monday
  - week no. 1 is the week with the year's first Thursday in it

- **phone numbers** uses international mobile phone number format starting with '+' and including country code (example of valid number: `+420739111222`)

- **numbers format** number format is defined by [JSON standard](http://www.json.org), e.g. decimals are separated by `.`

- **money format** uses [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) formatting (in minor units, e.g.: 12590 in minor units represents 125,90 CZK/EUR)