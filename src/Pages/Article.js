import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getData from "./../Components/getData";
import BtnSlider from "./../Components/SliderJS/Controls/BtnSlider";
import Slider from "./../Components/SliderJS/Slider";
function Article( props ) {
	const [ article, setArticle ] = useState({});
	const [ thisPark, setThisPark ] = useState({});
	const [ relatedArticles, setRelatedArticles ] = useState([]);
	const getArticle = async () => {
		let article = await props.getData("newsreleases", {q: ("id=" + props.match.params.articleId), limit: 1});
		article = article.data[0];
		setArticle(article);
	}
	const getThisPark = async () => {
		let thisPark = await props.getData("parks", {parkCode: article.parkCode});
		// thisPark = thisPark.data[0];
		console.log(thisPark);
		setThisPark(thisPark.data[0]);
	}
	const getRelatedArticles = async () => {
		if(thisPark.states){
			let stateCode = thisPark.states.split(",")[0];
			let articlesByState = await props.getData("newsreleases", {stateCode: stateCode});
			articlesByState = articlesByState.data.filter(article => article.id !== props.match.params.articleId);
			console.log(stateCode, articlesByState);
			setRelatedArticles(articlesByState);
		}
	}
	useEffect(()=>{
		getArticle();
		getThisPark();
		getRelatedArticles();
	}, [ ]);
	return (
		<div>
			{article.image ? <article className="container">
				<img src={article.image.url} alt={article.image.altText} style={{width: "100%"}}/>
				<h1>{article.title}</h1>
				<p>{article.abstract}</p>
				<a href={article.url} target="_blank" rel="noreferrer">
					<button className="mb-md-3 btn btn-sm btn-dark">View More <BtnSlider direction={"next"} move={()=>{}}/></button>
				</a>
			</article> : ""}
			
			<section>
				More News
				{relatedArticles ? relatedArticles.map( article => {
					return <div>
						<Link to={"/article/" + article.id}>
							{article.title}
						</Link>
					</div>
				}) : ""}
				{/* <Slider cards={state.relatedArticles}
					cardSize={40}
					transition={100}/> */}
			</section>
		</div>
	)
}
export default getData(Article);