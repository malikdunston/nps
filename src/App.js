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
	import Article from "./pages/article/Article.js";
	import Park from "./pages/park/Park.js";

class App extends Component {
	render() {return <div className={"App " + this.props.location.pathname.split("/")[1]}>
		<Navigation logo={Logo}/>
		<Route exact path="/"
			render={()=>{
				return <Home 
					popular={Config.data.home.popular} 
					featured={Config.data.home.featured} />
			}}/>
		<Route exact path="/article"
			render={()=>{
				return <Article 
					current={Config.data.article.current} 
					all={Config.data.article.all} />
			}}/>
		<Route exact path="/park"
			render={()=>{
				return <Park current={Config.data.parks.sequoia}/>
			}}/>
		<Footer logo={Logo}/>
	</div>};
}; 

export default withRouter(App);