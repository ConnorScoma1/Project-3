const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); 

const db = require('./db'); 
const app = express();


app.use(bodyParser.urlencoded({})); 
app.use(bodyParser.json());
app.use(cors()); 

const inventoryRouter = require('./routes/api/inventory-router')
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected '))
    .catch(err => console.log(err))

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api', inventoryRouter);

db.on('error', console.error.bind(console, "MongoDB connection error:");)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server Listening on port: ${port}`))