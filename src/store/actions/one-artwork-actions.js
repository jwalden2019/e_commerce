import { VIEW_ARTWORK } from "../action-types/one-artwork-action-types.js";

export const viewArtwork = (dispatch, data) => {
	return dispatch({ type: VIEW_ARTWORK, payload: data });
};
