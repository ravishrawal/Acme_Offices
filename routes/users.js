const db = require('../db')
const User = require('../db/User.js')
const Office = require('../db/Office.js')
const router = require('express').Router();
module.exports= router;

router.get('/', (req, res, next)=>{
  User.findAll({
    include: [Office]
  })
  .then((users)=>{
    Office.findAll()
      .then((offices)=>{
        res.send([users, offices]);
      })
  })
})

router.post('/', (req, res, next)=>{
  User.create({
    name: req.body.newUserName
  })
  .then(()=>{
    console.log(`User ${req.body.newUserName} Created!`);
    res.redirect('/')
  })
  .catch((err)=>next(err))
})
