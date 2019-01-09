import React, { Component } from 'react';
import ToDos from './ToDos';
import AddToDo from './AddToDo';

class App extends Component {

  // State
  state = {
    todos: [
      {ID: 1, content: 'buy some milk'},
      {ID: 2, content: 'play mario kart'}
    ]
  }

  // Functions

  deleteToDo = (ID) => {
    console.log(`deleted ID: ${ID}`);
    // look up id in the array, if they match return false to filter out
    const todosTemp = this.state.todos.filter(todo => {
      return todo.ID !== ID;
    });
    // update the orginal todos array
    this.setState({
      todos: todosTemp
    });
  }

  addToDo = (item) => {
    item.ID = Math.round(Math.random()*1000);
    console.log(`added ID: ${item.ID} Content: ${item.content}`);
    let todos = [...this.state.todos, item];
    this.setState({
      // temp and actually state are named the same so just set as itself
      todos
    })
  }

  // Render
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Dos</h1>
        {/* Inject the components and pass in functions to them as properties/props */}
        <ToDos todos={this.state.todos} delToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
