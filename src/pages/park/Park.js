import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hoc from "../../components/getData";

class Park extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: {},
			imgs: []
		}
	}
	async componentDidMount(){
		const parkCode = this.props.match.params.parkCode
		let p = await this.props.getData("parks", {parkCode: parkCode});
		const park = p.data[0]
		const thingsToDo = await this.props.getData("thingstodo", {parkCode: parkCode});
		this.setState({
			data: park,
			imgs: park.images,
			thingsToDo: thingsToDo.data,
			contact: {
				...park.addresses.filter(a=>a.type === "Mailing")[0],
				...park.contacts.phoneNumbers.filter(p=>p.type === "Voice")[0]
			}
		})
	}
	render() {
		const img = this.state.imgs[1];
		const gallery = this.state.imgs;
		return(
		!(this.state.data && img) ? "" : <div>
			<section id="carouselCtrl" className="carousel slide" >
				<div className="carousel-inner carousel-item-active">
					<div id="park-title" className="text-center">
						<h1><span>
							{this.state.data.fullName}
						</span></h1>
						<button className="btn">
							Plan Your Visit
						</button>
					</div>
					<img src={img.url} alt={img.altText} />
				</div>
			</section>
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
				<div id="gallery" className="carousel slide" data-ride="carousel">
					<div id="gallery-title" className="">
						<p>View Photo Galleries</p>
					</div>
					<div className="carousel-inner">
						{gallery.map(g=>{
							return <div className="carousel-item active">
								<img className="d-block w-100" src={g.url} alt={g.altText} />
							</div>
						})}
					</div>
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
} export default Hoc(Park);