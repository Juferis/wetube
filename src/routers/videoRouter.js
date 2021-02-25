import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDelete,
  videoDetail,
  getVideoEdit,
  postVideoEdit,
} from "../controllers/vidoeController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.videoEdit(), onlyPrivate, getVideoEdit);
videoRouter.post(routes.videoEdit(), onlyPrivate, postVideoEdit);

// Delete Video
videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete);

export default videoRouter;
