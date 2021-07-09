# Getting Started
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

Once you have the repo in your local machine you need to install all the dependencies.

Using Yarn

```bash
yarn
```

Using Npm

```bash
npm install
```

#### Add an enviroment variable to your machine

You need to configurate enviroment variable to manage and access the data content that is located on our Strappi CMS.

Create in the root project an `.env` file and paste the enviroment variable content.

1. Create .env file for development

```env
GRIDSOME_STRAPI_URL=https://strapi-77rt.onrender.com/

```

2. Create .env file for production

```env
GRIDSOME_STRAPI_URL=http://strapi-77rt:10000
```
#### Run the project in develop mode

```bash
yarn develop
```
Secret website will start a development server at http://localhost:8080/