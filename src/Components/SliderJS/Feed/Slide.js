import React from 'react'
export default function Slide({slide}) {
	return <div className="slide" style={{
		position: "relative",
		[slide.axis === "Y" ? "minHeight" : "minWidth"]: "100%"
	}}>
		{/* <img src={slide.image.url} 
			alt={slide.image.altText}
			style={{ objectFit:"cover", width:"100%", height:"100%", position:"absolute" }} /> */}
		<div className="slider-content"
			style={{
				bottom:"0",
				width:"100%",
				position:"absolute",
				color: slide.index >= 4 || slide.index <= 0 ? "red" : "blue"
			}}>
			<h2>{slide.title}</h2>
		</div>
	</div>
}