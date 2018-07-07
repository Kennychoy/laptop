import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Search from "./components/Search";
import MobileNav from "./components/MobileNav";
import Primary from "./components/Primary";


class App extends Component {
	render() {
		return (
			<Router basename="/laptop">
				<div className="App">
					<Search />
					<MobileNav />
					<Primary />
				</div>
			</Router>
		);
	}
}

export default App;
