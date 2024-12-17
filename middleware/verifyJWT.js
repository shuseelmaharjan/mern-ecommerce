const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.Authorization || res.headers.authorization

    if(!authHeader?.startsWith('Bearer ')){
        return res.status(401).json({message:'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if(err) return res.status(403).json({message:'Forbidden'})
            req.User = decode.UserInfo.email;
            req.id = decode.UserInfo.id;
            
            next()
        }
    )
}

module.exports = verifyJWT