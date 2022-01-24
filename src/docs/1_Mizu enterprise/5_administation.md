---
type: doc
slug: docs/mizu-enterprise/mizu-administration
date: "2021-01-31"
title: Mizu Administration
description: Mizu
author: Mendon Kissling
authorTitle: technical writer
thumbnail: thumb.png
featureThumbnail: featured.png
excerpt: ""
rightSidePanelElementsSlugs: ""
state: private
category:
    - contract testing
    - microservices
    - mocks
---

# Administration

## Connect to Storage

To connect Mizu to storage, you must first tap pods and login using `mizu view`. 

## PII

When Mizu taps data that could be considered sensitive (e.g. PII data) you can make sure certain keywords or pieces of data will not be shown or stored anywhere.

Mizu will redact by default any of the fields included in the personallyIdentifiableDataFields var located in the consts.go file in this folder:
`https://github.com/up9inc/mizu/blob/main/tap/extensions/http/sensitive_data_cleaner.go`

```
var personallyIdentifiableDataFields = []string{"token", "authorization", "authentication", "cookie", "userid", "password", "username", "user", "key", "passcode", "pass", "auth", "authtoken", "jwt", "bearer", "clientid", "clientsecret", "redirecturi", "phonenumber", "zip", "zipcode", "address", "country", "firstname", "lastname", "middlename", "fname", "lname", "birthdate"}
```

### Changing the default list of keywords

To remove or add keywords to the default list of redacted keywords, change the file and build the code with the altered file.

### Redact sensitive data using regular expressions  

You can filter free text from the body of messages with text/plain content-type with -r

Examples:

```
./mizu tap ".*" -r <regex>
```

Use multiple -r to simultaneously filter multiple patterns:

```
mizu tap catalo -r "redact this pattern" -r "and also this (.*) pattern"
```

## Mizu ENT vs Mizu OSS



## Pricing