import React from 'react';
import Config from "../config.json";
const getData = OrigComp => {
	class GetDataHOC extends React.Component {
		async getData(lookFor, params){
			params = params || {};
			params["api_key"] = Config.__nps_config;
			let url = new URL(("https://developer.nps.gov/api/v1/" + lookFor));
			url.search = new URLSearchParams(params).toString();
			return  await fetch(url).then(resp => resp.json());
		}
		getStates(){
			let abbrs = Object.keys(Config.state);
			abbrs = abbrs.map(s=>{
				return [s, Config.state[s]]
			});
			return abbrs
		}
		render(){
			return <OrigComp {...this.props} getData={this.getData} states={this.getStates()}/>
		}
	}
	return GetDataHOC;
};
export default getData;