import React, { Component } from 'react';
import { Link } from "react-router-dom";
	import Hoc from "../../components/getData";
	import Hero from "../../components/Hero.js";

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: {
				parks: [],
				news: [],
			},
			heroData: [],
			thisState: ""
		}
	}
	async getSearchData(){
		let searchTerm = this.props.match.params.searchFor,
			thisState = (this.props.states.filter(s=>s[0] === searchTerm))[0],
			parks = await this.props.getData("parks", {stateCode: searchTerm}),
			news = await this.props.getData("newsreleases", {stateCode: searchTerm});
		let getImage = () => { // move this to Hero
			let limit = parks.data.length - 1,
				randomIndex = Math.floor(Math.random()*limit) + 1,
				randomPark = parks.data[ randomIndex ],
				randomImg = randomPark.images.length > 1 ? randomPark.images[1] : randomPark.images[1];
			return [
				[randomImg.url, randomImg.altText]
			]
		}
		this.setState({
			data: {
				parks: parks.data,
				news: news.data,
			},
			heroData: getImage(),
			thisState: thisState
		})
	}
	async componentDidMount(){
		this.getSearchData();
	}
	async componentDidUpdate(prevProps){
		if(prevProps.match.params !== this.props.match.params){
			this.getSearchData();
		}
	}
	render() {
		return (
			!this.state.data ? "" : <div>
				<Hero {...this.props} title={this.state.thisState[1]} content={this.state.heroData}/>
				<div className="container">
					<section>
						<Link to={"/search/parks/" + this.props.match.params.searchFor}>
							<button>Parks</button>
						</Link>
						<Link to={"/search/news/" + this.props.match.params.searchFor}>
							<button>News</button>
						</Link>
					</section>
					{this.props.match.params.searchIn === "parks" ? <section className="py-4 px-3">
						<h1>Parks / {this.state.thisState[1]}</h1>
						{this.state.data.parks.map(p=>{
							return <Link key={p.id} to={"/park/" + p.parkCode} className="card">
								<img className="" src={p.images[0].url} alt={p.images[0].altText}/>
								<div className="card-body">
									<h5 className="card-title">{p.name}</h5>
								</div>
							</Link>
						})}
					</section> : ""}
					{this.props.match.params.searchIn === "news" ? <section className="py-4 px-3">
						<h1>News / {this.state.thisState[1]}</h1>
						{this.state.data.news.map(f=>{
							return <Link key={f.id} to={"/article/"+f.id} className="card">
								<img src={f.image.url} alt={f.altText}/>
								<div className="card-body">
									<h5 className="card-title">{f.title}</h5>
								</div>
							</Link>
						})}
					</section> : ""}
				</div>
			</div>
		);
	}
}

export default Hoc(Search);