// src/reducers.js
import { combineReducers } from "redux";

// Import các slice reducers của bạn
import someSliceReducer from "./someSlice";

const rootReducer = combineReducers({
  someSlice: someSliceReducer,
});

export default rootReducer;
