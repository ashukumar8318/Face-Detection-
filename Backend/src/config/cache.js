const Reddis = require("ioredis").default

const reddis = new Reddis({
    host:process.env.REDDIS_HOST,
    port:process.env.REDDIS_PORT,
    password:process.env.REDDIS_PASSWORD
})

reddis.on("connect",()=>{
    console.log("server is conneced to reddis")

})

reddis.on("error",(err)=>{
    console.log("error",err)

})

module.exports = reddis