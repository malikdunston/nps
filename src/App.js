import { Component } from "react";
	import "./assets/webfonts/webfonts.css";
	import "./assets/css/index.min.css";
	import { Route, Link, withRouter } from "react-router-dom";
	import Logo from "./assets/images/logo.svg";
	import Navigation from "./components/Navigation.js";
	import Footer from "./components/Footer.js";
	import Home from "./pages/home/Home.js";
	import Article from "./pages/article/Article.js";
	import Park from "./pages/park/Park.js";
	import Search from "./pages/search/Search.js";

class App extends Component {
	render() {return <div className={"App " + this.props.location.pathname.split("/")[1]}>
		<Navigation logo={Logo}/>
		<Route exact path="/"
			render={()=>{
				return <Home/>
			}}/>
		<Route exact path="/article/:articleId?"
			render={(params)=>{
				return <Article 
					{...params}/>
			}}/>
		<Route exact path="/park/:parkCode?"
			render={(params)=>{
				return <Park {...params}/>
			}}/>
		<Route exact path="/search/:searchIn?/:searchFor?"
			render={(params)=>{
				return <Search {...params}/>
			}}/>
		<Footer logo={Logo}/>
	</div>};
}; 

export default withRouter(App);