import React, { Component } from "react";
// import {Link} from "react-router-dom";
import HomeVideo from "./hero_video.mp4";

class Home extends Component { 

constructor(props){
	super(props);
	this.state = {
		states: []
	}
}

componentDidMount(){
	let abbrs = Object.keys(this.props.states);
	abbrs = abbrs.map(s=>{
		return [s, this.props.states[s]]
	});
	this.setState(prevState=>{
		return {states: abbrs}
	})
}

render(){ return (
	<div>
		<section id="carouselCtrl" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<h1><span>
					National Parks Service
				</span></h1>
				<video className="carousel-item-active" muted autoplay="autoplay" loop="loop" style={{pointerEvents: "none"}}>
					<source src={HomeVideo} type="video/mp4" />
				</video>
			</div>
		</section>

		<form className="py-4" novalidate>
			<div className="container form-group px-3">
				<h2 className="text-center">Find A National Park</h2>
				<label for="select-a-state">Select A State</label>
				<select id="select-a-state"
					className="form-control">
					<option value="">Select A State...</option>
					{this.state.states.map(s=>{
						return <option value="">{s[1]}</option>
					})}
				</select>
			</div>
			<div className="container text-center">
				<button type="submit" className="btn btn-sm btn-primary">Search</button>
			</div>
		</form>

		<section id="featured" className="container px-3">
			{this.props.featured.map(f=>{
				return <div className="card">
					<img src={("/img/home/" + f.img)} alt={f.title}/>
					<div className="card-body">
						<h5 className="card-title">{f.title}</h5>
					</div>
				</div>
			})}
		</section>

		<section id="popular" className="container py-4 px-3">
			<h1>Popular Parks</h1>
			{this.props.popular.map(p=>{
				return <div className="card">
					<img className="" src={"/img/home/" + p[1]} alt={p[0]}/>
					<div className="card-body">
						<h5 className="card-title">{p[0]}</h5>
					</div>
				</div>
			})}
		</section>

	</div>
) }
} export default  Home;
