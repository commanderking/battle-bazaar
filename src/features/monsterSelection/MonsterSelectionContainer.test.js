import React from 'react';
import ReactDOM from 'react-dom';
import { MonsterSelectionContainer } from './MonsterSelectionContainer';
import { MonsterSelect } from './MonsterSelect';
import { MonsterCard } from './MonsterCard';
import { shallow } from 'enzyme';
import { monstersData } from '../../data/monsters';

describe('MonsterSelectionContainer', () => {
  const changeBattlePhaseMock = jest.fn();
  const mockStore = {
    selectedMonsterName: null,
    changeBattlePhase: changeBattlePhaseMock
  }
  describe('render prior to selecting a monster', () => {
    let wrapper = shallow(<MonsterSelectionContainer appStore={mockStore} />);
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
  describe('render after selecting a monster', () => {
    mockStore.selectedMonsterName = 'mock-monster-name';
    let wrapper = shallow(<MonsterSelectionContainer appStore={mockStore} />);

    it('renders monster card when monster selected', () => {
      const MonsterCardWrapper = wrapper.find(MonsterCard);
      expect(MonsterCardWrapper).toHaveLength(1);
      expect(MonsterCardWrapper.props().appStore).toEqual(mockStore);
    });

    it('renders submit button when monster selected', () => {
      const SubmitButtonWrapper = wrapper.find('button');
      expect(SubmitButtonWrapper).toHaveLength(1);
      SubmitButtonWrapper.simulate('click');
      expect(mockStore.changeBattlePhase).toHaveBeenCalledTimes(1);
    })
  })
});
