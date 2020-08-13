import express from "express";
import { handle_home, handle_post_join } from "../controller/home_controller";

const home_routers = express.Router(); // express 내장 함수 중 Router 기능 사용

home_routers.get("/", handle_home);
home_routers.post("/join", handle_post_join);

export default home_routers;