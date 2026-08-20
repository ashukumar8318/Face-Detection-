const songModel = require("../model/song.model")
const id3 = require("node-id3")
const uploadFile = require("../services/storage.services")




async function uploadSongController(req,res){
    const songBuffer = req.file.buffer
   const tag =  id3.read(songBuffer)
   const mood = req.body

   const songFile = await uploadFile({
    buffer:songBuffer,
    filename: tag.title + ".mp3",
    folder : "/cohort-2/modify"
   })

   const posterFile = await uploadFile({
     buffer:tag.image.imageBuffer,
    filename: tag.title + ".jpeg",
    folder : "/cohort-2/modify"
   })

   const song = await songModel.create({
    title:tag.title,
    songUrl : songFile.url,
    imgUrl : posterFile.url
   })

   res.status(201).json({
    messsage : "Song uploaded succesfully",
    song:song
   })


}

module.exports = {
    uploadSongController
}
