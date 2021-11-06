import React from 'react';
import Card from './Card';
export default function XScroll({ cards, config }) {
	return <div className="slider-x-scroll" style={{
		display: "flex",
		height: "100%",
		flexDirection: config.axis === "X" ? "row" : "column",
		transform: `translate${ config.axis }(${( -(config.axis === "X" ? config.clientWidth : config.clientHeight) * config.index )}px)`,
		transition: config.transition + "ms",
	}}>
		{cards.map((card, i) => <Card key={i} card={{...card, index: i, axis: config.axis}}/>)}
	</div>
}