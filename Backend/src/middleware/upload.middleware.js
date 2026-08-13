const multer = require("multer")
const storage = multer.storage
const upload = multer({
    storage: storage,
    limits:{
        fileSize:1024*1024*5  // 5Mb will be the file size
    }
})

module.exports = upload