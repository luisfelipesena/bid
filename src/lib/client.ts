import { env } from "@/env"
import type { AppRouter } from "@/server"
import { createClient } from "jstack"

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */

console.log(env.NEXT_PUBLIC_API_URL);
const baseUrl = env.NEXT_PUBLIC_API_URL
export const client = createClient<AppRouter>({
  baseUrl,
})
