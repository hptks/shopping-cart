const initialState={
	itemsInCart: []
};

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			return {...state, itemsInCart: [...state.itemsInCart, action.payload]}
			break;
		}
	}

	return state;
}