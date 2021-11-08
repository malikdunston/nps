import React, { useState, useEffect } from 'react'
import getData from "./../Components/getData";
import { Route, Link, withRouter } from "react-router-dom";
function Article( props ) {
	const [ state, setState ] = useState({
		article: {},
		image: {},
		id: null
	})
	const getArticle = async () => {
		let article = await props.getData("newsreleases", {q: ("id=" + props.match.params.articleId), limit: 1});
		article = article.data[0];
		setState(prevState => {
			return {
				...prevState,
				article: article,
				image: article.image,
				id: article.id
			}
		})
	}
	useEffect(()=>{
		getArticle();
	}, []);
	return (
		<div>
			<article className="container">
				adsf
				<img src={state.image.url} alt={state.image.altText}/>
				<h1>{state.article.title}</h1>
				<p>{state.article.abstract}</p>
				<a href={state.article.url} target="_blank" rel="noreferrer">
					<button className="mb-md-3 btn btn-sm btn-dark">View More</button>
				</a>
			</article>
		</div>
	)
}
export default getData(Article);