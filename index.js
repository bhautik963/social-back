'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
const mongoDb = process.env.MONGODB_URL ;

mongoose.connect('mongodb+srv://social:1234567890@cluster0.ks75u.mongodb.net/social?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(() => {
    console.log('DB: Connect OK!');
    app.listen(port, () => {
        console.log('Server running on => http://localhost:' + port);
    });
})
.catch(err => console.log(err));

console.log('Starting...');
