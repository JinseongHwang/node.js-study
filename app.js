import express from "express" // es6 문법
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { mwmw } from "./local_middleware";

import home_routers from "./router/home_router";
import post_routers from "./router/post_router";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mwmw);

// 라우팅
app.use("/", home_routers); 
app.use("/", post_routers);

export default app;