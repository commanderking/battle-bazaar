import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import './common/css/rcSelect.css';
import { MonsterSelectionContainer } from './features/monsterSelection/MonsterSelectionContainer';
import { CharacterSelectionContainer } from './features/characterSelection/CharacterSelectionContainer';
import { battlePhases } from './constants/battleConstants';
import { AppStore } from './stores/AppStore';

const appStore = new AppStore();

const App = observer(class App extends Component {
  render() {
    const { battlePhase } = appStore;
    return (
      <div className="App">
        <h1>Battle Bazaar</h1>
        { battlePhase === battlePhases.MONSTER_SELECT
          && <MonsterSelectionContainer appStore={appStore} /> }
        { battlePhase === battlePhases.CHARACTER_SELECT
          && <CharacterSelectionContainer appStore={appStore}/> }
      </div>
    );
  }
});

export default App;
