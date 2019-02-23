import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js'

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

  //Toggle
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

// Deleting Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
