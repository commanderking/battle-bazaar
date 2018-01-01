import React from 'react';
import Select, { Option } from 'rc-select';
const MonsterSelect = ({ monstersData }) => {
  return (
      <Select
        defaultValue="Select a Monster">
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
}

export { MonsterSelect };
