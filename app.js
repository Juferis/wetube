import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.set("view engine", "pug");
// middleWare
app.use(bodyParser()); // from에서 받아온 정보를 서버에 맞는 형태로 저장 할 수 있게 변환
// app.use(cookieParser.json());
// app.use(cookieParser.urlencoded({ extended: true })); // remember user info
app.use(helmet()); // security
app.use(morgan("dev")); // logger

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use는 누군가 /user에 접속하면 라우터의 기능들을 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app;
