import React, { Component } from 'react';
import ToDos from './ToDos';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Dos</h1>
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
