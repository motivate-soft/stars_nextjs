import { combineReducers } from "redux";
import Auth from "./authentication/reducer";
import App from "@iso/redux/app/reducer";
import Contacts from "@iso/redux/contacts/reducer";
import ThemeSwitcher from "@iso/redux/themeSwitcher/reducer";
import LanguageSwitcher from "@iso/redux/languageSwitcher/reducer";
import modal from "@iso/redux/modal/reducer";
import quiz from "@iso/redux/quiz/reducer";
import profile from "@iso/redux/profile/reducer";
import Users from "@redux/users/reducer";
import Properties from "@redux/properties/reducer";
import Categories from "@redux/categories/reducer";
import Amenities from "@redux/amenities/reducer";
import Posts from "@redux/posts/reducer";

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Users,
  Properties,
  Amenities,
  Categories,
  Posts,
  Contacts,
  modal,
  quiz,
  profile,
});
