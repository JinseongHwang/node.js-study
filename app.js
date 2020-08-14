import express from "express" // es6 문법
import home_routers from "./router/home_router";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { mwmw } from "./local_middleware";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mwmw);
app.use("/", home_routers); // 라우팅

export default app;