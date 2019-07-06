/* eslint-disable no-process-env */
module.exports = {
  appPort: process.env.APP_PORT,
  nodeEnv: process.env.NODE_ENV,
  mysql_db: process.env.MYSQL_DATABASE,
  mysql_user: process.env.MYSQL_USER,
  mysql_password: process.env.MYSQL_PASSWORD,
  db_host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
};
