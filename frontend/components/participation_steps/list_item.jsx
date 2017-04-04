import React from 'react';

const ListItem = ({result}) => {
	
	let orgOrPersonDisplay = (result.first_name) ? <h4>{result.first_name} {result.last_name}</h4> 
																								 : <h4>{result.organization_name}</h4>;
	return(
	  <div className="search-result">
			<div className="bubble-container">
			</div>
			<div className="list-item-display">
				{orgOrPersonDisplay}
				<p>We found [X] providers practicing at [Y] locations</p>
			</div>
	  </div>
	)
};

export default ListItem;