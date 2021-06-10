import { SET_FEATURE } from "../action-types/slider-actions-types";

export const setFeature = (dispatch, data) => {
	return dispatch({ type: SET_FEATURE, payload: data });
};
