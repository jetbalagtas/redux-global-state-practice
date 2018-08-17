import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render () {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdded} />
        {this.props.ppl.map(person => (
          <Person 
            key={person.id}
            name={person.name} 
            age={person.age} 
            clicked={() => this.props.onPersonDeleted(person.id)}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ppl: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdded: (name, age) => dispatch({type: actionTypes.ADD_PERSON, payload: {name: name, age: age}}),
    onPersonDeleted: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
