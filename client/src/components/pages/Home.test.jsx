import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from './Home';

describe('<Home />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Home />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
