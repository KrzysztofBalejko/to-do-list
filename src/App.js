import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: 'Walk the dog',
      completed: false
    },
    {
      id: 2,
      title: 'Make a bed',
      completed: false
    },
    {
      id: 3,
      title: 'Cook a dinner',
      completed: false
    },
   ]
  }

  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
