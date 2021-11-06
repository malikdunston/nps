import React, { useState } from 'react'
export default function Select({move, data}) {
	return <div className="slider-index" style={{
		background: "red",
		position: "absolute",
		bottom: 0,
		display: "flex"
	}}>
		{data.map((slide, index) => <div key={index + 1}>
			<div onClick={(e) => {move(index)}}>{index + 1}</div> 
		</div>)}
	</div>
}