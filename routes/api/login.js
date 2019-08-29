const express = require('express')
const router = express.Router();

const Login = require('../../models/Login');

router.get('/', (req, res) => {
    Login.find()
        .sort({ date: -1 })
        .then(logging => res.json(logging))
})

router.post('/', (req, res) => {
    const newLogin = new Login ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    newLogin.save().then(login => res.json(login))
})

router.delete('/:id', (req, res) => {
    Login.findById(req.params.id)
        .then(login => login.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;