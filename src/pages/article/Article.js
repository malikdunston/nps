import React, { Component } from "react";
// import {Link} from "react-router-dom";

class Article extends Component { 

constructor(props){
	super(props);
	this.state = {
	}
}

componentDidMount(){
}

render(){ return (
	<div>
		<article>
			<img src={"/img/article/" + this.props.current.image} alt={this.props.current.title}/>
			<h1>{this.props.current.title}</h1>
			<aside>
				<h5>Released:</h5>
				<p>
					{this.props.current.date.month} 
					{this.props.current.date.date}, 
					{this.props.current.date.year}
				</p>
				<h5>Contact:</h5>
				<p>
					{this.props.current.contact.name}, 
					{this.props.current.contact.title} <br/>
					{this.props.current.contact.phone}
				</p>
			</aside>
			{this.props.current.content.map(c=>{
				return <p>{c}</p>
			})}
		</article>

		<section id="related">
			<h2>Related News</h2>
			{this.props.all.map(a=>{
				return <div>
					<h2>{a.title}</h2>
					<p>{a.date.month} {a.date.date}, {a.date.year}</p>
				</div>
			})}
			<section className="container text-center pt-3">
				<button type="submit" className="mb-md-3 btn btn-sm btn-dark">Load More</button>
			</section>
		</section>

		<section id="ads" className="mx-auto">
			<div>
				Promotion Item<br/>
				300x250
			</div>
		</section>
	</div>
) }
} export default  Article;