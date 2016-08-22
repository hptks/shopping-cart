export function addToCart(id) {
	return {
		type: 'ADD_TO_CART',
		payload: id
	};
}

export function incQuantity(id) {
	return {
		type: 'INC_QUANTITY',
		payload: id
	};
}