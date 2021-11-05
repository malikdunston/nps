import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getData from "./../Components/getData";
import Slider from "./../Components/SliderJS/Slider";
function Home( props ) {
	const [ news, setNews ] = useState([]);
	// const [ parks, setParks ] = useState([]);
	const getNews = async () => {
		let news = await props.getData("newsreleases");
		news = news.data.filter(f=>f.image.url);
		news.length = 7;
		setNews( news );
	}
	// const getParks = () => {
	// 	setParks( async (oldNews) => {
	// 		let parks = await props.getData("parks");
	// 		parks.data.length = 18;
	// 		return parks.data
	// 	} );
	// }
	useEffect(() => {
		getNews();
	}, [])
	return <div>

		{news ? <Slider slides={news}
			height={250}
			transition={200}
			controls={false} /> : ""}
			
		{/* <section id="popular" className="container py-4 px-3">
			<h1>View Parks</h1>
			{parks ? parks.map(p=>{
				return <Link to={"/park/" + p.parkCode} className="card">
					<img className="" src={p.images[0].url} alt={p.images[0].altText}/>
					<div className="card-body">
						<h5 className="card-title">{p.name}</h5>
					</div>
				</Link>
			}) : ""}
		</section> */}

	</div>
} 
export default getData( Home );