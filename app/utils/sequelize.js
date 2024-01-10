const config = require('../configs/general.config.js');
const Sequel = require('sequelize');
const fs = require('fs');
const path = require('path');

const MySQLSequel = new Sequel(
    config.DBConnectors.database,
    config.DBConnectors.username,
    config.DBConnectors.password, {
      host: config.DBConnectors.host,
      port: config.DBConnectors.port,
      dialect: config.DBConnectors.dialect,
      logging: false,
      define: {
        underscored: false,
      },
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 100000,
      },
    },
);

// const MySQLSequel = new Sequel(
//   {dialect: config.DBConnectors.dialect,}
// )

// Test the database connection
MySQLSequel
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = MySQLSequel;
