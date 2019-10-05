const router = require('express').Router();
let User = require('../models/user.model.js');

router.get('/',(req,res)=>{
    console.log('data');
    User.find()
    .then(users=>res.json(users))
    .then(data=>console.log('data'))
    .catch(err=>res.status(400).json('Error:' + err));
})

router.post('/add',(req,res)=>{
    const username = req.body.usrename;
    const password = req.body.password;
    const password2 = req.body.password2;

    const newUser = new User({
        username,
        password,
        password2
    });
    console.log('adding')
    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json("Error "+ err))
});

module.exports = router;