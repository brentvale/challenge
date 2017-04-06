import React from 'react';

//COMPONENTS
import ListItem from './list_item';
import FilterTableContainer from './filter_table_container';
import Search from './search';
import PaginationDisplay from './pagination_display';

class StepTwo extends React.Component{
	constructor(){
		super();
		this.state = {
			fetching: false,
			currentPageOfResults: 1
		}
		this.handleQueryStringChange = this.handleQueryStringChange.bind(this);
		this.goToPage = this.goToPage.bind(this);
	}
	
	componentWillReceiveProps(){
		//used to confirm loading providers requirement
		// var that = this;
// 		setTimeout(function(){
// 			that.setState({fetching:false});
// 		}, 10000)
		this.setState({fetching:false});
	}
	
	goToPage(e){
		let pageNum = $(e.currentTarget).data("page-number");
		switch(pageNum){
		case "back":
			this.setState({currentPageOfResults: this.state.currentPageOfResults-1});
			break;
		case "forward":
			this.setState({currentPageOfResults: this.state.currentPageOfResults+1});
			break;
		default :
			this.setState({currentPageOfResults: pageNum});
			break
		}
	}
	
	handleQueryStringChange(e){
		this.props.updateFilter($(e.currentTarget).val());
		this.setState({fetching:true})
	}
	
	render(){
		let placeholderText = "Search for a doctor, physician, or organization by name";
		let {searchQuery, providersAndOrganizations, updateFilter} = this.props;
		
		const totalPages = Object.keys(providersAndOrganizations).length;
		let paginationDisplay;
		if(totalPages > 1){
			paginationDisplay = <PaginationDisplay totalPages={totalPages} 
																						 goToPage={this.goToPage} 
																						 currentPageOfResults={this.state.currentPageOfResults}/>
		} else {
			paginationDisplay = "";
		}
		
		const filteredResultsDisplay = providersAndOrganizations[this.state.currentPageOfResults].map((result,idx) => (
			<ListItem key={idx} result={result}/>
		));
		
		let displayBlock;
		if(this.state.fetching){
			displayBlock = <div style={{position: "relative"}}>
												<div style={{position:"absolute", height:"100%", width: "100%", backgroundColor: "rgba(255,255,255,0.85)", zIndex: "3"}}>
													<p style={{textAlign: "center", paddingTop: "20%"}}>Loading Providers...</p>
												</div>
												{filteredResultsDisplay}
										 </div>
		} else {
			displayBlock = <div>
												{filteredResultsDisplay}
												{paginationDisplay}
										 </div>
		}
		return(
			<div className="form-container center-block">
				<h3 className="ultra-thin">Search for a physician or organization</h3>
				<form style={{marginBottom: "1em"}}>
					<div className="form-box form-box-full">
						<Search searchQuery={searchQuery} 
										updateFilter={updateFilter} 
										placeholderText={placeholderText}
										handleQueryStringChange={this.handleQueryStringChange} />
					</div>
				</form>
									 
				{displayBlock}
				
			</div>
		)
	}
};

export default StepTwo;