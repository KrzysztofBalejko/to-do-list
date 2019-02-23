import React, { Component } from 'react';

class AddTodo extends Component {

  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
         type="text"
         name="title"
         style={{ flex: '10', padding: '5px'}}
         placeholder="ADD TO THE LIST"
        />
        <input
         type="submit"
         value="ADD"
         className="btn"
         style={{ flex: '1' }}
        />

      </form>
    );
  }

}

export default AddTodo;
