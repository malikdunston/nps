import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ card }) {
	return <div className="card" style={{
		position: "relative",
		[card.axis === "Y" ? "minHeight" : "minWidth"]: card.cardSize
	}}>
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
}