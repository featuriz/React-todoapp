import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk!' },
      { id: 2, content: 'Play music!' }
    ]
  }
  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos // todos: todos // If key and value are same
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
