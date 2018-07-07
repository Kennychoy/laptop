import React, { Component } from 'react';
import CartTotal from "./CartTotal";

class Checkout extends Component {
	render(){
		return (
			<div className="checkout">
				<div className="container-fluid">
					<div className="row">
						<div className="checkout-title ml-4">CHECKOUT</div>
						<div className="col-12 col-lg-8">
							<form>
								<div className="row">
									<div className="col-md-6 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="First Name" id="checkout-firstName"/>
									</div>
									<div className="col-md-6 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Last Name" id="checkout-lasttName"/>
									</div>
									<div className="col-md-12 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Company Name" id="checkout-companyName"/>
									</div>
									<div className="col-md-12 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Email" id="checkout-email"/>
									</div>
									<div className="col-md-12 input-wrapper">
										<select className="form-control form-control-lg" placeholder="" id="checkout-country">
											<option>United States</option>
											<option>Germany</option>
											<option>France</option>
											<option>India</option>
											<option>Australia</option>
											<option>Brazil</option>
											<option>Canada</option>
											<option>Mars</option>
											<option>Moon</option>
										</select>
									</div>
									<div className="col-md-12 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Address" id="checkout-address"/>
									</div>
									<div className="col-md-12 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Town" id="checkout-town"/>
									</div>
									<div className="col-md-6 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Zip Code" id="checkout-zipCode"/>
									</div>
									<div className="col-md-6 input-wrapper">
										<input type="text" className="form-control form-control-lg" placeholder="Phone No" id="checkout-phoneNum"/>
									</div>
									<div className="col-md-12 input-wrapper">
										<textarea className="form-control form-control-lg" rows="5" placeholder="Leave a comment about your order" id="checkout-msg"></textarea>
									</div>
								</div>
								
						<div className="additional-checkbox custom-control custom-checkbox col-12">
							<input type="checkbox" className="form-check-input custom-control-input" id="create-account"/>
							<label className="form-check-label custom-control-label" htmlFor="create-account">Create an account</label>							
						</div>
						
						<div className="additional-checkbox custom-control custom-checkbox col-12">
							<input type="checkbox" className="form-check-input custom-control-input" id="ship-address"/>
							<label className="form-check-label custom-control-label" htmlFor="ship-address">Ship to a different address</label>							
						</div>
								
							</form>	
						</div>
						
						<CartTotal />
						
					</div>
				</div>
			</div>
		);
	}
}

export default Checkout;