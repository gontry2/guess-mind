import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views")); //view directory 설정
app.use(logger("dev"));
app.get("/", (req, res) => res.render("home", { events: JSON.stringify(events) })); //view는 하나, 다 JS로 짤꺼니깐
app.use(express.static(join(__dirname, "static"))); // front
const handleListening = () => console.log(`▶ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server); // ws 와 http는 동일한 port에 올릴 수 있음.

io.on("connection", socket => socketController(socket));