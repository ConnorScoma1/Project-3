const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/Login');


router.post('/', (req, res) => {
  const { email, password } = req.body;


  if( !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Not Found' });

     bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch){
                return res.status(400).json({ msg: "Invalid Credentials" })
            }
            jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              )
        })
    })
});

module.exports = router;
