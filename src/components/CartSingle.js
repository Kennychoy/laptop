import React, { Component } from 'react';

class CartSingle extends Component {
	constructor(props){
		super(props);
		this.state = {
			qty: 1,
			singleTotal: this.props.price
		}
	}
	increment = () => {
		this.setState({qty: this.state.qty + 1}, () => {
			this.setState({singleTotal: this.props.price * this.state.qty}, this.props.calcSubtotal)
		});		
	}
	decrement = () => {
		if(this.state.qty === 0){
			return false
		}
		this.setState({qty: this.state.qty-1}, () => {
			this.setState({singleTotal: this.props.price * this.state.qty}, this.props.calcSubtotal)
		})
	}
	render(){
		return (
			<tr data-price={this.props.price} data-qty={this.state.qty} data-singletotal={this.state.singleTotal}>
				<td className="cart-img"><img src={this.props.imgSrc} alt="" /></td>
				<td className="cart-desc">{this.props.name}</td>
				<td className="cart-price"><span className="product-amount">{this.props.price}</span></td>
				<td className="cart-qty">
					<div className="qty-wrapper">
						<p>Qty</p>
						<span className="qty-increment" onClick={this.increment}><i className="fas fa-plus"></i></span>
						<span className="qty-num">{this.state.qty}</span>
						<span className="qty-decrement" onClick={this.decrement}><i className="fas fa-minus"></i></span>
					</div>
				</td>
			</tr>
		);
	}
	componentDidMount(){

	}
}

export default CartSingle;