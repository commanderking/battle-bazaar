import React from 'react';
import { observer } from 'mobx-react';

const MonsterCard = observer(({ appStore }) => {
  if (appStore.selectedMonsterName) {
    const { monsterName, hp, attack, defense, agility, passiveName } = appStore.currentMonsterData;
    // passiveName is a string with commas separating passives
    const passiveArray = passiveName ? passiveName.split(',') : null;
    return (
      <div>
        <div>
          <div>{monsterName}</div>
          <div>
            <div>HP: {hp}</div>
            <div>Attack: {attack}</div>
            <div>Defense: {defense}</div>
            <div>Agility: {agility}</div>
            <div>
              Passives: { passiveArray &&  passiveArray.map(passive => {
                return <span key={`passive-${passive}`}>{passive}</span>
              })}
            </div>
          </div>
        </div>
        <button>Submit</button>
      </div>
    )
  }
  return null;
});

export { MonsterCard };
