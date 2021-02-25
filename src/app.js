import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";

import "./passport";

const app = express();

const CookieStore = MongoStore(session); // 저장한 쿠키가 누구의 쿠키인지 구분하는 것을 도와준다

app.use(helmet({ contentSecurityPolicy: false })); // security
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//middleware
//누군가 uploads에 접근하면 디렉터리에서 파일을 보내준다(영상 재생가능)
// app.use("/uploads", express.static("uploads")); S3 사용으로 이 코드는 사용 안함
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser()); // from에서 받아온 정보를 서버에 맞는 형태로 저장 할 수 있게 변환
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // remember user info
app.use(morgan("dev")); // logger
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }), //쿠키 스토어와 몽고DB를 연결해야한다
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware); // local 변수를 global 변수로 만들어 사용가능하게

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use는 누군가 /user에 접속하면 라우터의 기능들을 사용하겠다는 의미
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
