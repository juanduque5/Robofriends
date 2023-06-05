import React from 'react';

const OptionList = ({optionChange, dClickMe, clickMe, }) => {
return (
	<div className='p3'>
		
		<label for="cars">Email: </label>

	  <select  onChange={optionChange}>
	  	 <option value="">All</option>
        <option value="S">s</option>
        <option value="Nathan">Nathan</option>
      </select>

      	<button  className='ma2' onClick = {clickMe}>Search</button>
        <button  className='ma2' onClick = {dClickMe}> Delete</button>
     


	</div>
  );
}

export default OptionList;