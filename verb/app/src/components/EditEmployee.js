import React, { Component } from 'react';

class EditEmployee extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	group: this.props.person.group,
    }
  }
  handleOptionChange(changeEvent) {
    this.setState({
      group: changeEvent.target.value
    });
  }

  render () {
    console.log(this.props)
    return (
      <section id='edit-employee'>
        <div className='edit-employee-name'>{this.props.person.firstName} {this.props.person.lastName} ({this.props.person.region})</div>
        <p className='edit-employee-title'>Department:</p>
        <form>
        Sales: <input type='radio' checked={this.state.group==='sales'} 
        onChange={this.handleOptionChange} name='group' value='sales'/>
        Support: <input type='radio' checked={this.state.group==='support'} 
        onChange={this.handleOptionChange} name='group' value='support'/>
        IT: <input type='radio' checked={this.state.group==='it'} 
        onChange={this.handleOptionChange} name='group' value='it'/>
        </form>
        <div className='button-container'>
          <button onClick={this.props.cancelEdit} style={{backgroundColor: 'red'}}>Cancel</button>
          <button onClick={this.props.submitEdit}>Submit</button>
        </div>
      </section>
    )
  }
};

export default EditEmployee;