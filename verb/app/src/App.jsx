import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Table from './components/Table';
import EditEmployee from './components/EditEmployee';
const axios = require('axios');
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	currentGroup: 'all',
    	searchTitle: '',
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
        index: 15,
        editing: false
       }
  }
  componentDidMount(){
  	//change

// var config = {
//        headers: {
//              'Content-Type': 'application/json',
//              'Access-Control-Allow-Headers':'*',
//              'Access-Control-Allow-Origin' : '*',
//              'X-Requested-With': 'XMLHttpRequest'
//        },

// };
//   	axios.get('http://localhost:4040/employees',config)
//   .then(function (response) {
//     this.setState(allData:response.data);
//     this.setState(shownData:response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  	this.setState({shownData: this.state.allData})
  	this.filterData();
  }
  editPerson(person){
  	this.setState({editing: person})
  }
  cancelEdit(){
  	this.setState({editing: false})
  }
  submitEdit(){
  	//callToDB
  	this.setState({editing: false})
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
  }
  changeGroup(group){
  	this.setState({currentGroup:group})
  	if (group==="sales"){
  		this.setState({shownData: this.state.salesData})
  	} else if (group==='it'){
  		this.setState({shownData: this.state.itData})
  	} else if (group==='all'){
  		this.setState({shownData: this.state.allData})
  	} else {
  		this.setState({shownData: this.state.supportData})
  	}
  	this.setState({searchTitle: ''})
  }
  searchForPerson(query){
  	let filteredData = this.state.allData.filter( person => {
  		return person.firstName.toLowerCase().includes(query.toLowerCase()) || person.lastName.toLowerCase().includes(query.toLowerCase())
  	})
  	if (filteredData.length ===0){
  		this.setState({searchTitle: `No results found for "${query}"`})
  	} else {
  		this.setState({searchTitle: `Search results for "${query}"`})
  	}
  	this.setState({currentGroup: 'none', shownData: filteredData})
  }
  capitalizeTitle(){
  	if (this.state.editing) {
  		return null;
  	}else if (this.state.searchTitle){
  		return <h1 id='title'>{this.state.searchTitle}</h1>
  	} else {
  		const titles = {'all': 'All Employees', 'sales':'Sales', 'it':"IT", 'support':'Support'};
  		return <h1 onClick={()=>this.setState({openModal:true})} id='title'>{titles[this.state.currentGroup]}</h1>
  	}
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
     		{this.state.editing ? 
     			<EditEmployee 
     				person={this.state.editing}
     				cancelEdit={this.cancelEdit.bind(this)}
     				submitEdit={this.submitEdit.bind(this)}
     			/>
     			:
	     		<Table 
	     			editPerson={this.editPerson.bind(this)} 
	     			data={this.state.shownData}
	     		/>}
     		</section>
      	</div>
    )
  }
};


export default App;
