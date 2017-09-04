const conn = require('./conn.js');
const Office = require('./Office.js');
const User = require('./User.js');

User.belongsTo(Office);
Office.hasMany(User);

const sync = function() {
  return conn.sync({ force: true })
}

const seed = function(){
  Promise.all([
    User.create({ name: 'John'}),
    User.create({ name: 'John2'})
  ])
  .then((users)=>{
    Office.create({ name: '212 Whatever Place'})
      .then((office)=>{
        users[1].officeId = office.id
      })
  })
}

module.exports = {
  sync,
  seed
}
