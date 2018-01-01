import React from 'react';
import ReactDOM from 'react-dom';
import { MonsterSelectionContainer } from './MonsterSelectionContainer';
import { shallow } from 'enzyme';

describe('MonsterSelectionContainer', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<MonsterSelectionContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
