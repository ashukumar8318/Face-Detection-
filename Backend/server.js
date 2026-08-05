const app = require("./src/app.js")
const connectToDb = require("../Backend/src/config/database.js")


connectToDb()
app.listen(3000,()=>{
    console.log("server is running on 3000");
    
})