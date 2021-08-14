import React, { Component } from "react";
import {Link} from "react-router-dom";
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg";
import {ReactComponent as MenuOpen} from "../assets/icons/menu_open.svg";

class Navigation extends Component { 
constructor(props){
	super(props);
	this.state = {
		open: false,
		search: {
			open: false,
			valid: false,
			q: ""
		},
		menu: [
			// ["home", "/"],
			// ["article", "/article"],
			// ["park", "/park/"]
		]
	}
	this.navClick = this.navClick.bind(this);
	this.toggleSearch = this.toggleSearch.bind(this);
}
navClick(){
	this.setState(prevState=>{return {open: !prevState.open}})
}
validateSearch(e){
	const len = 3;
	this.setState(prevState=>{return {search: {
		...prevState.search,
		q: e.target.value,
		valid: e.target.value.length >= len ? true : false
	}}})
}
toggleSearch(e){
	const input = e.currentTarget.parentNode.querySelector("input");
	input.focus();
	input.select();
	if(this.state.search.valid){
		window.location.href = `${process.env.PUBLIC_URL}/search/${this.state.search.q}`;
	}
	this.setState(prevState=>{return {search: {
		open: !prevState.search.open,
		valid: false,
		q: ""
	}}})
}
render(){ return (
	<nav>
		<div className="nav-top">
			<Link to="/" className="logo">
				<img src={this.props.logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
				<div>NPS</div>
			</Link>
			<div className={"search " + (this.state.search.open ? "open" : "")}>
				<input type="text" onChange={(e)=>{this.validateSearch(e)}} />
				<div className="button" onClick={(e)=>{this.toggleSearch(e)}}>
					<SearchIcon />
				</div>
			</div>
			<div className="button" onClick={this.navClick}>
				<MenuOpen />
			</div>
		</div>
		<div className="nav-bottom">
			{this.state.menu.length ? <div className={"menu " + (this.state.open ? "show" : "")} >
				<ul>
					{this.state.menu.map(m=>{
						return <li className="">
							<Link to={m[1]} className="">
								{m[0]}
							</Link>
						</li>
					})}
				</ul>
			</div> : ""}
		</div>
	</nav>
) }
} export default Navigation;