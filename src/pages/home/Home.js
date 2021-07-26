import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeVideo from "./hero_video.mp4";
import Hoc from "../../components/getData";

class Home extends Component { 
constructor(props){
	super(props);
	this.state = {
		parks: [],
		featured: []
	}
}
async componentDidMount(){
	const parks = await this.props.getData("parks");
	parks.data.length = 18;
// for "featured" section, went with articles over newsreleases endponit.
// at least we can use listingDescription to get some body for the article page,
// along with a link to the article itself (for now...)
// options: find a way to get html from that link, open in a modal/webframe?
	const featured = await this.props.getData("articles");
	featured.data.length = 7;
	this.setState({
		parks: parks.data,
		featured: featured.data,
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
					className="form-control"
					onChange={(e)=>{
						console.log(e.target.value);
					}}>
					<option value="">Select A State...</option>
					{this.props.states.map(s=>{
						return <option value={s[0]}>{s[1]}</option>
					})}
				</select>
			</div>
			<div className="container text-center">
				<button type="submit" className="btn btn-sm btn-primary">Search</button>
			</div>
		</form>
		<section id="featured" className="container px-3">
			{!this.state.featured ? "" :  this.state.featured.map(f=>{
				return <Link to={"/article"} className="card">
					<img src={f.listingImage.url} alt={f.listingImagealtText}/>
					<div className="card-body">
						<h5 className="card-title">{f.title}</h5>
					</div>
				</Link>
			})}
		</section>
		<section id="popular" className="container py-4 px-3">
			<h1>View Parks</h1>
			{this.state.parks.map(p=>{
				return <Link to={"/park/" + p.parkCode} className="card">
					<img className="" src={p.images[0].url} alt={p.images[0].altText}/>
					<div className="card-body">
						<h5 className="card-title">{p.name}</h5>
					</div>
				</Link>
			})}
		</section>
	</div>
) }
} export default  Hoc(Home);