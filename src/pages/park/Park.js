import React, { Component } from "react";
import getData from "../../components/getData";
	import Hero from "../../components/Hero.js";

class Park extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: {},
			imgs: [],
			heroData: [],
		}
	}
	async getParkData(){
		const parkCode = this.props.match.params.parkCode
		let p = await this.props.getData("parks", {parkCode: parkCode});
		const park = p.data[0]
		const thingsToDo = await this.props.getData("thingstodo", {parkCode: parkCode});
		window.gallery = park.images.map(img => {
			return {
			// from sliderjs/data.js
				img: img.url,
				content: {
					title: img.title,
					content: img.caption
				}
			}
		});
		this.setState({
			data: park,
			imgs: park.images,
			thingsToDo: thingsToDo.data,
			contact: {
				...park.addresses.filter(a=>a.type === "Mailing")[0],
				...park.contacts.phoneNumbers.filter(p=>p.type === "Voice")[0]
			},
			heroData: [
				[park.images[1].url, park.images[1].altText]
			]
		});
		console.log(window.gallery, ";lkj;lkj");
	}
	async componentDidMount(){
		this.getParkData();
	}
	render() {
		const img = this.state.imgs[1];
		return(
		!(this.state.data && img) ? "" : <div>
			<Hero {...this.props} title={this.state.data.fullName} content={this.state.heroData}/>
			<section id="park-list" className="container">
				<h2>Things to Do</h2>
				{this.state.thingsToDo.map(l => {
					return <div>
						<div className="list-img">
							<img src={l.images[0].url} alt={l.images[0].url} />
						</div>
						<div className="list-copy">
							<h5>{l.title}</h5>
							<p>{l.shortDescription}</p>
						</div>
					</div>
				})}
			</section>
			<div className="px-3">
				<div id="gallery">
					<div id="gallery-title">
						<p>View Photo Galleries</p>
					</div>
					<section sljs="gallery" interval="2500" controls="true"></section>
				{/* from sliderjs */}
					<h1>controls = 'true'</h1>
					<section sljs="dogs" interval="2500" controls="true"></section>
					<h1>controls = 'false'</h1>
					<section sljs="pets" delay="0" offset="1" transition="1000ms" direction="backward"></section>
					<section sljs="pets" delay="1000" offset="2" transition="1000ms" direction="backward"></section>
					<section sljs="pets" delay="2000" offset="3" transition="1000ms" direction="backward"></section>
					<section sljs="pets" delay="3000" offset="4" transition="1000ms" direction="backward"></section>
					<script>pets = [...window.dogs, ...this.cats];</script>
				</div>
			</div>
			<div className="container py-4 px-3">
				<h2 className="text-center">Contact the Park</h2>
				<h5>Mailing Address:</h5>
				<p>
					{this.state.contact.line1}
					{this.state.contact.line2}
					{this.state.contact.line3}
				</p>
				<p>{this.state.contact.city + ", " + this.state.contact.stateCode + " " + this.state.contact.postalCode}</p>
				<h5>Phone:</h5>
				<p>{this.state.contact.phoneNumber}</p>
			</div>
		</div>
	)}
} export default getData(Park);