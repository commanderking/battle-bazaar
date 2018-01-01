import React, { Component } from 'react';
import './App.css';
import { MonsterSelectionContainer } from './features/monsterSelection/MonsterSelectionContainer';

const battlePhases = {
  MONSTER_SELECT: 'MONSTER_SELECT'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battlePhase: battlePhases.MONSTER_SELECT,
      selectedMonster: '',
      characterAttributes: {}
    }
  }
  render() {
    const { battlePhase } = this.state;
    return (
      <div className="App">
        <h1>Battle Bazaar</h1>
        { battlePhase === battlePhases.MONSTER_SELECT
          && <MonsterSelectionContainer /> }
      </div>
    );
  }
}

export default App;
