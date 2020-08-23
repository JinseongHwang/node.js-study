import express from "express";
import { show_board, posting } from "../controller/post_controller";

const post_routers = express.Router();

post_routers.get("/board", show_board); // 게시판 snippets
post_routers.post("/board/write", posting); // 글 쓰기

export default post_routers;