import React from 'react';
import { monstersData } from '../../data/monsters';
import { MonsterSelect } from './MonsterSelect';
import { MonsterCard } from './MonsterCard';
import { observer } from 'mobx-react';
import { battlePhases } from '../../constants/battleConstants';

@observer
class MonsterSelectionContainer extends React.Component {
  render() {
    const { appStore } = this.props;
    return (
      <div>
        <MonsterSelect monstersData={monstersData} appStore={appStore} />
        { appStore.selectedMonsterName &&
          <div>
            <MonsterCard appStore={appStore} />
            <button onClick={() => {
                appStore.changeBattlePhase(battlePhases.CHARACTER_SELECT)
            }}
            >
              Fight Monster
            </button>
          </div>
        }
      </div>
    )
  }
}

export { MonsterSelectionContainer };
