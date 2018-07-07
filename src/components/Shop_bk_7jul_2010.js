import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Shop extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: 1000,
			products: [
				{
					imgSrc: "./img/laptop-2.jpeg",
					price: "$1300",
					stars: 3,
					name: "Dell S12"
				},
				{
					imgSrc: "./img/laptop-4.jpeg",
					price: "$1200",
					stars: 1,
					name: "Lenovo A8"
				},
				{
					imgSrc: "./img/laptop-5.jpeg",
					price: "$3200",
					stars: 3,
					name: "Acer XZ"
				},
				{
					imgSrc: "./img/laptop-2.jpeg",
					price: "$2000",
					stars: 4,
					name: "Fujitsu T7"
				},
				{
					imgSrc: "./img/laptop-4.jpeg",
					price: "$2400",
					stars: 2,
					name: "HP B6"
				},
				{
					imgSrc: "./img/laptop-10.jpeg",
					price: "$4100",
					stars: 5,
					name: "Samsung C9"
				}
			]
		}
	}
	handleOnChange = (event) => {
		this.setState({value: event.target.value})
	}
	favourite = (times) => {
		let myArr = [];
		for(let j=0; j<times; j++){
			myArr.push(<i className="fas fa-star" key={j}></i>)
		}
		return myArr;
	}
	selectedFavourite = (times) => {
		let myArr = [];
		for(let j=0; j<times; j++){
			myArr.push('<i class="fas fa-star"></i>');			
		}		
		myArr = myArr.join("");		
		return myArr;
	}
	render(){
		return (
			<div className="shop">
				<div className="shop-menu">
				
					<div className="shop-menu-parts">
						<div className="shop-menu-title">Catagories</div>
						<div className="shop-menu-navs">
							<ul>
								<li className="shop-catagories" data-catagory="gaming">
									<Link to="#">Gaming</Link>
								</li>
								<li className="shop-catagories" data-catagory="onsale">
									<Link to="#">On Sale</Link>
								</li>
								<li className="shop-catagories" data-catagory="graphic">
									<Link to="#">Graphic</Link>
								</li>
								<li className="shop-catagories" data-catagory="4k">
									<Link to="#">4K</Link>
								</li>
								<li className="shop-catagories" data-catagory="i7">
									<Link to="#">i7</Link>
								</li>
								<li className="shop-catagories" data-catagory="1080">
									<Link to="#">1080</Link>
								</li>
								<li className="shop-catagories" data-catagory="16g">
									<Link to="#">16G</Link>
								</li>
							</ul>
						</div>
					</div>
					
					<div className="shop-menu-parts">
						<div className="shop-menu-title">Brands</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input brands-checkboxes" value="Fujitsu"/>Fujitsu
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input brands-checkboxes" value="Dell"/>Dell
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input brands-checkboxes" value="HP"/>HP
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input brands-checkboxes" value="Lenovo"/>Lenovo
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input brands-checkboxes" value="Samsung"/>Samsung
							</label>
						</div>
					</div>
					
					<div className="shop-menu-parts">
						<div className="shop-menu-title">Color</div>
						<div className="color-container">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					
					<div className="shop-menu-parts">
						<div className="shop-menu-title">Budget: ${this.state.value}</div>
						<form>
							<div className="form-group">
								<input type="range" className="form-control-range" min="1000" max="10000" step="500" id="price-range" onChange={this.handleOnChange} value={this.state.value}/>
								<label htmlFor="price-range"></label>
							</div>
						</form>
					</div>
					
					{/* .shop-menu*/}
				</div>
				
				<div className="shop-content">
				
					<div className="shop-content-subtles">
						<div className="shop-content-showing">SHOWING 1-6 OF 25</div>
						<div className="shop-content-filters">
						
							<div className="shop-content-display">
								<div className="shop-content-grid shop-content-format"><i className="fas fa-th-large"></i></div>
								<div className="shop-content-row shop-content-format"><i className="fas fa-bars"></i></div>
							</div>
							
							<div className="shop-viewby">
							
								<div className="shop-viewby-single">
									<div className="input-group input-group-sm">
										<div className="input-group-prepend">
											<span className="input-group-text">Sort By</span>
										</div>
										<div className="input-group-append">
											<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
												Please select
											</button>
											<div className="dropdown-menu">
												<Link to="#" className="dropdown-item">Date</Link>
												<Link to="#" className="dropdown-item">Latest</Link>
												<Link to="#" className="dropdown-item">Popular</Link>
											</div>
										</div>
									</div>
								</div>
								
								<div className="shop-viewby-single">
									<div className="input-group input-group-sm">
										<div className="input-group-prepend">
											<span className="input-group-text">View By</span>
										</div>
										<div className="input-group-append">
											<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
												Please select
											</button>
											<div className="dropdown-menu">
												<Link to="#" className="dropdown-item">6</Link>
												<Link to="#" className="dropdown-item">12</Link>
												<Link to="#" className="dropdown-item">18</Link>
											</div>
										</div>
									</div>
								</div>
								
							{ /* .shop-viewby */}
							</div>
							
						{/* .shop-content-filters */}
						</div>
						
					{/* .shop-subtles | also end of the top part */}	
					</div>
					
					
					<div className="row">
						
						{this.state.products.map( (item, i) => {
							return (
								<div className="col-12 col-sm-6 col-md-12 col-xl-6" key={i}>
									<div className="single-product-wrapper">
										<div className="single-product-layer"></div>
										<img src={item.imgSrc} />
									</div>
									<div className="product-deatils">
										<div className="priceAndStars">
											<div className="product-price">{item.price}</div>
											<div className="product-stars">
												{this.favourite(item.stars)}
											</div>
										</div>
										<div className="nameAndCart">
											<div className="product-name">{item.name}</div>
											<div className="product-cart">
												<i className="fas fa-shopping-cart" data-obj={JSON.stringify(item)} onClick={this.handleOnClick}></i>
											</div>
										</div>
									</div>
								</div>
							);
						})}
						
					{/* .row */}
					</div>
					
					<div className="shop-pagination">
						<ul className="pagination pagination-lg justify-content-end">
							<li className="page-item">
								<Link to="#" className="page-link">01</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link">02</Link>
							</li>
							<li className="page-item">
								<Link to="#" className="page-link">03</Link>
							</li>
						</ul>
					</div>
				{/*shop-content*/}
				</div>
				
				{/* .shop */}
			</div>
		);
	}
	handleOnClick = (e) => {
		console.log(JSON.parse(e.target.getAttribute("data-obj")))
	}
	animateCart = () => {
		document.querySelectorAll(".product-cart .fa-shopping-cart").forEach( cart => {
			cart.addEventListener("click", () => {
				cart.style.transform = "scale(1.5)";
				setTimeout(() => {
					cart.style.transform = "scale(1)";
				},100);
			});
		})
	}
	renderNewContent = (e) => {
		document.querySelectorAll(".brands-checkboxes").forEach( item => {
			item.checked = false;
		});
		e.target.checked = true;
			
			let selectedCatagory = e.target.parentElement.getAttribute("data-catagory") || e.target.value;
			console.log(selectedCatagory);
			
			fetch("./products.json")
			.then(response => response.json())
			.then(data => {
				let myArr = data.filter( (datum) => datum[selectedCatagory]==true || datum["brand"]==selectedCatagory);
				if(myArr.length > 6){ myArr = myArr.slice(0, 6)};
				console.log(myArr);
				console.log(myArr.length);
				let productsDiv = document.querySelector(".shop-content .row");
				productsDiv.innerHTML = myArr.map((item, i)=> {
					return (
						`<div class="col-12 col-sm-6 col-md-12 col-xl-6" key={i}>
							<div class="single-product-wrapper">
								<div class="single-product-layer"></div>
								<img src=${item.pic} />
							</div>
							<div class="product-deatils">
								<div class="priceAndStars">
									<div class="product-price">$${item.price}</div>
									<div class="product-stars">
									${this.selectedFavourite(Number(item.favourite))}
									</div>
								</div>
								<div class="nameAndCart">
									<div class="product-name">${item.model}</div>
									<div class="product-cart">
										<i class="fas fa-shopping-cart" data-obj=${JSON.stringify(item)}></i>
									</div>
								</div>
							</div>
						</div>`
					)
				}).join('');
				this.animateCart();
			})				
			.catch( (err) => console.log(err));
	}
	componentDidMount(){
		
		this.animateCart();
				
		document.querySelectorAll(".shop-catagories").forEach( item => {
			item.addEventListener("click", this.renderNewContent, false);
		})
		
		document.querySelectorAll(".brands-checkboxes").forEach( item => 
			item.addEventListener('click', this.renderNewContent, false))		
	{/* componentDidMount */}	
	}
}

export default Shop;