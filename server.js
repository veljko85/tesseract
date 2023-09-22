var fs = require("fs");

let jsonData = JSON.parse(fs.readFileSync("setup.json"));
console.log(jsonData);

const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname)));

const io = require("socket.io")(server);
const users = {};

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("promeni", (text) => {
    let jsonData1 = JSON.parse(fs.readFileSync("setup.json"));
    jsonData1.backgroundColor = text;

    fs.writeFileSync("setup.json", JSON.stringify(jsonData1));

    console.log(jsonData1.backgroundColor);
    socket.emit("promenjena", "boja je promenjena");
  });
});

server.listen(5000);
