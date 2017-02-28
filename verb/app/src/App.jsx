import React, { Component } from 'react';

import NavBar from './components/NavBar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	currentGroup: 'all',
    	searchQuery: ''
    }
  }
  changeGroup(group){
  	this.setState({currentGroup:group})
  }
  searchForPerson(person){
  	console.log('searching for', person)
  }
  render () {
    return (
    	<div className='container'>
     		<NavBar 
     			changeGroup={this.changeGroup.bind(this)}
     			currentGroup={this.state.currentGroup}
     			searchForPerson={this.searchForPerson.bind(this)}
     		/>
      	</div>
    )
  }
};


export default App;
