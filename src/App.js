import React, { useState } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import Logo from "./assets/images/logo.svg";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import video_mp4 from "./assets/videos/hero_video.mp4";
import video_webm from "./assets/videos/hero_video.webm";
function App( props ) {
	const [ hero, setHero ] = useState([
		[video_mp4, "mp4"],
		[video_webm, "webm"]
	])
	return <div className={"App " + (props.location.pathname.split("/")[1] || "home")}>
		<Navigation logo={Logo}/>
		{/* <Route path="/search"
			render={()=>{
				return <div>SearchComp</div>
			}}/> */}
		<Route path="/"
			render={()=>{
				return <Home heroData={hero}/>
			}}/>
	</div>
}
export default withRouter(App);