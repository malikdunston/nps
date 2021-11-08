import React, { useState } from 'react'
import getData from "./../Components/getData";
import { Route, Link, withRouter } from "react-router-dom";
function Article( props ) {
	const [ state, setState ] = useState({
		article: {},
		image: {},
		id: null
	})
	const loadArticle = () => {
		let article = await this.props.getData("newsreleases", {q: ("id=" + newsId), limit: 1});
		article = article.data[0];
		this.setState({
			article: article,
			image: article.image,
			id: article.id
		})
	}
	useEffect(()=>{
		this.loadArticle(this.props.match.params.articleId);
	}, []);
	useEffect(()=>{
		if(this.props.match.params.articleId !== prevProps.match.params.articleId){
			this.loadArticle(this.props.match.params.articleId);
		}
	}, [ prevProps ]);
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
export default withRouter(Article);