import React from 'react';

const PageNumberButton = ({pageNumber, currentPageOfResults, goToPage}) => {
	let klass = (pageNumber === currentPageOfResults) ? "active hand-on-hover": "hand-on-hover";
	return(
		<li className={klass} onClick={goToPage} data-page-number={pageNumber}>
			{pageNumber}
		</li>
	)
};

export default PageNumberButton;