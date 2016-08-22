import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import InputItem from './InputItem';

@connect((store) => {
	return {
		items: store.items.items,
		itemsInCart: store.cart.itemsInCart
	};
})

export default class App extends React.Component {
	render() {
		let { items }=this.props;
		const Items=items.map((item) => {
			return <Item key={item.id} {...item} />
		});

		let { itemsInCart }=this.props;
		const ItemsInCart=itemsInCart.map((item) => {
			return <div key={item.id}>{item.name}&nbsp;{item.price}</div>
		});

		return (
			<div>
				<InputItem />
				<div>{Items}</div>
				<h2>Cart:</h2>
				<div>{ItemsInCart}</div>
			</div>
		)
	}
}