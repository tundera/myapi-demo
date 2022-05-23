import fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import { createApiClient } from '@myapi/client'

import { logger } from 'src/logger'

export function buildApp() {
  const app = fastify({ logger })

  // Health check route
  app.route({
    url: '/healthcheck',
    method: ['GET'],
    handler: async (_req, _reply) => {
      return 'OK'
    },
  })

  app.route({
    url: '/teams',
    method: ['GET', 'OPTIONS'],
    handler: async (req, reply) => {
      const client = createApiClient()

      const { teams } = await client.Teams()

      reply.status(200)
      reply.send(teams)
    },
  })

  return app
}
