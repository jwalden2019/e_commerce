import { combineReducers } from "redux";
import artworkData from "./artworkData.js";
import cartReducer from "./cartReducer.js";
import viewArtwork from "./artworkReducer.js";
import sliderReducer from "./sliderReducer.js";

export const rootReducer = combineReducers({
	artworkData,
	cartReducer,
	viewArtwork,
	sliderReducer,
});
