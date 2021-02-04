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
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

// Delete Video
videoRouter.get(routes.videoDelete(), videoDelete);

export default videoRouter;
