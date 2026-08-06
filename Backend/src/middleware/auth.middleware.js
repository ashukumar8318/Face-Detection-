const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")
const blacklistModel = require("../model/blacklist.model")
const reddis = require("../config/cache")

async function identifyUser(req,res,next){
    const token = req.cookies.token
    console.log(token)

    const isTokenBlacklist = await blacklistModel.find({
        token
    })

    if(isTokenBlacklist){
        return res.status(400).json({
            message:"unauthorised user"
        })
    }

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