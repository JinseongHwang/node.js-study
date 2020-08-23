import express from "express";
import { handle_home, 
    handle_post_join, 
    handle_login, 
    handle_logout, 
    handle_withdraw_user 
} from "../controller/home_controller";

const home_routers = express.Router(); // express 내장 함수 중 Router 기능 사용

home_routers.get("/", handle_home); // 기본 화면 get
home_routers.post("/join", handle_post_join); // 회원 가입
home_routers.post("/login", handle_login); // 로그인
home_routers.post("/logout", handle_logout); // 로그아웃
home_routers.post("/withdrawal", handle_withdraw_user); // 회원 탈퇴

export default home_routers;