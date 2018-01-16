import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import './common/css/rcSelect.css';
import { MonsterSelectionContainer } from './features/monsterSelection/MonsterSelectionContainer';
import { battlePhases } from './constants/battleConstants';
import { AppStore } from './stores/AppStore';

const appStore = new AppStore();

@observer
class App extends Component {
  render() {
    const { battlePhase } = appStore;
    return (
      <div className="App">
        <h1>Battle Bazaar</h1>
        { battlePhase === battlePhases.MONSTER_SELECT
          && <MonsterSelectionContainer appStore={appStore} /> }
      </div>
    );
  }
}

export default App;
