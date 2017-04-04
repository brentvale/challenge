import React from 'react';

//COMPONENTS
import ListItem from './list_item';

class StepTwo extends React.Component{
	constructor(){
		super();
		this.state = {
			searchQuery: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.filterSearchResults = this.filterSearchResults.bind(this);
	}
	
	handleChange(e){
		this.setState({searchQuery: $(e.currentTarget).val()});
	}
	
	filterSearchResults(){
		var re = new RegExp(this.state.searchQuery, "i");
		var stringLength = this.state.searchQuery.length;

		//with current list of elements to search through, element either has first_name or not
		var filteredArray = this.props.providersAndOrganizations.filter(obj => {
			if(obj.first_name){
				if(obj.first_name.slice(0,stringLength).match(re) || obj.last_name.slice(0,stringLength).match(re) || (obj.first_name + " " +  obj.last_name).slice(0,stringLength).match(re)){
					return obj;
				}
			} else {
				if(obj.organization_name.slice(0,stringLength).match(re)){
					return obj;
				}
			}
		});

		return filteredArray;
	}
	
	render(){
		let placeholderText = "Search for a doctor, physician, or organization by name";
		var filteredResults;
		if(this.state.searchQuery === ""){
			filteredResults = [];
		} else {
			filteredResults = this.filterSearchResults();
		}
		
		const filteredResultsDisplay = filteredResults.map((result,idx) => (
			<ListItem key={idx} result={result}/>
		));
		
		return(
			<div className="form-container center-block">
				<h3 className="ultra-thin">Search for a physician or organization</h3>
				<form style={{marginBottom: "1em"}}>
					<div className="form-box form-box-full">
						<input id="searchQuery"
									 type="text" 
									 value={this.state.searchQuery} 
									 placeholder={placeholderText}
									 onChange={this.handleChange}/>
					</div>
				</form>
				{filteredResultsDisplay}	 
			</div>
		)
	}
};

export default StepTwo;