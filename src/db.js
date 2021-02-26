import mongoose from "mongoose";
import dotenv from "dotenv";

//.env파일 안에 있는 정보를 가져온다
dotenv.config();

// mongodb://localhost:포트번호/DataBase이름 포트번호는 wsl에 mongod 치면 나옴
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, //새 버전엔 기본적으로 되어 있지만 해두는게 좋다
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
