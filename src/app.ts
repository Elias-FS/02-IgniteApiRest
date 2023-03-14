import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// Middleware que é executado para todas as rotas (pode ser utilizado para realizar o log das requisições)

/* app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
}) */

// ----------------------------------------------------------------

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
