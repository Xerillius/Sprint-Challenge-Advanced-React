import React from 'react';
import PlayerList from './components/PlayerList.js';
import './App.css';

class App extends React.Component {
  state = {
    player: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        this.setState({
          player: res
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="app">
        <PlayerList user={this.state.player} />
      </div>
    );
  }
}

export default App;
