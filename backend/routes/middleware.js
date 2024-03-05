const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token == null) {
        console.log("No token")
        return res.sendStatus(401);
    }
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