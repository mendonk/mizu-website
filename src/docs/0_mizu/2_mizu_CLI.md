---
type: doc
slug: docs/open-source-tools/mizu/mizu-cli
belongsTo: mizu
date: "2021-01-31"
title: Mizu CLI
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

# Mizu CLI

This page lists commands for the **Mizu** Command Line Interface.

## Usage

`mizu [COMMAND]`

### Mizu Commands

- `clean` - Remove all Mizu resources
- `config` - Generate config with default values
- `install` - Installs Mizu components
- `logs` - Create a zip file with logs for Github issues or troubleshooting
- `fetch` - Download recorded traffic to files. This downloads traffic as a HAR file to your current directory.
- `help` - Help about any Mizu command. (Also `-h` or `--help`)
- `tap` - Record incoming traffic of a Kubernetes pod.
- `version` - Print version info.
- `view` - Open GUI in browser.

## Configuration

Pass these flags for additional Mizu configuration.

- `--no-gui`: Don't host the web interface
- `--gui-port`: Local port that web interface will be forwarded to
- `--namespace`: Use namespace different than the one found in kubeconfig
- `--kubeconfig`: Path to custom kubeconfig file
- `--analysis`: Send recorded traffic to UP9 for analysis. This function is still in beta mode.
- `--help`: Additional help
- `--config-path string`: Override config file path using --config-path (listed file is your default config)
- `--set strings`: Override values using `--set`

## Stop Mizu

Use `^C` to stop Mizu.

## Learn More

Learn more about Mizu at [GetMizu.io](http://getmizu.io/) or join our community Slack at [up9.slack.com](https://join.slack.com/t/up9/shared_invite/zt-tfjnduli-QzlR8VV4Z1w3YnPIAJfhlQ).
