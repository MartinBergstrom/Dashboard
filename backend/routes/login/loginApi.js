const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Credentials = require("../../models/credentials");


const isValidLogin = async (userPassword, hashedPassword) => {
    if (hashedPassword && hashedPassword.length == 1) {
        const matching = await bcrypt.compare(userPassword, hashedPassword[0].password);
        if (matching) {
            console.log("Password matches")
            return true;
        } else {
            console.log("Password does not match")
        }
    }
    return false;
}

// @access Public
router.post("/refresh", (req, res) => {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
        return res.status(401).send('Access Denied. No refresh token provided.');
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '900s' });

        res.json({ user: decoded.userId, message: "success", token: newToken });
    } catch (error) {
        return res.status(400).send('Invalid refresh token.');
    }
});

// @access Public
router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await Credentials.find({ username: username });
    if (!await isValidLogin(password, hashedPassword)) {
        res.status(401).json({
            error: 'Unauthorized',
            message: 'Incorrect username or password'
        });
    } else {
        const token = jwt.sign({ userId: username }, process.env.JWT_SECRET, { expiresIn: '900s', });
        const refreshToken = jwt.sign({ userId: username }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200)
            .cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 10* 60 * 1000 })
            .json({ message: 'Login successful', token: token });
    }
});

module.exports = router;
