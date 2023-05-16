const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const passportSetup = require('./passport')
const { authRoute } = require('./routes/authRoute')
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/db')
const app = express()

const { homeRoute } = require('./routes/homeRoutes')
app.use(express.json())

app.use(cookieSession(
    {
        name: "session",
        keys: ["lama"],
        maxAge: 24 * 60 * 60 * 100
    }
))
app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

app.use('/auth', authRoute)


connectDb()
app.use('/api/v1', homeRoute)

app.listen(process.env.PORT, (err) => {
    console.log(`server is started on port http://localhost:${process.env.PORT}`)
})