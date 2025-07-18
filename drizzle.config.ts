import serverEnv from "@/lib/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: serverEnv.DB_FILE_NAME
  }
});
