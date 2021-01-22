import express from "express";
import routes from "../routes";
import {
  upload,
  videoDelete,
  videoDetail,
  videoEdit,
  videos,
} from "../controllers/vidoeController";

const videoRouter = express.Router();

videoRouter.get("/", videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoDetail, videoDelete);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;
