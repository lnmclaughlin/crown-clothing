import { USER_ACTION_TYPES } from "./userTypes";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";

const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export default setCurrentUser;
