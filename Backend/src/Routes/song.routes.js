const express = require("express")
const songRoutes = express.Router()
const upload = require("../middleware/upload.middleware")
const songController  = require("../controller/song.controller")






songRoutes.post("/", upload.single("song"),songController.uploadSongController)




module.exports = songRoutes
