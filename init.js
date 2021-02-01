import "./db";
import app from "./app";
import dotenv from "dotenv";

//.env파일 안에 있는 정보를 가져온다
dotenv.config();

const PORT = process.env.PORT || 4000; //.env 에서 포트를 가져오는데 실패하면 4000을 준다

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
