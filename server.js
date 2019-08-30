const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const app = express();

app.use(bodyParser.json());

const db = config.get('mongoURI');

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected '))
    .catch(err => console.log(err))

app.use('/api/login', require('./routes/api/login'));
app.use('/api/auth', require('./routes/api/auth'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server Listening on port: ${port}`))