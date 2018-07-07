import React, { Component } from 'react';

import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

class Primary extends Component {

	cartState = () => {
		if(localStorage.getItem("cart")){
			let countItems = JSON.parse(localStorage.getItem("cart"));
			console.log(countItems.length);
			this.setState({cartItems: countItems.length}, () => {
				if(this.state.cartItems > 0){
					document.querySelector(".items-in-cart").style.color = "#fbb710";
				}
			})
		}
	}
	render(){
		return (
			<div className="primary">
				<Menu />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default Primary;