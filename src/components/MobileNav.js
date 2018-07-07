import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MobileNav extends Component {

	render(){
		return (
			<div className="mobile-nav d-md-none">
				<nav className="navbar">
					<Link to="/" className="navbar-brand">
						<img src="./img/logo.png" />
					</Link>
					<button className="navbar-toggler collapsed" id="mobile-show-nav" type="button" data-toggle="collapse">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</nav>
			</div>
		);
	}
	toggleMenu = () => {
		document.querySelector(".main-nav").classList.toggle("slide-right-nav");
	}
	componentDidMount(){
		document.querySelector("#mobile-show-nav").addEventListener("click", this.toggleMenu);
		document.querySelector(".close-menu").addEventListener("click", this.toggleMenu);
	}
}

export default MobileNav;

{/* document.querySelector(".main-nav").classList.toggle("slide-right-nav"); */}