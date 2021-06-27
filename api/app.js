const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const workRoute = require('./routes/work');
const companyRoute = require('./routes/company');
const permitRoute = require('./routes/permit');
const bodyParser = require('body-parser');
require('dotenv/config');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useCreateIndex:true, useNewUrlParser: true, useFindAndModify: true },() => {
    console.log('DB CONNECTED');
});

const PORT = process.env.PORT || 8800;

app.use(bodyParser.json());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/work', workRoute);
app.use('/api/permit', permitRoute);
app.use('/api/company', companyRoute);

// Chech for production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => {
    console.log('BACK-END IS READY');
});