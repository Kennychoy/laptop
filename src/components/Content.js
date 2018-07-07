import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";

class Content extends Component {
	render(){
		return (
			<main>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/product" component={Product}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/checkout" component={Checkout}/>
				</Switch>
			</main>
		);
	}
}

export default Content;