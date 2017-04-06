import React from 'react';

const handleSelectProvider = (thing) => {
	
}
	
class ListItem extends React.Component{
	constructor(){
		super();
		this.handleSelectProvider = this.handleSelectProvider.bind(this);
	}
	
	handleSelectProvider(){
		if(this.props.result[0].organization_name){
			console.log(`
									 organization_name: ${this.props.result[0].organization_name}
									 zip:               ${this.props.result[0].zip}
									 npi:               ${this.props.result[0].npi}`);
		} else {
			this.props.result.forEach(obj => (
				console.log(`
										 first_name: ${obj.first_name}
										 last_name:  ${obj.last_name}
										 zip:        ${obj.zip}
										 npi:        ${obj.npi}`)
			));
		}
		alert('Result logged to console');
	}
	
	render(){
		let {result} = this.props;
		let orgOrPersonDisplay = (result[0].first_name) ? <h4>{result[0].first_name} {result[0].last_name}</h4> 
																									 : <h4>{result[0].organization_name}</h4>;
		 //unable to determine from data what indicates doctor practicing at more than one location
		 //from mockup: We found [10] Dan Lee's practicing nearby at [27] locations
		 //assumption (for now): doctor practices at one location
		let infoText = (result[0].first_name) ? `We found ${result.length} providers practicing at ${result.length} locations`: 
																						`We found this hospital provider near you.`;																				 
																							 
		return(
		  <div className="search-result hand-on-hover" style={{position:"relative"}} onClick={this.handleSelectProvider}>
				<div className="bubble-container">
					<i 	className="fa fa-circle-thin" 
							aria-hidden="true"
							style={{fontSize: "2em", color: "#c1c0c9", fontWeight: "800", paddingTop: "0.7em"}}></i>
				</div>
				<div className="list-item-display">
					{orgOrPersonDisplay}
					<p>{infoText}</p>
				</div>
				<div style={{position:"absolute", right: "0", top: "40%"}}>
					<i className="fa fa-chevron-right" 
						 aria-hidden="true"
						 style={{color: "#c1c0c9",
										 paddingRight: "15px"}}></i>
				</div>
		
		  </div>
		)
	}
};

export default ListItem;