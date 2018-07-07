import React, { Component } from 'react';

class Testing extends Component {
	render(){
		return (
			<div id='test'>testing</div>
		)
	}
	componentDidMount(){
		document.querySelector("#test").addEventListener("click", () => {
			document.querySelector("#test").innerHTML = "shit"
		})
		
	}
}

export default Testing;