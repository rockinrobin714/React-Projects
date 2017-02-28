import React, { Component } from 'react';

class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {
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
  render () {
    return (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Region</th>
        </tr>
        {
            this.state.data.map(person =>

            <tr key={person.id} className='t-row'>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.region}</td>
            </tr>
        )}
       </table>
        );
    }
}
export default Table;