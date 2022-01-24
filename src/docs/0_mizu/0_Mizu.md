---
type: doc
slug: docs/open-source-tools/mizu/what-is-mizu
belongsTo: mizu
date: "2021-01-31"
title: What is Mizu?
description: Mizu
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

# Mizu

**Mizu** is a simple-yet-powerful API traffic viewer for Kubernetes enabling you to view all API communication between microservices across multiple protocols to help your debug and troubleshoot regressions.

**Mizu** offers a real-time view of all HTTP requests, REST and gRPC API calls, as well as Kafka, AMQP (activeMQ / RabbitMQ), and Redis.

## Install **Mizu**

Install **Mizu** in your terminal:

**Mac** (Intel)

<syntaxhighlighter>curl -Lo mizu github.com/up9inc/mizu/releases/download/0.22.0/mizu_darwin_amd64 && chmod 755 mizu </syntaxhighlighter>

**Mac** (Apple M1 silicon)

<syntaxhighlighter>curl -Lo mizu github.com/up9inc/mizu/releases/download/0.22.0/mizu_darwin_arm64 && chmod 755 mizu</syntaxhighlighter>

**Linux** 

<syntaxhighlighter>curl -Lo mizu github.com/up9inc/mizu/releases/download/0.22.0/mizu_linux_amd64 && chmod 755 mizu</syntaxhighlighter>

**Windows** (Intel 64bit)

<syntaxhighlighter>curl -LO github.com/up9inc/mizu/releases/download/0.22.0/mizu.exe</syntaxhighlighter>

## Run **Mizu**

Tap pods with `mizu tap` and a Kubernetes pod name. For example:

<syntaxhighlighter>mizu tap {pod name}</syntaxhighlighter>

**NOTE:You should have kubectl configured to run against your Kubernetes cluster.**

**Mizu** will tap your specified pods and open a browser window at `http://localhost:8899/` to the Mizu UI. 

![Mizu](mizu-snapshot.png)

Continue your journey with **Mizu** in the [Mizu CLI](/2_mizu_CLI.md).

## Learn More

Learn more about Mizu at [GetMizu.io](http://getmizu.io/) or join our community Slack at [up9.slack.com](https://join.slack.com/t/up9/shared_invite/zt-tfjnduli-QzlR8VV4Z1w3YnPIAJfhlQ).
