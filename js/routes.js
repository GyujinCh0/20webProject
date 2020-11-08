//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Courses
const COURSES = "/course";
const UPLOAD = "/upload";
const COURSE_DETAIL = "/:id";
const EDIT_COURSE = "/:id/edit";
const DELETE_COURSE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users:USERS,
  userDetail:USER_DETAIL,
  editProfile:EDIT_PROFILE,
  changePassword:CHANGE_PASSWORD,
  courses:COURSES,
  upload:UPLOAD,
  courseDetail:COURSE_DETAIL,
  editCourse: EDIT_COURSE,
  deleteCourse: DELETE_COURSE
};

export default routes;