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

export function checkoutItems() {
	return {
		type: 'CHECKOUT'
	};
}