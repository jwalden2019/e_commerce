import { SET_ARTWORK_DATA } from "../action-types/artwork-action-types.js";

const initialState = [];

const artworkData = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARTWORK_DATA:
			return (state = action.payload);
		default:
			return state;
	}
};

export default artworkData;
