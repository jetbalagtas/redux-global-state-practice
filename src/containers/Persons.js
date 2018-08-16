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
    onPersonAdded: () => dispatch({type: actionTypes.ADD_PERSON}),
    onPersonDeleted: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
