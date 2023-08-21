const express = require("express")
const app = express()
const http = require("http").createServer(app)
const { Server } = require("socket.io");
const io = new Server(http);

app.use(express.static(__dirname + "/assets"))

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on("connection" , (socket) => {
    socket.on("message" , (data) => {
        io.emit("message" , {
            message: data.message,
            name: data.name,
        })
    })
})

const PORT = 3000

http.listen(PORT , () => {
    console.log(`Сервер был запущен по порту ${PORT}`)
})