const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const authRoutes = require("../src/Routes/auth.routes")
const songRoutes = require("../src/Routes/song.routes")
const cors = require("cors")

app.use(cors({
    origin: "https://bug-free-space-spork-pj946vjpvgvp36qqg-5173.app.github.dev",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/song",songRoutes)


module.exports = app