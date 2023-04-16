require('dotenv').config();

const express = require('express');
var cors = require('cors')
const bp = require('body-parser')

const app = express();

app.use(cors())
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Users
const userRouter = require('./app/routes/users');
app.use('/api/users', userRouter);

// Auth
const authRouter = require('./app/routes/auth');
app.use('/api/auth', authRouter);

app.listen(3001);