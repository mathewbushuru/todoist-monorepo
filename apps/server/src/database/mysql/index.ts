import mysql from "mysql2";

const dbPool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    ssl: {
      rejectUnauthorized: process.env.environment !== "development",
    },
  })
  .promise();

  export default dbPool;
