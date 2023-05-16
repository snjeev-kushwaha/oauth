const express = require('express')
const authRoute = express.Router()
const passport = require('passport')

const CLIENT_URL = "http://localhost:3000/"

authRoute.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user,
            // cookies: req.cookies
        })
    }
})

authRoute.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
})

authRoute.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL)
})

authRoute.get("/google", passport.authenticate("google", { scope: ["profile"] }))

authRoute.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))

authRoute.get("/github", passport.authenticate("github", { scope: ["profile"] }))

authRoute.get("/github/callback", passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))

authRoute.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }))

authRoute.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}))

module.exports = { authRoute }