import React, { Component } from 'react';
import { Link } from "react-router-dom";

import CartSingle from "./CartSingle";
import CartTotal from "./CartTotal";

class Cart extends Component {
	constructor(props){
		super(props);
		this.state = {
			subTotal: 0,
			total: 0,
			cartProduct: [

			]
		}
	}
	render(){
		return (
			<div className="cart">
				<div className="container-fluid">
					<div className="row">
						<div className="cart-title">Shopping Cart</div>
						<div className="col-12 col-lg-8 cart-table">
							<table className="table table-borderless">
								<thead>
									<tr>
										<th></th>
										<th>Name</th>
										<th>Price</th>
										<th>Quantity</th>
									</tr>
								</thead>
								<tbody>
									
									{localStorage.getItem("cart") ? this.state.cartProduct.map( (item,i) => {
										return (
											<CartSingle
												imgSrc={item.pic} 
												name={item.model} 
												price={item.price} 
												calcSubtotal={this.calcSubtotal} 
												key={i} 
											/>
										);
									}) : "you have nothing in your cart. Please go to the SHOP page to do some purchases"}
									
								</tbody>
							</table>
						</div>
				
						<CartTotal 
						subtotal={this.state.subTotal} 
						total={this.state.total} 
						/>
						
					</div>
				</div>
			</div>
		);
	}
	calcSubtotal = () => {
		let tempSingleTotal = 0;
		Array.from(document.querySelector("tbody").children).forEach( div => {
			tempSingleTotal += Number(div.getAttribute("data-singletotal"));
		});
		this.setState({subTotal: tempSingleTotal}, () => {
			this.setState({total: this.state.subTotal})
		});	
		localStorage.setItem("total", tempSingleTotal);
	}
	getCartItems = () => {
		let cartItems = localStorage.getItem("cart");
		cartItems = JSON.parse(cartItems);
		let tempArr = [];
		cartItems.forEach(item => {
			tempArr.push(JSON.parse(item));			
		});
		this.setState({cartProduct: tempArr}, () => {this.calcSubtotal()});
	}
	componentDidMount(){
		
		localStorage.getItem("cart") ? this.getCartItems() : void(0);		

	}
}

export default Cart;