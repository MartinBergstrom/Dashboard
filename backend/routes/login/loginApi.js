const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();

const Credentials = require("../../models/credentials");


const isValidLogin = async (userPassword, hashedPassword) => {
    if (hashedPassword && hashedPassword.length == 1) {
        const matching = await bcrypt.compare(userPassword, hashedPassword[0].password);
        if (matching) {
            console.log("Password matches")
            return true;
        } else {
            console.log("Passowrd does not match")
        }
    }
    return false;
}

// @access Public
router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await Credentials.find( { username: username });
    if (!await isValidLogin(password, hashedPassword)) {
        res.status(401).json({ 
            error: 'Unauthorized', 
            message: 'Incorrect username or password'
        });
    } else {  
        res.status(200).json({ message: 'Login successful' });
    }
});

module.exports = router;
