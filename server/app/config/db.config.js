
const {
  MYSQL_HOSTNAME,
  MYSQL_PORT,
  MYSQL_DB,
  MYSQL_ROOT_PASSWORD
 } = process.env

module.exports = {
  HOST: MYSQL_HOSTNAME,
  PORT:MYSQL_PORT,
  USER: "root",
  PASSWORD: MYSQL_ROOT_PASSWORD,
  DB: MYSQL_DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
