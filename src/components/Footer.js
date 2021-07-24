import React, { Component } from "react";
import FooterText from "../assets/images/footer_text.png";

class Footer extends Component { 
render(){ 
	return <footer className="py-4 px-3 text-center">
		<aside className="container">
			<img src={FooterText} alt="Experience Your America"/>
			<div></div>
			<p>National Parks Service <br/> U.S. Department of the Interior</p>
			<img src={this.props.logo} alt="NPS Logo"/>
		</aside>
	</footer>
}
} export default  Footer;