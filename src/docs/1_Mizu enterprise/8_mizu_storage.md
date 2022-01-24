---
type: doc
slug: docs/mizu-enterprise/storage
date: "2021-01-31"
title: Mizu Storage Options
description: Storage Options
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

# Mizu Storage Options

**Mizu for Enterprise** offers a significant upgrade of storage capabilities from **Mizu OSS**. You have three storage options:

* Default storage: 200 MB of traffic data, cleared when limit is reached.
* Long living Mizu storage: Mizu log storage similar to Kubernetes node logs
* Elastic Container storage: Mizu log storage on an Elastic container

## Default Storage

Mizu stores 200 MB of traffic data when you tap, and it clears when the limit is reached. 

## Mizu Storage

Mizu stores data passed with the `--analysis` flag and saves it 

## Elastic Container

