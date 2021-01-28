// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/users/:id"; // express가 자동으로 변하는 값이라는 것을 파악
const EDIT_PROFILE = "/users/edit-profile";
const CHANGE_PASSWORD = "/users/change-password";

// Videos
const VIDOES = "/videos";
const UPLOAD = "/videos/upload";
const VIDEO_DETAIL = "/videos/:id";
const VIDEO_EDIT = "/videos/:id/edit";
const VIDEO_DELETE = "/videos/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDOES,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  videoEdit: VIDEO_EDIT,
  videoDelete: VIDEO_DELETE,
};

export default routes;
