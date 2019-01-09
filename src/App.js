import React, { Component } from 'react';


class App extends Component {

  state = {
    todo: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
