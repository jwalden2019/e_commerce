import { VIEW_ARTWORK } from "../action-types/one-artwork-action-types.js";

const initialState = [];

const viewArtwork = (state = initialState, action) => {
	switch (action.type) {
		case VIEW_ARTWORK:
			return (state = [...state, action.payload]);
		default:
			return state;
	}
};
export default viewArtwork;
