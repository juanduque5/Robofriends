import React from 'react';

//In order to call function and use onChange, we pass searchChange from App.js and use it here. ->
//Making onChange equal to {searchChange}
const SearchBox = ({searchChange}) => {
return (
	<div className='p2'>
		<input className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='Search Robots' 
		onChange = {searchChange}
		/>
	</div>
  );
}

export default SearchBox;