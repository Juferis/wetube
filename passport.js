import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); //쿠키에 id 담기
passport.deserializeUser(User.deserializeUser()); // id 검사하기
