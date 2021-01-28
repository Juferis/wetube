import express from "express";
import routes from "../routes";
import {
  upload,
  videoDelete,
  videoDetail,
  videoEdit,
} from "../controllers/vidoeController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoDelete, videoDelete);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;
