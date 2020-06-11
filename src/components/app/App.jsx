import React from 'react';
import './App.css';
import CowList from '../CowList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cows')
    .then(data => data.json())
    .then(thing => this.setState({cows: thing}))
  }

  render() {
    // console.log(this.props)
    return (
      <div className="app">
        <header>
          {/* <h1></h1> */}
            <div>
              <CowList cow={this.state.cows} />
            </div>
        </header>
      </div>
    )
  }
}

export default App;

