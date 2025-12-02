import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

// DIRECT_URL is optional - falls back to DATABASE_URL if not set
const directUrl = process.env.DIRECT_URL || process.env.DATABASE_URL

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations'
  },
  datasource: {
    url: env('DATABASE_URL'),
    directUrl
  }
})
