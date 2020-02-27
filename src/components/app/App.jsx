import React from 'react';
import './App.css';

import Search from '../search/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>The Sickest Recipe Finder</h1>
        </header>
        <Search />
      </div>
    )
  }
}

export default App;
