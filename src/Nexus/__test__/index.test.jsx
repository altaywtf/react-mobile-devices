// Core
import React from 'react';
import { shallow } from 'enzyme';

// Component
import Nexus from '../';

describe('Nexus', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Nexus />);
    expect(wrapper).toBeTruthy();
  });
});
