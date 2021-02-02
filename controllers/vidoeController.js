import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  //js는 한번에 여러가지 일을 처리하기 때문에 async를 이용하여 완료하고 넘어가게 해야함
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
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
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const videoEdit = (req, res) =>
  res.render("videoEdit", { pageTitle: "Video Edit" });
export const videoDelete = (req, res) =>
  res.render("videoDelete", { pageTitle: "Video Delete" });
