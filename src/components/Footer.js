import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
	render(){
		return (
			<footer>
			
				<div className="subscribe">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-7 col-lg-6 col-12">
								<h2>Subscribe for a <span>10% Discount</span></h2>
								<p>This is just a dummy site for testing purpose, we are not really selling laptops nor anything. The prices for those laptops are fake.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam tortor. Praesent vehicula risus et enim pulvinar scelerisque. Maecenas ac mi ipsum. Nunc nec iaculis urna. Duis nec urna mi.</p>
							</div>
							<div className="col-xl-5 col-lg-6 col-12">
								<div className="input-group">
									<input type='text' className="form-control form-control-lg" placeholder="Your Email..." />
									<div className="input-group-append">
										<button className="btn btn-lg" type="submit">Subscribe</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-nav">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-12">
								<div className="footer-logo mb-4">
									<Link to="/">
										<img src="./img/logo.png" className="img-fluid"/>
									</Link>
								</div>
								<p>Almost all of the images you see in this website were from a 
								free photos provider - <span>Pexel</span></p>
							</div>
							
							<div className="col-lg-8 col-12">							
								<nav className="navbar navbar-expand-md">
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footer-menu">
										<span></span>
										<span></span>
										<span></span>
									</button>

									<div className="collapse navbar-collapse" id="footer-menu">
										<ul className="navbar-nav">
											<li className="nav-item"><Link className="nav-link" to="#">HOME</Link></li>
											<li className="nav-item"><Link className="nav-link" to="#">SHOP</Link></li>
											<li className="nav-item"><Link className="nav-link" to="#">PRODUCT</Link></li>
											<li className="nav-item"><Link className="nav-link" to="#">CART</Link></li>
											<li className="nav-item"><Link className="nav-link" to="#">CHECKOUT</Link></li>
										</ul>
									</div>
								</nav>								
							</div>
							
						</div>
					</div>
				</div>
				
			</footer>
		);
	}
}

export default Footer;