const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const jumpsRouter = require('./controllers/jumps')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

app.use(express.json())
app.use('/api/jumps', jumpsRouter)

module.exports = app