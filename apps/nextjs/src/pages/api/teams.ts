import type { NextApiRequest, NextApiResponse } from 'next'
import { createApiClient, type TeamsQuery } from '@myapi/client'

type Data = {
  teams: TeamsQuery['teams']
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const myapi = createApiClient()

  const { teams } = await myapi.Teams()

  res.status(200).json({ teams })
}
