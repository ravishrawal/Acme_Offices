const db = require('../db')
const User = require('../db/User.js')
const Office = require('../db/Office.js')
const router = require('express').Router();
module.exports= router;

router.get('/', function(req, res, next){
  Office.findAll()
    .then((offices)=>{
      res.send(offices);
    })
})

router.post('/', function(req, res, next){
  Office.create({ name: req.body.newLocation })
    .then(()=>{
      res.redirect('/');
    })
})
