# Documentation principles

- attributes in request/response object are optional, unless stated otherwise (`required` flag under attribute name)

- required attribute in optional object means, that if optional object is specified, it must contain required attribute.

- all values in request/response attributes are just examples, except for enum values - these are the only possible values for given attribute.

- documentation adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html), which makes a distinction between *major*, *minor*, and *patch* versions.

### Naming conventions

- we use camelCase for all object and attribute names

- we use CAPITAL_UNDERSCORE for enum values

- we use plural in resource names