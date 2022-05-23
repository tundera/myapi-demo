# GraphQL Client Demo

This is an example project for demonstrating how an API client package can be generated, versioned,
and published to make integrating with GraphQL APIs easy and painless. Example projects are provided
in the `examples` directory to demonstrate how a client package can be used in a variety of frontend
and backend frameworks.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes
the following packages/apps:

### Codebase Overview

- `server`: a GraphQL server built with [GraphQL Yoga](https://www.graphql-yoga.com/) and
  [Fastify](https://www.fastify.io/) for serving the GraphQL schema from the `@myapi/schema` package
- `db`: a [Prisma](https://www.prisma.io/) database client for interacting with the PostgreSQL
  datalayer accessed in the GraphQL resolver functions
- `packages`

  - `@myapi/client`: a GraphQL client SDK for interacting with the `myapi` service from both browser
    and Node.js runtimes, built with [GraphQL Codegen](https://www.graphql-code-generator.com/)
  - `@myapi/schema`: a code-first GraphQL schema built with [Pothos](https://pothos-graphql.dev/)
    used in `@myapi/server`
  - `eslint-config-myapi`: `eslint` configuration shared across packages
  - `prettier-config-myapi`: `prettier` configuration shared across packages
  - `tsconfig`: `tsconfig.json`s used throughout the monorepo

- `examples`
  - `fastify`
    - a [Fastify](https://www.fastify.io/) server using the `@myapi/client` package in a Node.js
      runtime
  - `nextjs`: a [Next.js](**https**://nextjs.org) app using the `@myapi/client` package in both
    browser and Node.js runtimes
  - `vite`: a [Vite](https://vitejs.dev/) app using the `@myapi/client` package in a browser runtime

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

To install codebase dependencies, run:

```sh
yarn install
```

### Build

To build all apps and packages, run the following command:

```sh
yarn run build
```
