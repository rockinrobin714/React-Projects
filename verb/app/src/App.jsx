import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Table from './components/Table';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	currentGroup: 'all',
    	searchQuery: '',
    	allData: [
            {id: 1, firstName:'Bob', lastName:'Johnson', region:'Austin', group:'sales'},
            {id: 2, firstName:'Joe', lastName:'Jackson', region:'Dallas', group:'it'},
            {id: 3, firstName:'Carol', lastName:'Williams', region:'San Antonio', group:'sales'},
            {id: 4, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'support'},
            {id: 5, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'it'},
            {id: 6, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'sales'},
            {id: 7, firstName:'Bob', lastName:'Johnson', region:'Austin', group:'support'},
            {id: 8, firstName:'Joe', lastName:'Jackson', region:'Dallas', group:'sales'},
            {id: 9, firstName:'Carol', lastName:'Williams', region:'San Antonio', group:'support'},
            {id: 10, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'it'},
            {id: 11, firstName:'Tom', lastName:'Cruise', region:'Houston', group:'sales'},
            {id: 12, firstName:'Mark', lastName:'Douglas', region:'Houston', group:'it'},
            {id: 13, firstName:'Bob', lastName:'Johnson', region:'Austin', group:'support'},
            {id: 14, firstName:'Joe', lastName:'Jackson', region:'Dallas', group:'sales'},
            {id: 15, firstName:'Carol', lastName:'Williams', region:'San Antonio', group:'sales'},
            {id: 16, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'it'},
            {id: 17, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'sales'},
            {id: 18, firstName:'Terry', lastName:'Samuel', region:'Houston', group:'support'},
            ],
        shownData: [],
        index: 15
    }
  }
  componentDidMount(){
  	//change
  	this.setState({shownData: this.state.allData})
  	this.filterData();
  }
  filterData(){
  	let sales = [];
  	let it = [];
  	let support = [];
  	for (let i=0;i<this.state.allData.length;i++){
  		let person = this.state.allData[i];
  		if (person.group==='sales'){
  			sales.push(person);
  		} else if (person.group==='support'){
  			support.push(person);
  		} else {
  			it.push(person);
  		}
  	}
  	this.setState({salesData: sales, itData: it, supportData: support})
  	console.log(sales, it, support)
  }
  changeGroup(group){
  	this.setState({currentGroup:group})
  	this.filterData();
  }
  searchForPerson(person){
  	//TODO
  	this.setState({currentGroup: 'none'})
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
     		<Table data={this.state.shownData}/>
     		</section>
      	</div>
    )
  }
};


export default App;
