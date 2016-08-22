import React from 'react';

export default class Item extends React.Component {
	render() {
		const { name, price }=this.props;

		return (
			<div>
				<span>{name}&nbsp;{price}</span>
				<button type="submit">Add to cart</button>
			</div>
		)
	}
}