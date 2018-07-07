import React, { Component } from 'react';

class CartTotal extends Component {

	render(){
		return (
			<div className="col-12 col-lg-4 cart-total">
				<div className="cart-total-wrapper">
					<div className="cart-title">Cart Total</div>
					<div className="cart-subtotal cart-total-misc d-flex">
						<div className="subtotal-text">Subtotal:</div>
						<div className="subtotal-sum">$<span className="subtotal-amount">{localStorage.getItem("total")}</span></div>
					</div>
					<div className="cart-delivery cart-total-misc d-flex">
						<div className="subtotal-text">Delivery</div>
						<div className="subtotal-sum">Free</div>
					</div>
					<div className="cart-total cart-total-misc d-flex">
						<div className="subtotal-text">Total</div>
						<div className="subtotal-sum">$<span className="total-amount">{localStorage.getItem("total")}</span></div>
					</div>
					
					<div className="cart-total-checkboxes custom-control custom-checkbox">
						<input type="checkbox" className="form-check-input custom-control-input" id="cashForDelivery"/>
						<label className="form-check-label custom-control-label" htmlFor="cashForDelivery">Cash on Delivery</label>							
					</div>
			
					<div className="cart-total-checkboxes custom-control custom-checkbox">
						<input type="checkbox" className="form-check-input custom-control-input" id="paypal"/>
						<label className="form-check-label custom-control-label" htmlFor="paypal">PayPal<img src="./img/paypal.png" alt=""/></label>							
					</div>				
					
					<button className="py-3">Checkout</button>
				</div>
			</div>
		);
	}
	componentDidMount(){
		let path = window.location.pathname;
		path.includes("checkout") ? void(0) : document.querySelectorAll(".custom-checkbox").forEach( div => div.style.display = "none");
		
		let tempSubTotal = 0;
		if(localStorage.getItem("cart")){
			let items = JSON.parse(localStorage.getItem("cart"));
			
			items.forEach(item => {
				item = JSON.parse(item);
				tempSubTotal += Number(item.price);
			})
		}
	}	
}

export default CartTotal;