import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/itemActions';

@connect((store) => {
	return {
		items: store.items.items
	};
})

export default class InputItem extends React.Component {
	constructor() {
		super();
		this.state={
			name: '',
			price: ''
		};
	}

	getName(e) {
		this.setState({
			name: e.target.value
		});
	}

	getPrice(e) {
		this.setState({
			price: e.target.value
		});
	}

	addItem() {
		const { name, price }=this.state;
		this.props.dispatch(addItem(name, price));
		this.setState({
			name: '',
			price: ''
		});
	}

	render() {
		return (
			<div>
				Name: <input type="text" onChange={this.getName.bind(this)} />
				<br />
				Price: <input type="text"  onChange={this.getPrice.bind(this)} />
				<br />
				<button type="submit" onClick={this.addItem.bind(this)}>Add item</button>
			</div>
		)
	}
}