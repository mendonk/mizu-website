---
type: doc
slug: docs/mizu-enterprise/build-mizu-from-source
date: "2021-01-31"
title: Build Mizu from Source
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

# Build Mizu for Enterprise from Source

There are two options available to build **Mizu** from source:

1. From Git repo. This method is easiest. 
2. From tarball. 

Check your **Mizu** version first with `mizu version` and update if necessary.

## Install from Git Repo  

This method is easiest. Just clone the repo from GitHub and build with Make. 

<syntaxhighlighter>
$ mkdir -p $GOPATH/src/github.com/mizu && cd $_
$ git clone github.com/up9inc/mizu.git
$ cd mizu
$ make bootstrap
$ make dev
</syntaxhighlighter>

Test your new build with `mizu --help`. If it worked, it will print the **Mizu** help file.

### Install from Tarball

**Mizu** can be also be built from a source tarball located [here](https://github.com/up9inc/mizu-1.22.0.tar.gz).  

Download the most recent tarball and unpack **Mizu** and its dependencies as below. 

<syntaxhighlighter>
wget github.com/up9inc/mizu-1.22.0.tar.gz
tar xvfz mizu-1.22.0.tar.gz
$ cd mizu
</syntaxhighlighter>

This package contains the following:
* `bin` - Mizu CLI
* `/dest` - All dependencies for Mizu
* `conf` - Config files for Mizu, including tapping, auth, and storage
* `lib` - The Go files used by Mizu

Now, use Make to build Mizu:

<syntaxhighlighter>
$ cd mizu
$ make boostrap
$ make dev
</syntaxhighlighter>










