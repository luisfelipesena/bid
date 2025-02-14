import { env } from "@/env"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./migrations",
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
})