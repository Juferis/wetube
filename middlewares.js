import multer from "multer"; //multer은 업로드한 파일을 자동으로 변환해 준다
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
};

export const onlyPublic = (req, res, next) => {
  // 로그인 상태를 확인하여 로그인을 안해야 접근 가능한 곳 설정
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  // 로그인 상태를 확인하여 로그인을 해야 접근 가능한 곳 설정
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile"); //하나의 파일만 업로드 가능
