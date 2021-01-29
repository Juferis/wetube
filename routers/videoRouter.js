import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  videoEdit,
} from "../controllers/vidoeController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoDelete, videoDelete);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;
