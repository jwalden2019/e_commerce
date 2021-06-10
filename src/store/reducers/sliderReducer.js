import { SET_FEATURE } from "../action-types/slider-actions-types.js";
import { SliderData } from "../../SliderData.js";

const initialState = SliderData[0];

const sliderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FEATURE:
			return (state = action.payload);
		default:
			return state;
	}
};

export default sliderReducer;
