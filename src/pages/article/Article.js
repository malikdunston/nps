import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Hoc from "../../components/getData";

class Article extends Component { 

constructor(props){
	super(props);
	this.state = {
		article: {},
		image: {},
		// related: [],
		id: null
	}
}

async loadArticle(newsId){
	let article = await this.props.getData("newsreleases", {q: ("id=" + newsId), limit: 1});
	article = article.data[0];
	// let related = await this.props.getData("newsreleases", {parkCode: article.parkCode, limit: 3});
	this.setState({
		article: article,
		image: article.image,
		// related: related.data,
		id: article.id
	})
}

componentDidMount(){
	this.loadArticle(this.props.match.params.articleId);
}

componentDidUpdate(prevProps){
	if(this.props.match.params.articleId !== prevProps.match.params.articleId){
		this.loadArticle(this.props.match.params.articleId);
	}
}

render(){ 		
	return (
		<div>
			<article>
				<img src={this.state.image.url} alt={this.state.image.altText}/>
				<h1>{this.state.article.title}</h1>
				<p>{this.state.article.abstract}</p>
				<a href={this.state.article.url} target="_blank" rel="noreferrer">
					<button className="mb-md-3 btn btn-sm btn-dark">View More</button>
				</a>
			</article>
			{/* <section id="related">
				<h2>Related News</h2>
				{this.state.related.map(a=>{
					return <div>
						<Link to={"/article/" + a.id}>
							<h2>{a.title}</h2>
							<p>{a.id}</p>
						</Link>
					</div>
				})}
			</section> */}
		</div>
	)
}
} export default  Hoc(Article);