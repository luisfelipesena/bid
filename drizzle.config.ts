import { env } from "@/env"
import { defineConfig } from "drizzle-kit"

console.log({env: env.DATABASE_URL});
export default defineConfig({
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})