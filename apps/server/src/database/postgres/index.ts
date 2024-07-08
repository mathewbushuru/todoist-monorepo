import postgres from "postgres";

const sql = postgres({
  host: process.env.PG_HOST,
  database: process.env.PG_DB_NAME,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl: process.env.PG_LOCALHOST === "true" ? undefined : "require",
  connection: {
    options:
      process.env.PG_LOCALHOST === "true"
        ? undefined
        : `project=${process.env.PG_ENDPOINT_ID}`,
  },
});

export async function logPostgresVersion() {
  const result = await sql`SELECT VERSION()`;
  console.log(result);
}

export default sql;
