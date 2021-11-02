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
	import Slider from './components/Slider/Slider';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			pets: {
				dogs: [
					{
						img: "./assets/img/doberman.jpg",
						content: {
							title: "Doberman Pinscer",
							content: "A lovely breed, indeed"
						}
					},
					{
						img: "./assets/img/husky.jpg",
						content: {
							title: "Siberian Husky",
							content: "A lovely breed, indeed"
						}
					},
					{
						img: "./assets/img/pitbull.jpg",
						content: {
							title: "American Pit Bull Terrier",
							content: "A lovely breed, indeed"
						}
					},
				],
				cats: [
					{
						img: "./assets/img/siamese.jpg",
						content: {
							title: "One",
							content: "A lovely breed, indeed"
						}
					},
					{
						img: "./assets/img/bengal.jpg",
						content: {
							title: "Two",
							content: "A lovely breed, indeed"
						}
					},
					{
						img: "./assets/img/persian.jpg",
						content: {
							title: "Three",
							content: "A lovely breed, indeed"
						}
					}
				],
				sample: [
					{
						img: "./assets/img/siamese.jpg",
						content: {
							title: "1/3",
						}
					},
					{
						img: "./assets/img/bengal.jpg",
						content: {
							title: "2/3",
						}
					},
					{
						img: "./assets/img/persian.jpg",
						content: {
							title: "3/3",
						}
					}
				]
			}
		}
	}
	render() {return <div className={"App " + (this.props.location.pathname.split("/")[1] || "home")}>
		<Navigation logo={Logo}/>

	{/* testing... */}
		<Slider slides={this.state.pets.dogs} axis={"Y"} height={300} controls={["index", "arrows"]} transition={100} startAt={3}/>
	{/* default... */}
		<Slider slides={this.state.pets.dogs}/>
	{/* all settings custom...  */}
		<Slider slides={[ ...this.state.pets.cats, ...this.state.pets.dogs ]}
			axis="Y"
			height={250}
			width={250}
			transition={200}
			controls={["index"]}
			startAt={2}/>

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