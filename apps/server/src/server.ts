import app from "./app.js";
import { logPostgresVersion } from "./database/postgres/index.js";

// Start server
app.listen(process.env.PORT || 3001, async () => {
  console.log(`Todoist server running on port ${process.env.PORT || 3001}`);
  await logPostgresVersion();
});
