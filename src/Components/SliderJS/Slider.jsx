import React, { useState, useEffect, useRef } from 'react'
import Controls from './Controls/Controls'
import Feed from './Feed/Feed';
import XScroll from './XScroll/XScroll';
export default function Slider( props ) {
	const slider = useRef(null);
	const [ config, setConfig ] = useState({
		axis: props.axis ? props.axis : "X",
		transition: props.transition ? props.transition : 400,
		controls: props.controls ? props.controls : false,
		index: props.cards ? 0 : 1,
		xScroll: props.cards ? props.cards : false,
		cardSize: props.cardSize ? props.cardSize + "%" : "100%",
		transform: null
	});
	const move = (to) => {
		console.log("move", to);
		if(props.cards){
			setConfig(oldConfig => {
				let distance = oldConfig.axis === "X" ? 
					oldConfig.clientWidth : 
					oldConfig.clientHeight;
				console.log(distance);
			// difference from feed...
				distance = distance / ( 100 / props.cardSize );
				if(to === "next"){
					let increment = ( distance ) * (oldConfig.index + 1) * -1;
					let transProp = `translate${ oldConfig.axis }(${ increment }px)`
					console.log(distance, increment, transProp);
					return {
						...oldConfig,
						direction: to,
						transform: transProp,
						index: oldConfig.index < props.cards.length - 1 ? oldConfig.index + 1 : oldConfig.index
					}
				}else if(to === "prev"){
					let increment = ( distance ) * (oldConfig.index - 1) * -1;
					let transProp = `translate${ oldConfig.axis }(${ increment }px)`
					console.log(distance, increment, transProp);
					return {
						...oldConfig,
						direction: to,
						transform: transProp,
						index: oldConfig.index > 0 ? oldConfig.index - 1 : oldConfig.index
					}
				}else if(typeof to === "number"){
					let increment = ( distance ) * oldConfig.index * -1;
					let transProp = `translate${ oldConfig.axis }(${ increment }px)`
					console.log(distance, increment, transProp);
					return {
						...oldConfig,
						direction: undefined,
						transform: transProp,
						index: to
					}
				}
			})
		}else if(props.slides){
			setConfig(oldConfig => {
				if(to === "next"){
					return {
						...oldConfig,
						direction: to,
						index: oldConfig.index >= props.slides.length + 1 ? 1 : oldConfig.index + 1
					}
				}else if(to === "prev"){
					return {
						...oldConfig,
						direction: to,
						index: oldConfig.index <= 0 ? props.slides.length : oldConfig.index - 1
					}
				}else if(typeof to === "number"){
					return {
						...oldConfig,
						direction: undefined,
						index: to + 1
					}
				}
			})
		}
	}
	const resetDom = () => {
		setConfig(oldConfig=>{
			return {
				...oldConfig,
				clientWidth: slider.current.clientWidth,
				clientHeight: slider.current.clientHeight,
			}
		});
	};
	useEffect(() => { resetDom(); window.addEventListener("resize", resetDom) }, [])
	return <div sljs=""  className="slider-js" ref={slider} style={{ position: "relative", overflow: "hidden" }}>
		{!config.controls ? "" : <Controls move={move} data={props.cards ? props.cards : props.slides} config={config}/>}
		{props.cards ? <XScroll config={config} cards={props.cards}/> : "" }
		{props.slides ? <Feed  config={config} slides={[ props.slides[ props.slides.length - 1 ], ...props.slides, props.slides[ 0 ] ]}/> : ""}
	</div>
}