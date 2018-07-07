import React, { Component } from 'react';

class Search extends Component {
	render(){
		return (
			<div className="search">
			
			<div className="close-search">
				<button className='btn'>
					<i className="fas fa-times"></i>
				</button>
			</div>
			
				<div className="container">
					<div className="row">
						<div className="col-12">
							<form>
								<div className="input-group">
									<div className="input-group-prepend">
										<button className="btn btn-lg">
											<span className="input-group-text">
												<i className="fas fa-search"></i>
											</span>
										</button>
									</div>
									<input type="text" className="form-control input-group-lg" placeholder="Type your keywords..." />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;