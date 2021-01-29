import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  // ES6 방식
  const {
    query: { term: searchingBy },
  } = req;
  // ES6 이전의 방식
  // const searchingBy = req.query.term
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // 할 일 : 비디오 업로드 및 저장
  res.redirect(routes.videoDetail(123123));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const videoEdit = (req, res) =>
  res.render("videoEdit", { pageTitle: "Video Edit" });
export const videoDelete = (req, res) =>
  res.render("videoDelete", { pageTitle: "Video Delete" });
