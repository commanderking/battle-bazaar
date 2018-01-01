import React from 'react';
import ReactDOM from 'react-dom';
import { MonsterSelectionContainer } from './MonsterSelectionContainer';
import { MonsterSelect } from './MonsterSelect';
import { shallow } from 'enzyme';
import { monstersData } from '../../data/monsters';

describe('MonsterSelect', () => {
  describe('monster select dropdwon', () => {
    let wrapper = shallow(<MonsterSelectionContainer />);
    it ('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('renders Select and Options', () => {
      const MonsterSelectWrapper = wrapper.find(MonsterSelect);
      expect(MonsterSelectWrapper).toHaveLength(1);
      const numberOfMonsters = MonsterSelectWrapper.props().monstersData.length;
      expect(numberOfMonsters).toEqual(monstersData.length);
    });
  });
});
