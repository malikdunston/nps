import React, { Component } from 'react';
import { Route, Link, withRouter } from "react-router-dom";
import Hoc from "../../components/getData";

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: {
				parks: [],
				news: [],
			},
			thisState: ""
		}
	}
	async componentDidMount(){
		let searchTerm = this.props.match.params.searchFor;
		let thisState = (this.props.states.filter(s=>s[0] === searchTerm))[0];
		let parks = await this.props.getData("parks", {stateCode: searchTerm});
		let news = await this.props.getData("newsreleases", {stateCode: searchTerm});
		this.setState({
			data: {
				parks: parks.data,
				news: news.data,
			},
			thisState: thisState
		})
	}

	async componentDidUpdate(prevProps){
		if(prevProps.match.params !== this.props.match.params){
			let searchTerm = this.props.match.params.searchFor;
			let thisState = (this.props.states.filter(s=>s[0] === searchTerm))[0];
			let parks = await this.props.getData("parks", {stateCode: searchTerm});
			let news = await this.props.getData("newsreleases", {stateCode: searchTerm});
			this.setState({
				data: {
					parks: parks.data,
					news: news.data,
				},
				thisState: thisState
			})
		}
	}

	render() {
		return (
			!this.state.data ? "" : <div className="container">
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
						return <Link to={"/park/" + p.parkCode} className="card">
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
						return <Link to={"/article/"+f.id} className="card">
							<img src={f.image.url} alt={f.altText}/>
							<div className="card-body">
								<h5 className="card-title">{f.title}</h5>
							</div>
						</Link>
					})}
				</section> : ""}
			</div>
		);
	}
}

export default Hoc(Search);