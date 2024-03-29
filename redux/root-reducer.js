import { combineReducers } from "redux";
import Auth from "./authentication/reducer";
import App from "@iso/redux/app/reducer";
import ThemeSwitcher from "@iso/redux/themeSwitcher/reducer";
import LanguageSwitcher from "@iso/redux/languageSwitcher/reducer";
import modal from "@iso/redux/modal/reducer";
import profile from "@iso/redux/profile/reducer";
import Users from "@redux/users/reducer";
import Properties from "@redux/properties/reducer";
import Categories from "@redux/categories/reducer";
import Amenities from "@redux/amenities/reducer";
import Posts from "@redux/posts/reducer";
import Blogs from "@redux/blogs/reducer";
import Tags from "@redux/tags/reducer";
import Meta from "@redux/meta/reducer";
import Companies from "@redux/companies/reducer";
import Bookings from "@redux/bookings/reducer";

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Users,
  Properties,
  Amenities,
  Categories,
  Bookings,
  Posts,
  modal,
  profile,
  Blogs,
  Tags,
  Meta,
  Companies,
});
