import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#77DD77',
      padding: '10px',
      margin: '5px',
      opacity: '0.7',
      borderBottom: '1px #fff dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }



  render() {

    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
      <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
        { title }
      </p>
      </div>
    );
  }

}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem ;
