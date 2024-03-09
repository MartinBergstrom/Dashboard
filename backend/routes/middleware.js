const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authValue = req.headers['authorization'];
    if (authValue == null) {
        console.log("No token")
        return res.sendStatus(401);
    }
    const authValueArr = authValue.split(" ");
    if (authValueArr.lenth !== 1) {
        console.log("Malformed auth Bearer header")
        return res.sendStatus(401);
    }
    const token = authValueArr[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("invalid token");
            console.log(err);
            return res.sendStatus(403);
        }
        console.log("Valid token");
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;