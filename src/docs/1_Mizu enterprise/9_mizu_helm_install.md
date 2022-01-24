---
type: doc
slug: docs/mizu-enterprise/helm-chart-install
date: "2021-01-31"
title: Helm Chart Installation
description: Helm Chart Installation
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

# Install Mizu with Helm Chart

Install **Mizu** into your existing Kubernetes cluster with our Helm chart. If you're getting started with Kubernetes or just want to try out **Mizu**, set up a [Minikube](https://minikube.sigs.k8s.io/docs/start/) locally. 

## Prerequisites

**Ensure you've set Kubectl to use Minikube with `kubectl config use-context minikube`.**

Requires [Helm](https://v3.helm.sh/docs/) version 3. 

## Clone and Install Helm Chart

Clone release from `github/up9inc/mizu-helm-chart`:

<syntaxhighlighter>
git clone https://github.com/up9inc/mizu-helm-chart
cd mizu-helm-chart
</syntaxhighlighter>

Use the Mizu helm chart to install Mizu to your Kubernetes cluster.

<syntaxhighlighter>
helm install \
    --values examples/values-minikube.yaml \
    --set initialize=true \
    --namespace default \
    mizu up9inc/mizu
</syntaxhighlighter>

Check the status of your pods with `kubectl get pods -A`. You should get a screen like this:

![Kubectl Get Pods](kubectl.png)

If your pods are all running, use `mizu tap -A` to tap all your pods and start the Mizu UI. 

You've successfully installed the **Mizu** Helm Chart.
