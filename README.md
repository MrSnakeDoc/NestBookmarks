<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h1 style="text-align:center; color:#00A9FF">Oparadis Backend<h1>

[![license](https://img.shields.io/github/license/nhn/tui.editor.svg)](https://github.com/MrSnakeDoc/oparadis/blob/dev/licence)
[![Nodejs](https://img.shields.io/badge/NodeJS-16.13.0-blue)](https://nodejs.org/en/)
[![NestJs](https://img.shields.io/badge/NestJs-8.0.0-blue)](https://nestjs.com/)
[![Typescript](https://img.shields.io/badge/Typescript-4.3.5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3.12.0-brightgreen)](https://www.prisma.io/)
[![PostgreSQL Version](https://img.shields.io/badge/PostgreSQL-14-orange)](https://www.postgresql.org/)
[![Passport](https://img.shields.io/badge/Passport-0.5.1-brightgreen)](https://www.npmjs.com/package/passport)
[![Passport-jwt](https://img.shields.io/badge/Passport--jwt-4.0.0-brightgreen)](https://www.npmjs.com/package/passport-jwt)
[![Jest](https://img.shields.io/badge/Jest-27.2.5-brightgreen)](https://www.npmjs.com/package/jest)
[![Pactum](https://img.shields.io/badge/Pactum-3.1.5-brightgreen)](https://www.npmjs.com/package/pactum?msclkid=96915f9dca0f11eca6f844f7484d93a5)
[![Argon2](https://img.shields.io/badge/Argon2-0.28.5-brightgreen)](https://www.npmjs.com/package/argon2)
[![Class-validator](https://img.shields.io/badge/Class--validator-0.13.2-brightgreen)](https://www.npmjs.com/package/class-validator)
[![Class-transformer](https://img.shields.io/badge/Class--transformer-0.5.1-brightgreen)](https://www.npmjs.com/package/class-transformer)

## 🚩 Table of Contents

- [🚩 Table of Contents](#-table-of-contents)
- [Packages](#packages)
  - [DATABASES](#databases)
- [Setup](#setup)

## Packages

### DATABASES

| Name                                        | Description         |
| ------------------------------------------- | ------------------- |
| [`PostgreSQL`](https://www.postgresql.org/) | Relational Database |

## Setup

Clone `dev` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

With https:

```bash
git clone https://github.com/MrSnakeDoc/NestBookmarks.git
npm install
npm run dev
```

With ssh:

```bash
git clone git@github.com:MrSnakeDoc/NestBookmarks.git
npm install
npm run dev
```

```bash
yarn db:dev:restart
```

Then you need to fill your .env file with environment variables.

```bash
cp .env.example .env
```

First you need to have two database local or remote.

For local with docker:

Open your .env file and add these lines to your .env file:
(You can find user and password of the database in the docker-compose.yaml)

```.env
DATABASE_URL = postgresql://dev:dev@localhost:55432/test
JWT_SECRET = addyourlongsecretstring
```

To start the project as dev :

```bash
yarn start:dev
```

To launch tests :

```bash
yarn test:e2e
```
