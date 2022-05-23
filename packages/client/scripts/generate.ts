#!/usr/bin/env node

import fs, { promises } from 'fs'
import { getCachedDocumentNodeFromSchema } from '@graphql-codegen/plugin-helpers'
import prettier from 'prettier'

import { codegen } from '@graphql-codegen/core'
import * as typescript from '@graphql-codegen/typescript'
import * as typescriptOperations from '@graphql-codegen/typescript-operations'
import * as typescriptGraphQLRequest from '@graphql-codegen/typescript-graphql-request'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadDocuments } from '@graphql-tools/load'

import { schema } from '@myapi/schema'

type GraphQLRequestPlugin = Parameters<typeof typescriptGraphQLRequest.plugin>[3]

const main = async () => {
  const loadedDocuments = await loadDocuments(['src/graphql/**/*.gql'], {
    loaders: [new GraphQLFileLoader()],
  })

  const config: typescript.TypeScriptPluginConfig &
    typescriptOperations.TypeScriptDocumentsPluginConfig &
    GraphQLRequestPlugin = {
    useTypeImports: true,
  }

  const schemaAsDocumentNode = getCachedDocumentNodeFromSchema(schema)

  const codegenCode = await codegen({
    schema: schemaAsDocumentNode,
    schemaAst: schema,
    config,
    documents: loadedDocuments,
    filename: 'generated/graphql.ts',
    pluginMap: {
      typescript,
      typescriptOperations,
      typescriptGraphQLRequest,
    },
    plugins: [
      {
        typescript: {},
      },
      {
        typescriptOperations: {},
      },
      {
        typescriptGraphQLRequest: {},
      },
    ],
  })

  if (!fs.existsSync('generated')) {
    await promises.mkdir('generated', { recursive: true })
  }

  await promises.writeFile(
    'generated/graphql.ts',
    prettier.format(codegenCode, {
      ...(await prettier.resolveConfig(process.cwd())),
      parser: 'typescript',
    }),
    {
      encoding: 'utf-8',
    },
  )
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
