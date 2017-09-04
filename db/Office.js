const conn = require('./conn.js')
const Sequelize = conn.Sequelize;

const Office = conn.define('office', {
  name: {
    type: Sequelize.STRING
  },
  lat: {
    type: Sequelize.FLOAT
  },
  long: {
    type: Sequelize.FLOAT
  }
});

module.exports = Office;
