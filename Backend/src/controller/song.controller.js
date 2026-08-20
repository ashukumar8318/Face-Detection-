const songModel = require("../model/song.model")
const id3 = require("node-id3")



async function uploadSongController(req,res){
    const songBuffer = req.file.buffer
   const tag =  id3.read(songBuffer)

   console.log(tag)
}

module.exports = {
    uploadSongController
}
