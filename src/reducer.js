import { combineReducers } from "redux";

import activitesReducer from "./activitiesSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `posts`, handled by `postsReducer`
  activeActivite: activitesReducer,
});

export default rootReducer;
