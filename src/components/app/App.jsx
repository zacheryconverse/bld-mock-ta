import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
  }

  

  render() {
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>
      </div>
    )
  }
}

export default App;
