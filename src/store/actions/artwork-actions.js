import { SET_ARTWORK_DATA } from "../action-types/artwork-action-types.js";

export const setArtworkData = (dispatch, data) => {
	return dispatch({ type: SET_ARTWORK_DATA, payload: data });
};
