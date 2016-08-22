export function addItem(name, price) {
	return {
		type: 'ADD_ITEM',
		payload: {
			id: Date.now(),
			name,
			price
		}
	};
}