import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class Menu extends Component {
	constructor(props){
		super(props);
		this.state = {
			showSearch: false
		}
	}
	render(){
		return (
			<nav className="main-nav">
			
				<button className="close-menu btn d-md-none d-block">
					<i className="fas fa-times"></i>
				</button>
				
				<Link to="/" className="navbar-brand w-100">
					<img src="./img/logo.png" className="w-100" />
				</Link>
			
				<ul className="nav flex-column">
					<li className="nav-item py-2">
						<NavLink to="/" className="nav-link">HOME</NavLink>
					</li>
					<li className="nav-item py-2">
						<NavLink to="/shop" className="nav-link">SHOP</NavLink>
					</li>
					<li className="nav-item py-2">
						<NavLink to="/product" className="nav-link">PRODUCT</NavLink>
					</li>
					<li className="nav-item py-2">
						<NavLink to="/cart" className="nav-link">CART</NavLink>
					</li>
					<li className="nav-item py-2">
						<NavLink to="checkout" className="nav-link">CHECKOUT</NavLink>
					</li>
				</ul>
				
				<div className="btn-group-vertical">
					<button className="btn menu-btn">Discount</button>
					<button className="btn menu-btn">Latest</button>
				</div>
				
				<ul className="secondary-nav">
					<li className="py-2"><Link to="/cart"><i className="fas fa-shopping-cart mr-2"></i>CART<span className="ml-2">(<span className="items-in-cart">0</span>)</span></Link></li>
					<li className="py-2"><Link to="#"><i className="far fa-star mr-2"></i>FAVOURITE</Link></li>
					<li className="py-2" id="search-btn"><Link to="#"><i className="fas fa-search mr-2"></i>SEARCH</Link></li>
				</ul>
				
				<ul className="social-nav d-flex justify-content-between">
					<li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
					<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
					<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
					<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
				</ul>
				
			</nav>
		);
	}
	showSearch = () => {
		document.querySelector(".search").style.transform = "translateY(0px)";
		window.innerWidth > 768 ? document.querySelector(".primary").style.transform = "translateY(246px)" : document.querySelector(".search").style.transform = "translateY(0px)";
	}
	hideSearch = () => {		
		document.querySelector(".search").style.transform = "translateY(-100%)";
		window.innerWidth > 768 ? document.querySelector(".primary").style.transform = "translateY(0px)" : document.querySelector(".search").style.transform = "translateY(-100%)";
	}
	componentDidMount(){
		document.querySelector("#search-btn").addEventListener("click", () => {
			this.setState({showSearch: !this.state.showSearch}, this.state.showSearch ? this.hideSearch : this.showSearch);
		});
		
		document.querySelector(".close-search").addEventListener("click", () => {
			this.setState({showSearch: false}, this.hideSearch)
		});
	}
}

export default Menu;