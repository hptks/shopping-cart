const initialState={
	items: []
};

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_ITEM': {
			return {...state, items: [...state.items, action.payload]};
			break;
		}
		case 'CHECKOUT': {
			return {...state, items: []};
		}
	}

	return state;
}