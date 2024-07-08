import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "attrecker",
  password: "54540",
  port: 5432,
});
