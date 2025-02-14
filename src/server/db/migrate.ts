import { migrate } from "drizzle-orm/neon-http/migrator"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import "dotenv/config"

const main = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const db = drizzle(sql)
    
    await migrate(db, { migrationsFolder: "./drizzle" })
    console.log("Migration complete")
  } catch (error) {
    console.log(error)
  }
  process.exit(0)
}

main() 