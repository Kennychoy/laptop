import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			homeContent: [
				{					
					imgSrc: "./img/laptop-1.jpeg",
					price: "From $1800",
					text: "Super Light Weight"
				},
				{					
					imgSrc: "./img/laptop-2.jpeg",
					price: "From $2600",
					text: "Business Package"
				},
				{					
					imgSrc: "./img/laptop-3.jpeg",
					price: "From $1500",
					text: "For Designing"
				},
				{					
					imgSrc: "./img/laptop-4.jpeg",
					price: "From $1750",
					text: "Seasonal Promotion"
				},
				{					
					imgSrc: "./img/laptop-5.jpeg",
					price: "From $3000",
					text: "i7 CPU"
				},
				{					
					imgSrc: "./img/laptop-6.jpeg",
					price: "From $2400",
					text: "16G Ram"
				},
				{					
					imgSrc: "./img/laptop-7.jpeg",
					price: "From $2200",
					text: "Professional"
				},
				{					
					imgSrc: "./img/laptop-8.jpeg",
					price: "From $1800",
					text: "Ideal Gaming"
				},
				{					
					imgSrc: "./img/laptop-9.jpeg",
					price: "From $1600",
					text: "Water Proof"
				},
				{					
					imgSrc: "./img/laptop-10.jpeg",
					price: "From $1400",
					text: "Bullet Proof"
				}
			]
		}
	}
	render(){
		return (
			<div className="home">
				
				{this.state.homeContent.map( (item, i) => {
					return (
						<div className="home-individual" key={i}>
							<Link to="#" className="d-block">
								<div className="individual-layer"></div>
								<img src={item.imgSrc} className="img-fluid" />
								<div className="individual-text">
									<h5 className="individual-price">{item.price}</h5>
									<h4 className="individual-name">{item.text}</h4>
								</div>
							</Link>
						</div>
					)
				})}
				
			</div>
		);
	}
}

export default Home;