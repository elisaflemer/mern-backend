const express = require('express');
const cors = require('cors');
const goalsRouter = require('./routes/goals');
const usersRouter = require('./routes/users')
const errorHandler = require('./middlewares/errors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/goals', goalsRouter)
app.use('/api/users', usersRouter)
app.use(errorHandler.errorHandler)

module.exports = app;