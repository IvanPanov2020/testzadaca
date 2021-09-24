import { createStore } from "redux";
import rootReducer from "./reducer";

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState);
  return store;
};

const preloadedState = {
  scheduledActivites: [],
  doneActivites: [],
  activeActivite: { title: "" },
};

const store = configureStore(preloadedState);

export default store;
