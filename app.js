import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet({ contentSecurityPolicy: false })); // security
app.set("view engine", "pug");
//middleware
app.use("/uploads", express.static("uploads")); //누군가 uploads에 접근하면 디렉터리에서 파일을 보내준다(영상 재생가능)
app.use(cookieParser()); // from에서 받아온 정보를 서버에 맞는 형태로 저장 할 수 있게 변환
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // remember user info
app.use(morgan("dev")); // logger
app.use(localsMiddleware); // local 변수를 global 변수로 만들어 사용가능하게

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use는 누군가 /user에 접속하면 라우터의 기능들을 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app;
