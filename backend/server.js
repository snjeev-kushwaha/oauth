const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/db')
const app = express()
const { homeRoute } = require('./routes/homeRoutes')
app.use(express.json())
app.use(cors())

connectDb()
app.use('/api/v1', homeRoute)

app.listen(process.env.PORT, (err) => {
    console.log(`server is started on port http://localhost:${process.env.PORT}`)
})