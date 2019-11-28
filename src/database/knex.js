const config = require(`config`);

module.exports = require(`knex`)({
  client: config.get(`database.dialect`),
  version: config.get(`database.version`),
  connection: {
    host: config.get(`database.connection.host`),
    port: config.get(`database.connection.port`),
    user: config.get(`database.connection.username`),
    password: config.get(`database.connection.password`),
    database: config.get(`database.connection.database`)
  },
  debug: false
});