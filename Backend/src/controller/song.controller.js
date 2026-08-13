const songModel = require("../model/song.model")


async function uploadSongController(req,res){
    console.log(req.file)
}

module.exports = {
    uploadSongController
}
