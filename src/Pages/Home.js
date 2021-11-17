import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import getData from "./../Components/getData";
import { Slider } from "malikdunston-slider";
import Dropdown from "./../Components/Dropdown";
function Home( props ) {
	const [ news, setNews ] = useState([]);
	const [ parks, setParks ] = useState([]);
	const getNews = async () => {
		let news = await props.getData("newsreleases");
		news = news.data.filter(f=>f.image.url);
		news.length = 7;
		setNews( news );
	}
	const getParks = async () => {
		let parks = await props.getData("parks", {limit: 18});
		setParks( parks.data );
	}
	const newsTemplate = (slide, index) => slide ? <div style={{position: "relative", width: "100%", height: "100%"}}>
		<img src={slide.image.url} 
			alt={slide.image.altText}
			style={{ objectFit:"cover", width:"100%", height:"100%", position:"absolute" }} /> : ""}
		<div className="slider-content"
			style={{
				bottom:"0",
				width:"100%",
				position:"absolute",
				background: "rgba(0, 0, 0, .5)",
				color: "white"
			}}>
			<Link to={"/article/"+slide.id}>
				<h2>{slide.title}</h2>
			</Link>
		</div>
	</div> : "Slide #" + index
	const parkTemplate = (card, index) => <div style={{position: "relative", width: "100%", height: "100%"}}>
		{card.images ? <img src={card.images[0].url} 
			alt={card.images[0].altText}
			style={{ objectFit:"cover", width:"100%", height:"100%", position:"absolute" }} /> : ""}
		<div className="card-content"
			style={{
				bottom:"0",
				width:"100%",
				position:"absolute",
				background: "rgba(0, 0, 0, .5)",
				color: "white"
			}}>
			<Link to={"/parks/"+card.parkCode}>
				<h2>{card.fullName}</h2>
			</Link>
		</div>
	</div>
	const newsBreadcrumbs = (item, index) => <img src={item.image.url}/>
	const parkBreadcrumbs = (item, index) => <img src={item.images[0].url}/>
	useEffect(() => {
		getNews();
		getParks();
	}, [])
	return <div>
		<header>
			<h1>National Parks Service</h1>
		</header>
		{news ? <Slider slides={news}
			breadcrumbs={newsBreadcrumbs}
			template={newsTemplate}
			controls={true}
			transition={200}/> : ""}
		{parks ? <section>
			<h2>Explore Popular Parks</h2>
			<Slider cards={parks}
				template={parkTemplate}
				breadcrumbs={parkBreadcrumbs}
				controls={true}
				transition={200}
				size={75}/>
		</section> : ""}
		<Dropdown items={props.states}/>
	</div>
} 
export default getData( Home );