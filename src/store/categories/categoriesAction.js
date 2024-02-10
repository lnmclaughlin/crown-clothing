import CATEGORIES_ACTION_TYPES from "./categoriesTypes";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export default setCategories;
