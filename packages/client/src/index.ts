import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../generated/graphql'

const GRAPHQL_ENDPOINT = 'https://nba.tundera.dev/graphql'

export const createApiClient = () => {
  return getSdk(new GraphQLClient(GRAPHQL_ENDPOINT))
}

export * from '../generated/graphql'
