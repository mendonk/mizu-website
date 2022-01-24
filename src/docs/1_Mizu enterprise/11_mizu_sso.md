---
type: doc
slug: docs/mizu-enterprise/mizu-sso
date: "2021-01-31"
title: Okta SSO
description: Okta SSO
author: Mendon Kissling
authorTitle: technical writer
thumbnail: thumb.png
featureThumbnail: featured.png
excerpt: ""
rightSidePanelElementsSlugs: ""
state: public
category:
    - contract testing
    - microservices
    - mocks
---

# SSO with Okta

To authenticate users, **Mizu** offers SSO with **Okta**, with plans to include other providers in the future.  

In the **Create a New Application Integration** window, select **SAML 2.0** and click **Create**.

In the General Settings window, enter the application name in the App name field and click **Next**.

### Configure SAML Settings

Configure SAML Settings by copying the Keycloak’s Redirect URI (provided by your Mizu admin) to Single Sign On URL and Audience URI (SP Entity ID) settings.

For example, if your organization’s domain name is ACME.COM, the URLs provided by the Mizu team would look like this:

- SSO URL: `https://auth.mizu.app/auth/realms/testr/broker/acme_okta/endpoint`
- Audience URI (SP Entity ID): `https://auth.mizu.app/auth/realms/testr/broker/acme_okta/endpoint`

## Okta Advanced Configuration

In the SAML Settings page of your SAML application, locate the Attributes Statements (Optional) section. You should configure three attributes to be sent to Mizu as part of SAML communication.

Select `user.firstName` from the Value list, provide the `firstName` Name, and select the **Add Another** button:

Repeat the steps above for additional attributes:

- Attribute name: `lastName` - value: `user.lastName`
- Attribute name: `email` - value: `user.email`

Click **Next** when done. 

### Configure the Application Type

Configure the application type by completing the fields as indicated below. Click **Finish**.

### Finalize the Setup

From the menu, click **Sign On** configuration for the application you are working on. Hover over the Identity Provider metadata link, right-click, and select **Copy Link** from the menu.

**Provide this link to the your Mizu admin and they will complete the setup on the Mizu side.**