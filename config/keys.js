const username = require('../userPass/username')

/* 
================= USERNAME FILE ===============
module.exports = {
    username: 'YOUR USERNAME',
    password: 'YOUR PASSWORD'
}
*/ 


module.exports = {
    mongoURI: 'mongodb+srv://' + username.username + ': ' + username.password + ' @cluster0-th3ub.mongodb.net/test?retryWrites=true&w=majority'
}