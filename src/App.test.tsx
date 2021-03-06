import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    const wrapper = shallow(<App />);
    const title = <h1>LoRaWAN 1.0.x airtime calculator</h1>;
    expect(wrapper).toContainReact(title);
  });
});
