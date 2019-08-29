const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected '))
    .catch(err => console.log(err))