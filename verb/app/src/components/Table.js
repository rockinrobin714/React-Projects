import React, { Component } from 'react';

class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  render () {
    if(this.props.data.length>0){
    return (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Region</th>
        </tr>
        {
            this.props.data.map(person =>
            <tr 
                key={person.id} 
                className='t-row'
                onClick={()=> this.props.editPerson(person)}
            >
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.region}</td>
            </tr>
            
        )}
       </table>
        );
        } return null
    }
}
export default Table;