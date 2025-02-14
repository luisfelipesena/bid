import { migrate } from "drizzle-orm/neon-http/migrator"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import "dotenv/config"

export const migrateDb = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const db = drizzle(sql)
    
    await migrate(db, { migrationsFolder: "./src/server/drizzle" })
    console.log("Migration complete")
  } catch (error) {
    console.error("Error running migrations:", error)
    process.exit(1)
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  migrateDb()
    .then(() => {
      console.log("Migration script finished")
      process.exit(0)
    })
    .catch((err) => {
      console.error("Migration script failed:", err)
      process.exit(1)
    })
}
