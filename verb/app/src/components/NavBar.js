import React, { Component } from 'react';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	searchQuery: '',
    }
    this.handleKeyPress=this.handleKeyPress.bind(this)
  }
  search(){
  	console.log(this)
  	if(this.state.searchQuery){
  		this.props.searchForPerson(this.state.searchQuery);
  		this.setState({searchQuery: ''});
  	}
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
     this.search()
    }
  }
  render () {
  	const groups = ['all','sales','it','support'];
    return (
      <section id='navbar'>
      {groups.map(group => 
      	this.props.currentGroup===group ?
      	<div 
      		key={group} 
      		className='nav-item selected'
      		onClick={()=> this.props.changeGroup(group)}
      	>{group} </div> :
        <div 
        	key={group} 
        	className='nav-item'
        	onClick={()=> this.props.changeGroup(group)}
        > {group}</div>
      )}
        <div className='search'>
            <input 
            	placeholder={'Search for employee'}
            	onChange={(e)=> this.setState({searchQuery:e.target.value})}
         		onKeyPress={this.handleKeyPress}
            	value={this.state.searchQuery}
            />
            <i 
            	className="fa fa-search fa-lg" 
            	aria-hidden="true"
            	onClick={this.search.bind(this)}
            ></i>
        </div>
    </section>
    )
  }
};

export default NavBar;