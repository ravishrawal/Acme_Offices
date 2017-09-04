//Express
const express = require('express')
const app = express();
const path = require('path');

//Models
const db = require('./db')
const User = require('./db/User.js')
const Office = require('./db/Office.js')

//Swig
const swig = require('swig');
app.engine('html', swig.renderFile);
swig.setDefaults( { cache:false } );
app.set('view engine', 'html');


//BodyParser
app.use(require('body-parser').urlencoded({ extended: false }));

//Method Override
app.use(require('method-override')('_method'))

//Routes

app.get('/', (req, res, next)=>{
  User.findAll({
    include: [Office]
  })
  .then((users)=>{
    Office.findAll()
      .then((offices)=>{
        res.render('index.html', {users, offices});
      })
  })
})
app.use('/users', require('./routes/users.js'))
app.use('/offices', require('./routes/offices.js'))

//Server Seed & Sync
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
  db.sync()
    .then(()=>{
      return db.seed()
    })
    .catch((err)=>console.log(err.message))
})
