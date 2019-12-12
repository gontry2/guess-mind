import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views")); //view directory 설정
app.get("/", (req, res) => res.render("home")); //view는 하나, 다 JS로 짤꺼니깐
app.use(express.static(join(__dirname, "static"))); // front

const handleListening = () => console.log(`▶ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);