import { SET_FEATURE } from "../action-types/slider-actions-types.js";

const initialState = [];

const sliderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FEATURE:
			return (state = action.payload);
		default:
			return state;
	}
};

export default sliderReducer;
