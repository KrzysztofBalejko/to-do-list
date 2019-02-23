import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
    {
      id: uuid.v4(),
      title: 'WALK THE DOG',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'MAKE A BED',
      completed: false
    },
    {
      id: uuid.v4(),
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

  //Adding todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
