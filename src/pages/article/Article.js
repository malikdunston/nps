import React, { Component } from "react";
import Hoc from "../../components/getData";

class Article extends Component { 

constructor(props){
	super(props);
	this.state = {
		article: {},
		image: {},
		id: null
	}
}

async loadArticle(newsId){
	let article = await this.props.getData("newsreleases", {q: ("id=" + newsId), limit: 1});
	article = article.data[0];
	this.setState({
		article: article,
		image: article.image,
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
			<article className="container">
				<img src={this.state.image.url} alt={this.state.image.altText}/>
				<h1>{this.state.article.title}</h1>
				<p>{this.state.article.abstract}</p>
				<a href={this.state.article.url} target="_blank" rel="noreferrer">
					<button className="mb-md-3 btn btn-sm btn-dark">View More</button>
				</a>
			</article>
		</div>
	)
}
} export default  Hoc(Article);