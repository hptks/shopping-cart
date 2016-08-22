const initialState={
	itemsInCart: [],
	itemsQuantity: []
};

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			return {...state, itemsInCart: [...state.itemsInCart, action.payload]};
			break;
		}
		case 'INC_QUANTITY': {
			return {...state, itemsQuantity: [...state.itemsQuantity, action.payload]};
			break;
		}
		case 'CHECKOUT': {
			return {...state, itemsInCart: [], itemsQuantity: []};
		}
	}

	return state;
}