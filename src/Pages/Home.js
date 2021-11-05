import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getData from "./../Components/getData";
import Slider from "./../Components/SliderJS/Slider";
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
		let parks = await props.getData("parks");
		parks.data.length = 18;
		setParks( parks.data );
	}
	useEffect(() => {
		getNews();
		getParks();
	}, [])
	return <div>
		<h1>National Parks Service</h1>
		{news ? <Slider slides={news}
			height={250}
			transition={200}
			controls={false} /> : ""}
{/* 
	When we return here, consider replacing this with a <Slider></Slider> 
	with scroll="on"...
*/}
		{parks ? <section>
			<h1>View Parks</h1>
			{parks.map( p => <Link to={"/park/" + p.parkCode} className="card">
				<img src={p.images[0].url} alt={p.images[0].altText}/>
				<h5 className="card-title">{p.name}</h5>
			</Link>)}
		</section> : ""}
	</div>
} 
export default getData( Home );