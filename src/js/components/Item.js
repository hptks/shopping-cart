import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';

@connect((store) => {
	return {
		items: store.items.items,
		itemsInCart: store.cart.itemsInCart
	};
})

export default class Item extends React.Component {
	addItemToCart() {
		const { id, items }=this.props;
		for (let i=0;i<items.length;i++) {
			if (items[i].id===id) {
				this.props.dispatch(addToCart(items[i]));
				break;
			}
		}
	}

	render() {
		const { name, price }=this.props;

		return (
			<div>
				<span>{name}&nbsp;${price}</span>
				<button type="submit" onClick={this.addItemToCart.bind(this)}>Add to cart</button>
			</div>
		)
	}
}