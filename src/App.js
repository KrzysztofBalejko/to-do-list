import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';

class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: 'WALK THE DOG',
      completed: false
    },
    {
      id: 2,
      title: 'MAKE A BED',
      completed: false
    },
    {
      id: 3,
      title: 'COOK A DINNER',
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
        <div class="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
