const userModel = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const blacklistModel = require("../model/blacklist.model")
const reddis = require("../config/cache.js")


async function registerController(req,res){
    const {username,email,password}= req.body

   const isUsernameEmailALreadyExist = await userModel.findOne({
        $or:[
            {email},{username}
        ]
    })

    if(isUsernameEmailALreadyExist){
        return res.status(409).json({
            message:"usename and email already exists"
        })
    }

    let hash = await bcrypt.hash(password,10)
    let user = await userModel.create({username,email,password:hash})

    let token = jwt.sign({
        id: user.id,
        username: user.username
    },process.env.JWT_SECREAT,{
        expiresIn: '1D'
    })

    res.cookie("token",token)

    res.status(200).json({
        messgae: "Account created",
        user:{
            id:user._id,
            username:user.username,
            email: user.email
        }
    })


}


async function loginController(req,res){
    const{username,email,password}= req.body

    const user = await userModel.findOne({
        $or:[
            {email},{username}
        ]  
    }).select("+password")

    if(!user){
        return res.status(409).json({
            message:"Username and email not exist"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const isPasswordValid =  await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(409).json({
            message:"Password is invalid"
        })
    }

    const token = jwt.sign({
        id:user.id,
        username:user.username
    },process.env.JWT_SECREAT,{
        expiresIn:"1D"
    })
    

    res.cookie("token",token)

    return res.status(200).json({
        message : "Logged in succesfully",
        user:{
            username:user.username,
            email:user.email
        }
    })

}

async function getMeController(req,res){
    const user = await userModel.findById(req.user.id)

    return res.status(200).json({
        message:"User fetch succesfully",
        user
    })


}

async function logoutController(req,res){
    const token = req.cookies.token
    res.clearCookie("token")

    await reddis.set(token,Date.now().toString())

    return res.status(200).json({
        message:"User logout succesfully"
    })


}

module.exports={
    registerController,
    loginController,
    getMeController,
    logoutController

}