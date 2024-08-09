const Pool = require("pg").Pool;

const pool = new Pool(
  {
  user: "psql_user",
  host: "5.75.203.41",
  database: "students",
  password: "psql_pass",
  port: 5432,
  }
);

module.exports = pool;