const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")


function identifyUser(req,res,next){
    const token = req.cookies.token
    console.log(token)

    if(!token){
        return res.status(401).json({
            message:"unauthorized token"
        })
    }

    try {
        const decoded = jwt.verify(
        token,
        process.env.JWT_SECREAT
    )

    req.user = decoded
    next()

    } catch (error) {
        return res.status(401).json({
            message:"Invalid token"
        })
        
    }
}

module.exports={identifyUser}