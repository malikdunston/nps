import { Component } from "react";
import "./assets/webfonts/webfonts.css";
import "./assets/css/index.min.css";
import { Route, Link, withRouter } from "react-router-dom";
import Logo from "./assets/images/logo.svg";
import Navigation from "./Components/Navigation.js";
import Home from "./Pages/Home.js";
import HomeVideo from "./assets/videos/hero_video.mp4";
import HomeVideoWEBM from "./assets/videos/hero_video.webm";
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			heroData: [
				[HomeVideo, "mp4"],
				[HomeVideoWEBM, "webm"]
			]
		}
	}
	render() {return <div className={"App " + (this.props.location.pathname.split("/")[1] || "home")}>
		<Navigation logo={Logo}/>
		<Route path="/search"
			render={()=>{
				return <div>SearchComp</div>
			}}/>
		<Route path="/"
			render={()=>{
				return <Home/>
			}}/>
	</div>};
}; 
export default withRouter(App);