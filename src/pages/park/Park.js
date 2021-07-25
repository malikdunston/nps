import React, { Component } from "react";

class Park extends Component {
	componentDidMount(){
		console.log(this.props);
	}
	render() {
		return <div>
			<section id="carouselCtrl" className="carousel slide" >
				<div className="carousel-inner carousel-item-active">
					<div id="park-title" className="text-center">
						<h1><span>
							{this.props.current.name}
						</span></h1>
						<button className="btn">
							Plan Your Visit
						</button>
					</div>
					<img src={"/img/park/" + this.props.current.gallery[0][1]} alt={this.props.current.gallery[0][0]} />
				</div>
			</section>
			<section id="park-list" className="container">
				{this.props.current.list.map(l => {
					return <div>
						<div className="list-img">
							<img src={"/img/park/" + l[2]} alt={l[0]} />
						</div>
						<div className="list-copy">
							<h5>{l[0]}</h5>
							<p>{l[1]}</p>
						</div>
					</div>
				})}
			</section>
			<form id="sign up" className="py-4 px-3" novalidate>
				<div className="container">
					<h2 className="text-center">Sign up for Alerts</h2>
					<div className="form-group">
						<label for="alerts">Email Address:</label>
						<input id="alerts"
							placeholder="name@example.com"
							className="form-control">
						</input>
					</div>
					<div className="text-center">
						<button type="submit" className="mb-md-3 btn btn-sm btn-success">Sign Up</button>
					</div>
				</div>
			</form>
			<div className="px-3">
				<div id="gallery" className="carousel slide" data-ride="carousel">
					<div id="gallery-title" className="">
						<p>View Photo Galleries</p>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src={"/img/park/" + this.props.current.gallery[1][1] } alt="First slide" />
						</div>
					</div>
				</div>
			</div>
			<form id="contact" className="py-4 px-3" novalidate>
				<div className="container">
					<h2 className="text-center">Contact the Park</h2>
					<h5>Mailing Address:</h5>
					<p>47050 Generals Highway <br/> Three Rivers, CA 93271</p>
					<h5>Phone:</h5>
					<p>(559) 565-3341</p>
					<h5>Email Inquiry:</h5>
					<input placeholder="enter your message here"/>
					<div className="container text-center">
						<button type="submit" className="mb-md-3 btn btn-sm btn-primary">Send</button>
					</div>
				</div>
			</form>
		</div>
	}
} export default Park;