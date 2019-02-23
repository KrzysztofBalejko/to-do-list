import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#FF8C00',
      padding: '10px',
      margin: '5px',
      opacity: '0.9',
      borderBottom: '1px #fff dotted',
      borderTop: '1px #fff dotted',
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
        <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
      </p>
      </div>
    );
  }

}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border:'groove',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'

}

export default TodoItem ;
