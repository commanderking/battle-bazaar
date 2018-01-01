import React from 'react';
import ReactDOM from 'react-dom';
import { MonsterSelect } from './MonsterSelect';
import { shallow } from 'enzyme';
import Select, { Option } from 'rc-select';
import { monstersData } from '../../data/monsters';

describe('MonsterSelectionContainer', () => {
  describe('monster select dropdwon', () => {
    let wrapper = shallow(<MonsterSelect monstersData={monstersData} />);
    it('renders Select and Options', () => {
      expect(wrapper.find(Select)).toHaveLength(1);
      expect(wrapper.find(Option)).toHaveLength(monstersData.length);
    });

    it('each option should render monster name', () => {
      const firstMonsterOption = wrapper.find(Option).first();
      const expectedFirstMonsterName = monstersData[0].monsterName;
      expect(firstMonsterOption.props().value).toEqual(expectedFirstMonsterName);
    });
  });
});
