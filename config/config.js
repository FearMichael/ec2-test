require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "test",
    "host": process.env.DB_HOST,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "test",
    "host": process.env.DB_HOST,
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "test",
    "host": process.env.DB_HOST,
    "port": 3306,
    "dialect": "mysql"
  }
}