import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	searchQuery: '',
    	groups: ['all','sales','it','support']
    }
  }

  render () {
  	console.log(this.state)
    return (
      <section id='navbar'>
      {this.state.groups.map => (group) {
      	<div className='nav-item'>
            {group}
        </div>
      }}
        
        <div className='nav-item'>
            Sales
        </div>
         <div className='nav-item'>
            IT
        </div>
        <div className='nav-item'>
            Support
        </div>
        <div className='search'>
            <input 
            	default={'cat'}
            	onChange={(e)=> this.setState({searchQuery:e.target.value})}
            	value={this.state.searchQuery}
            />
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </div>
    </section>
    )
  }
};

export default App;