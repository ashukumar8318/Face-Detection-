const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
    songUrl:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true

    },
    mood:{
        type:String,
        enum:{
            values: ["happy","sad","surprised"]
        

        }
           
    }
})

const songModel = mongoose.model("songs",songSchema)

module.exports = songModel