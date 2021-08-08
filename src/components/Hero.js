import React, { Component } from 'react'

export default class Hero extends Component {
	render() {
		return (
			<section id="Hero">
				<h1><span>
					{this.props.title}
				</span></h1>

				{this.props.content.map(c=>{
					if(c[1] === "webm" || c[1] === "mp4"){
						return <video 
							muted = "muted"
							autoplay = "autoplay"
							loop = "loop"
							playsinline = "playsinline"
							webkit-playsinline = "webkit-playsinline">
							{this.props.content.map(c=><source
								src={c[0]}
								type={"video/" + c[1]}/>)}
						</video>
					} else{
						return <img src={c[0]} alt={c[1]} />
					}
				})}


			</section>
		)
	}
}