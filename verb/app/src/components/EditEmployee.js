import React, { Component } from 'react';

class EditEmployee extends Component {
  constructor (props) {
    super(props);
    this.state = {
    	group: this.props.person.group,
    }
  }

  render () {
    let {person} = this.props.person
    return (
      <section id='edit-employee'>
        <div className='edit-employee-name'>{this.props.person.firstName} {this.props.person.lastName}</div>
        <p className='edit-employee-title'>Department</p>
        <form>
        Sales: <input type='radio' name='group' value='sales'/>
        Support: <input type='radio' name='group' value='support'/>
        IT: <input type='radio' name='group' value='it'/>
        </form>
      </section>
    )
  }
};

export default EditEmployee;