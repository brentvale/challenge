import React from 'react';

import PageNumberButton from './page_number_button';

class PaginationDisplay extends React.Component{
	render(){
		let {totalPages, currentPageOfResults, goToPage} = this.props;
		let pageNumbersArray = [];
		for(let i = 0; i < totalPages; i ++){
			pageNumbersArray.push(i+1);
		}
		
		let pageNumbersDisplay = pageNumbersArray.map((pageNumber,idx) => (
			<PageNumberButton key={idx} pageNumber={pageNumber} goToPage={goToPage} currentPageOfResults={currentPageOfResults}/>
		));
		
		let leftNavArrow = (currentPageOfResults === 1) ? <div className="paginate-nav hand-on-hover">
																												<i className="fa fa-chevron-left " aria-hidden="true"></i>
																											</div>: 
																											<div className="paginate-nav active hand-on-hover" onClick={goToPage} data-page-number="back">
																												<i className="fa fa-chevron-left " aria-hidden="true"></i>
																											</div>;
																											
		let rightNavArrow = (currentPageOfResults === totalPages) ? 
																											<div className="paginate-nav hand-on-hover">
																												<i className="fa fa-chevron-right " aria-hidden="true"></i>
																											</div>: 
																											<div className="paginate-nav active hand-on-hover" onClick={goToPage} data-page-number="forward">
																												<i className="fa fa-chevron-right " aria-hidden="true"></i>
																											</div>;
		
		return(
			<div className="pagination-container">
				<ul className="pagination-list">
					{leftNavArrow}
					{pageNumbersDisplay}
					{rightNavArrow}
				</ul>
			</div>
		)
	}
};

export default PaginationDisplay;