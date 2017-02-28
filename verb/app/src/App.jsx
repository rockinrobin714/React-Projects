import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Table from './components/Table';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	currentGroup: 'all',
    	searchQuery: '',
    	data: [
            {id: 1, firstName:'Bob', lastName:'Johnson', region:'Austin'},
            {id: 2, firstName:'Joe', lastName:'Jackson', region:'Dallas'},
            {id: 3, firstName:'Carol', lastName:'Williams', region:'San Antonio'},
            {id: 4, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 5, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 6, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            ]
    }
  }
  changeGroup(group){
  	this.setState({currentGroup:group})
  }
  searchForPerson(person){
  	console.log('searching for', person)
  }
  capitalizeTitle(){
  	const titles = {'all': 'All Employees', 'sales':'Sales', 'it':"IT", 'support':'Support'};
  	return <h1 id='title'>{titles[this.state.currentGroup]}</h1>
  }	
  render () {
    return (
    	<div className='container'>
     		<NavBar 
     			changeGroup={this.changeGroup.bind(this)}
     			currentGroup={this.state.currentGroup}
     			searchForPerson={this.searchForPerson.bind(this)}
     		/>
     		<section id='body'>
     			{this.capitalizeTitle()}
     		<Table />
     		</section>
      	</div>
    )
  }
};


export default App;
