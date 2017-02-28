import React, { Component } from 'react';

import NavBar from './components/NavBar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	currentGrouping: 'all',
    }
  }
  changeGroup (group) {
  	this.setState({currentGrouping:group})
  }
  render () {
    return (
    	<div className='container'>
     		<NavBar changeGroup={this.changeGroup.bind(this)}/>
      	</div>
    )
  }
};


export default App;
