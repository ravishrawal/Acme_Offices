const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, ({ logging: false }))
conn.authenticate()
  .catch((err)=>console.log(err.message))

module.exports= conn;
