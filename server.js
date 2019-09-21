const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors'); 

const db = require('./db'); 
const app = express();


app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json());
app.use(cors()); 

const inventoryRouter = require('./routes/api/inventory-router');

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));


db.on('error', console.error.bind(console, "MongoDB connection error:"));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    

    });

};

app.use('/api', inventoryRouter);

// const port = process.env.PORT || 8080;
const port = 4000; 


app.listen(port, () => console.log(`Server Listening on port: ${port}`));