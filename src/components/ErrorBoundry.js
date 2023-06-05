import React, { Component } from 'react';


class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}


	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}

	render(){
		if(this.state.hasError){
			return <h1> Oops Error </h1>
		}

		return this.state.children
	}
}


export default ErrorBoundry;