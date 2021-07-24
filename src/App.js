import { Component } from "react";
	import "./assets/webfonts/webfonts.css";
	import "./assets/css/main.css";
	import "./assets/css/index.min.css";
	import { Route, Link, withRouter } from "react-router-dom";
	import Logo from "./assets/images/logo.svg";
	import Config from "./config.json";
	import Navigation from "./components/Navigation.js";
	import Footer from "./components/Footer.js";
	import Home from "./pages/home/Home.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	};
	async componentDidMount() {
		let parks = await this.getData("parks", {});
		console.log(parks);
	}
	async getData(lookFor, params){
		params = params || {};
		params["api_key"] = Config.__nps_config;
		let url = new URL(("https://developer.nps.gov/api/v1/" + lookFor));
		url.search = new URLSearchParams(params).toString();
		return  await fetch(url).then(resp => resp.json());
	}
	render() {return <div className={"App " + this.props.location.pathname.split("/")[1]}>
		<Navigation logo={Logo}/>
		<Route exact path="/"
			render={()=>{
				return <Home states={Config.state} popular={Config.data.home.popular} featured={Config.data.home.featured} />
			}}/>
		<Footer logo={Logo}/>
	</div>};
}; 

export default withRouter(App);