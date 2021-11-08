import { configure } from '@testing-library/react'
import React, { useState } from 'react'
export default function Select({move, data, config}) {
	return <div className="select" style={{ position: "absolute", display: "flex" }}>
		{data.map((slide, index) => <div key={index + 1} onClick={(e) => {move(index)}} className={config.index === index ? "selection selected" : "selection "}>
			{/* {slide.images[0].url} */}
			<img src={slide.images[ 0 ].url} alt="" />
		</div>)}
	</div>
}