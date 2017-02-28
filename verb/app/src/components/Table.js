import React, { Component } from 'react';

class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data: [
            {id: 1, firstName:'Bob', lastName:'Johnson', region:'Austin', group:'sales'},
            {id: 2, firstName:'Joe', lastName:'Jackson', region:'Dallas'},
            {id: 3, firstName:'Carol', lastName:'Williams', region:'San Antonio', group:'sales'},
            {id: 4, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 5, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 6, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'sales'},
            {id: 7, firstName:'Bob', lastName:'Johnson', region:'Austin'},
            {id: 8, firstName:'Joe', lastName:'Jackson', region:'Dallas', group:'sales'},
            {id: 9, firstName:'Carol', lastName:'Williams', region:'San Antonio'},
            {id: 10, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 11, firstName:'Tom', lastName:'Cruise', region:'Houston', group:'sales'},
            {id: 12, firstName:'Mark', lastName:'Douglas', region:'Houston'},
            {id: 13, firstName:'Bob', lastName:'Johnson', region:'Austin'},
            {id: 14, firstName:'Joe', lastName:'Jackson', region:'Dallas', group:'sales'},
            {id: 15, firstName:'Carol', lastName:'Williams', region:'San Antonio', group:'sales'},
            {id: 16, firstName:'Lisa', lastName:'Jenkins', region:'Houston'},
            {id: 17, firstName:'Lisa', lastName:'Jenkins', region:'Houston', group:'sales'},
            {id: 18, firstName:'Terry', lastName:'Samuel', region:'Houston'},
            ],
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
            this.props.data.map(person =>

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