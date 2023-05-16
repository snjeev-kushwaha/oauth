const express = require('express')
const CLIENT_URL = "http://localhost:3000/"

const loginSuccess = async (req, res) => {
    try {
        if (req.user) {
            res.status(200).json({
                success: true,
                message: "success",
                user: req.user,
                // cookies: req.cookies
            })
        }
    }
    catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const loginFail = async (req, res) => {
    try {
        res.status(401).json({
            success: false,
            message: "failure",
        })
    }
    catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const logOut = async (req, res) => {
    try {
        req.logout();
        req.redirect(CLIENT_URL)
    }
    catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

module.exports = { loginSuccess, loginFail, logOut }