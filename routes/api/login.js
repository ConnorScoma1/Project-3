const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')

const Login = require('../../models/Login');

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields " })
    }

    User.findOne({ email })
        .then(user => {
            if(user){
                return res.status(400).json({ msg: "User Already Exists"})
            }
            const newUser = new Login({
                name,
                email,
                password
            })

            // Hashing Password
            bcrypt.genSalt(18, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.json({
                                user: {
                                   id: user.id,
                                   name: user.name,
                                   email: user.email
                                }
                            })
                        })
                })
            })
        })
})

module.exports = router;