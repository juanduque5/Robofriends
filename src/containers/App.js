import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import OptionList from '../components/OptionList';
import Scroll from '../components/Scroll';
import './App.css';





class App extends Component {
 
constructor(){
	//always use super() when using extendes Component
	super()
	this.state = {
		robots: [],
		searchField: '',
		optionField: '',
		clickOption: '',
		delete: '',
		newArr:[],
		value: ''
	}
}

componentDidMount (){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>  response.json())
	.then (users=> this.setState({robots: users}));
}





//random name, when you create your methods using extends component use the syntax "onSearchChange = (event) => { }"
//This updates the searchField from searchBox using onChange, so this function gets call 
onSearchChange = (event) => {
	//this line this.setState """"" updates searchField
	this.setState({ searchField: event.target.value });
   
}

onOptionChange = (event2) => {
	//this line this.setState """"" updates searchField
	this.setState({ optionField: event2.target.value });
	
	
}


clickOption = () => {
    const { optionField } = this.state;
	let filterRobots = [];

	
  filterRobots = this.state.robots.filter(robot => {
    return robot.email.toLowerCase().includes(optionField.toLowerCase());
  });


  this.setState({ newArr: filterRobots});
 
}


	 


deleteClick = (event4) => {

 this.setState({ searchField: '', optionField: '', newArr: []});
}

 



 render(){
 	//We use filter and includes, if includes empty '' it always return true, else if found return array with objects ex. [{}{}]
  	// 	const filterRobots = this.state.robots.filter(robot => {
	// 	return (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
	// });
	 
 let { robots, searchField, optionField, newArr} = this.state;
 let filteredRobots;
  

  if(newArr.length > 0){
  	filteredRobots = newArr;
  } else{
  	filteredRobots = robots;
  }

  if (searchField !== '') {
    filteredRobots = robots.filter(robot => {
      return (
         robot.name.toLowerCase().includes(searchField.toLowerCase()) &&
         robot.email.toLowerCase().includes(optionField.toLowerCase())
      );
    });

  } 
	



	return !robots.length ?
	   <h1> Loading </h1> :
	(
		<div className='tc'>
		    <h1> RoboFriends </h1>
		    <SearchBox searchChange = {this.onSearchChange} />
		    <OptionList 
		    	optionChange = {this.onOptionChange} 
		    	clickMe = {this.clickOption} 
		    	dClickMe = {this.deleteClick} 
	    
		    	/>
		    <Scroll>
		    
		 				<CardList robots = {filteredRobots} />
		 		 
		 	  </Scroll>
	    </div>
	 );
   }
  
}
 
export default App;