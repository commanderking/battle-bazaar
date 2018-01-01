import React from 'react';
import { monstersData } from '../../data/monsters';
import { MonsterSelect } from './MonsterSelect';
const MonsterSelectionContainer = () => {
  return (
    <div>
      <MonsterSelect monstersData={monstersData} />
    </div>
  )
}

export { MonsterSelectionContainer };
