import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Hero from "./../getData";
import getData from "./../Components/getData";
// import FindAPark from "./../getDatacomponents/FindAPark.js";
function Home( props ) {
	const [ parks, setParks ] = useState([]);
	const [ featured, setFeatured ] = useState([]);
	useEffect(() => {
		async function setData(){
			let parks = await props.getData("parks");
			parks.data.length = 18;
			let featured = await props.getData("newsreleases");
			featured = featured.data.filter(f=>f.image.url);
			featured.length = 7;
			setParks({ parks: parks.data });
			setFeatured({ featured: featured });
		}
		setData();
		console.log(props);
	}, [])
	return parks.length > 1 ? "" : <div>
		{/* <Hero {...props} title="National Parks Serivce" content={heroData}/>
		<FindAPark {...props}/> */}
		<section id="featured" className="container px-3">
			{!featured ? "" :  featured.map(f=>{
				return <Link to={"/article/"+f.id} className="card">
					<img src={f.image.url} alt={f.altText}/>
					<div className="card-body">
						<h5 className="card-title">{f.title}</h5>
					</div>
				</Link>
			})}
		</section>
		<section id="popular" className="container py-4 px-3">
			<h1>View Parks</h1>
			{parks.map(p=>{
				return <Link to={"/park/" + p.parkCode} className="card">
					<img className="" src={p.images[0].url} alt={p.images[0].altText}/>
					<div className="card-body">
						<h5 className="card-title">{p.name}</h5>
					</div>
				</Link>
			})}
		</section>
	</div>
} 
export default getData( Home );