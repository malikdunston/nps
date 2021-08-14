import React, { Component } from "react";
	import { Link } from "react-router-dom";
	import Hero from "../../components/Hero.js";
	import Hoc from "../../components/getData";
	import FindAPark from "../../components/FindAPark.js";
		import HomeVideo from "./hero_video.mp4";
		import HomeVideoWEBM from "./hero_video.webm";

class Home extends Component { 
constructor(props){
	super(props);
	this.state = {
		parks: [],
		featured: [],
		heroData: [
			[HomeVideo, "mp4"],
			[HomeVideoWEBM, "webm"]
		]
	}
}
async componentDidMount(){
	let parks = await this.props.getData("parks");
	parks.data.length = 18;
	let featured = await this.props.getData("newsreleases");
	featured = featured.data.filter(f=>f.image.url);
	featured.length = 7;
	this.setState({
		parks: parks.data,
		featured: featured
	})
}
render(){ return (
	!this.state.parks ? "" : <div>
		<Hero {...this.props} title="National Parks Serivce" content={this.state.heroData}/>
		<FindAPark {...this.props}/>

		<section id="featured" className="container px-3">
			{!this.state.featured ? "" :  this.state.featured.map(f=>{
				return <Link to={"/article/"+f.id} className="card">
					<img src={f.image.url} alt={f.altText}/>
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