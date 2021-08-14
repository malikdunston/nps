import React, { Component } from 'react';

class FindAPark extends Component {
	constructor(props){
		super(props);
		this.state = {
			states: {
				selected: ""
			}
		}
	}
	render() {
		return (
			<form className="py-4" novalidate>
				<div className="container form-group px-3">
					<h2 className="text-center">Find A National Park</h2>
					<label for="select-a-state">Select A State</label>
					<select id="select-a-state"
						className="form-control"
						onChange={(e)=>{
							this.setState({states: {selected: e.target.value}})
						}}>
						<option value="">Select A State...</option>
						{this.props.states.map(s=>{
							return <option value={s[0]}>{s[1]}</option>
						})}
					</select>
				</div>
				<div className="container text-center">
					<button type="submit" className="btn btn-sm btn-primary" onClick={(e)=>{
						if(this.state.states.selected){
							e.preventDefault();
							window.location.href = `${process.env.PUBLIC_URL}/search/parks/${this.state.states.selected}`
						}
					}}>Search</button>
				</div>
			</form>
		);
	}
}

export default FindAPark;