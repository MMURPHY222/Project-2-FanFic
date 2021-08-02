const Sequelize = require('sequelize');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// create variable
let sequelize;
// connection process referencing .env file to access server
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// export for server
module.exports = sequelize;
