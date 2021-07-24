import { Component } from "react";
	import "./assets/webfonts/webfonts.css";
	import "./assets/css/normalize.css";
	import "./assets/css/index.min.css";
	import { Route, Link, withRouter } from "react-router-dom";
	import Logo from "./assets/images/logo.svg";

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	};
	async componentDidMount() {
	}
	async getData(params){
		params = params || {};
		let url = new URL("");
		url.search = new URLSearchParams(params).toString();
		return  await fetch(url).then(resp => resp.json());
	}
	render() {
		return (
			<div className={"App " + this.props.location.pathname.split("/")[1]}>
				<img src={Logo} alt="" />
			</div>
		);
	};
}; 

export default withRouter(App);