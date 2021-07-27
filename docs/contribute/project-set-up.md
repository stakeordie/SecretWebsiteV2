---
title: "Getting Started"
---


<hero-mixed bg-color="#FFEB97" bg-image="https://ik.imagekit.io/secretnetwork/images/Market_a2a48fa0a9_xM8ldfIFG.jpg">

<template v-slot:title>


###### Documentation

### Getting Started

</template>

<template v-slot:body>

- A global, open alternative to the current financial system.
- Products that let you borrow, save, invest, trade, and more.
- Based on open-source technology that anyone can program with.

</template>

</hero-mixed>

<content-navigator-docs>

### Getting Started

This section will help you run the Secret Website from ground up.

#### Prerequisites

Install nodejs using `nvm` package manager

```bash
curl -o- https://github.com/nvm-sh/nvm
```

#### Use our github repository

Clone this repository in your local machine

```bash
degit https://github.com/stakeordie/SecretWebsiteV2
```

#### Scaffold your project

Once you have the repo on your local machine, you need to install all the dependencies.

Using Yarn

```bash
yarn
```

Using Npm

```bash
npm install
```

#### Add an evironment variable for the CMS

In order for the local server to work, it needs to connect to the content managment system, Strapi. This requires an environment variable that tells Strapi where to connect.

Crete a file in the project root named `.env`. This is where you will define the variable.

You have two choices for this depending on your needs.

##### 1. Production server

For most development you will want to connect to the same database that the live site does. This will ensure that you have identical content allowing you to see how your code changes will look.

```env
GRIDSOME_STRAPI_URL=https://secretadmin.scrt.network
#GRIDSOME_STRAPI_URL=https://secretadmin.dev.scrt.network
```

##### 2. Development server

If you want to be able to edit content and see how it will look on the site, you can use the development server.

```env
#GRIDSOME_STRAPI_URL=https://secretadmin.scrt.network
GRIDSOME_STRAPI_URL=https://secretadmin.dev.scrt.network
```

You can connect edit the development content by going to [https://secretadmin.dev.scrt.network](https://secretadmin.dev.scrt.network) in a browser and logging in with `user: secret` & `password: secret`

##### Which server should I connect to?
We recommend getting started with the production server. This will allow you to get a copy of the live site running and make changes. If you need to connect to the development server, it is as easy as changing the .env and restarting the server.

However if you only want to try out content changes, definitely use the development server, as you won't be able to edit production unless you have permissions.
#### Run the project in develop mode

```bash
yarn develop
```
Secret website will start a development server at http://localhost:8080/

</content-navigator-docs>