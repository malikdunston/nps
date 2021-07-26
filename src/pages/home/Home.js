import React, { Component } from "react";
import HomeVideo from "./hero_video.mp4";
import Hoc from "../../components/getData";

class Home extends Component { 
constructor(props){
	super(props);
	this.state = {
		parks: []
	}
}
async componentDidMount(){
	const parks = await this.props.getData("parks");
	parks.data.length = 18;
	this.setState({
		parks: parks.data
	})
}
render(){ return (
	!this.state.parks ? "" : <div>
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
					{this.props.states.map(s=>{
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
			{this.state.parks.map(p=>{
				return <div className="card">
					<img className="" src={p.images[0].url} alt={p.images[0].altText}/>
					<div className="card-body">
						<h5 className="card-title">{p.name}</h5>
					</div>
				</div>
			})}
		</section>
	</div>
) }
} export default  Hoc(Home);