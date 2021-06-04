import { combineReducers } from "redux";
import artworkData from "./artworkData.js";
import cartReducer from "./cartReducer.js";

export const rootReducer = combineReducers({
	artworkData,
	cartReducer,
});
