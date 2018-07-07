import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Product extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: 1
		}
	}
	render(){
		return (
			<div className="product">
				<div className="container-fluid">
					<div className="current-location"><Link to="/">Home</Link> > <Link to={(this.props.match.path).replace("/", "")}>{(this.props.match.path).replace("/", "")}</Link></div>
					
					<div className="row">
					
						<div className="col-lg-7 col-12">
							<div className="carousel-wrapper">
								<div id="myCarousel" className="carousel slide" data-ride="carousel">
								
			
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src="./img/carousel-1.jpeg" alt=""/>
										</div>
										<div className="carousel-item">
											<img src="./img/carousel-2.jpeg" alt=""/>
										</div>
										<div className="carousel-item">
											<img src="./img/carousel-3.jpeg" alt=""/>
										</div>
										<div className="carousel-item">
											<img src="./img/carousel-4.jpeg" alt=""/>
										</div>
									</div>
									
									<ul className="carousel-indicators">
										<li data-target="#myCarousel" data-slide-to="0" className="active">
											<img src="./img/carousel-1.jpeg" alt=""/>
										</li>
										<li data-target="#myCarousel" data-slide-to="1">
											<img src="./img/carousel-2.jpeg" alt=""/>
										</li>
										<li data-target="#myCarousel" data-slide-to="2">
											<img src="./img/carousel-3.jpeg" alt=""/>
										</li>
										<li data-target="#myCarousel" data-slide-to="3">
											<img src="./img/carousel-4.jpeg" alt=""/>
										</li>
									</ul>
								
								</div>
								
							{/* .carsousel-wrapper */}
							</div>
						{/* .col-md-7 */}
						</div>
						
						<div className="col-lg-5 col-12">
						
							<div className="product-desc">
								<div className="product-desc-text">
									<div className="product-desc-price"><span>$1800</span></div>
									<div className="product-desc-name">Latest Dell Laptop</div>
									<div className="product-desc-ratingAndreview">
										<div className="product-desc-rating">
											<i className="fas fa-star fa-xs"></i>
											<i className="fas fa-star fa-xs"></i>
											<i className="fas fa-star fa-xs"></i>
											<i className="fas fa-star fa-xs"></i>
											<i className="fas fa-star fa-xs"></i>
										</div>
										<div className="product-desc-review">
											<Link to="#">Write a review</Link>
										</div>
									</div>
									<div className="product-desc-availability">
										<span></span>
										<p>In stock</p>
									</div>
								</div>
								<div className="product-details">This is just a dummy page so the functions won't be working here. Please go to the "SHOP" page.<br /><br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at consectetur magna. Vivamus pretium arcu dolor, ac faucibus justo facilisis imperdiet. Suspendisse ullamcorper, sem at pharetra auctor.
								</div>
								<div className="product-quantity">
									<form>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">Qty</span>
											</div>
											<input type="number" name="product-quantity" min="1" max="10" value={this.state.value} onChange={this.handleOnChange}/>
											
										</div>
									</form>
								</div>
								<button>Add to cart</button>
							{/* .product-desc */}
							</div>
							
						{/* .col-md-5 */}
						</div>
						
					{/* .row */}
					</div>
				{/* .container-fluid */}
				</div>
			{/* .product */}
			</div>
		);
	}
	handleOnChange = (evt) => {
		this.setState({value: evt.target.value});
	}
	componentDidMount(props){		
		console.log(this.props);
	}
}

export default Product;