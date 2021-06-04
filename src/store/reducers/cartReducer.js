import { ADD_TO_CART } from "../action-types/cart-action-types.js";

const initialState = [];

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return (state = [...state, action.payload]);
		default:
			return state;
	}
};
export default cartReducer;
