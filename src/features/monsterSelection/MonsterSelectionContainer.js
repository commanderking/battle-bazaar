import React from 'react';
import { monstersData } from '../../data/monsters';
import { MonsterSelect } from './MonsterSelect';
import { MonsterCard } from './MonsterCard';
import { observer } from 'mobx-react';

@observer
class MonsterSelectionContainer extends React.Component {
  render() {
    const { appStore } = this.props;
    return (
      <div>
        <MonsterSelect monstersData={monstersData} appStore={appStore} />
        <MonsterCard monstersData={monstersData} appStore={appStore} />
      </div>
    )
  }
}

export { MonsterSelectionContainer };
