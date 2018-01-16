import React from 'react';
import Select, { Option } from 'rc-select';
import { observer } from 'mobx-react';

const MonsterSelect = observer(({ monstersData, appStore }) => {
  return (
      <Select
        defaultValue="Select a Monster"
        onChange={(monsterName) => {
          appStore.selectMonster(monsterName);
        }}
      >
        {
          monstersData.map((monster, index) => (
            <Option
              value={monster.monsterName}
              key={`${monster.monsterName}-${index}`}
            >
              {monster.monsterName}
            </Option>
          ))
        }
      </Select>
  )
})

export { MonsterSelect };
