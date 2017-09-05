const conn = require('./conn.js')
const Sequelize = conn.Sequelize;

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
