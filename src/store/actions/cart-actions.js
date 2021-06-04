import { ADD_TO_CART } from "../action-types/cart-action-types.js";

export const addToCart = (dispatch, data) => {
	return dispatch({ type: ADD_TO_CART, payload: data.id });
};
