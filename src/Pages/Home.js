import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getData from "./../Components/getData";
import Slider from "./../Components/SliderJS/Slider";
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
		let parks = await props.getData("parks");
		parks.data.length = 18;
		setParks( parks.data );
	}
	useEffect(() => {
		getNews();
		getParks();
	}, [])
	return <div>
		<header>
			<h1>National Parks Service</h1>
		</header>
		{/* {news ? <Slider slides={news}
			transition={200}
			controls={["arrow"]} /> : ""} */}
		{parks ? <Slider cards={parks}
			cardSize={75}
			transition={200}
			controls={true} /> : ""}
		{/* <Dropdown items={props.states}/> */}
	</div>
} 
export default getData( Home );