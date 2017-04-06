import React from 'react';

const Search = ({ queryString, placeholderText, handleQueryStringChange }) => (
  <div>
		<input
		  type="text"
		  value={queryString}
		  onChange={handleQueryStringChange}
			placeholder={placeholderText}/>
		 <br/>
  </div>
);

export default Search;