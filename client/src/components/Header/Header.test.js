import { Header } from './Header';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Header.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });

  it('should have title `New York Times Article Scrubber`', () => {
    expect(
      wrapper.containsMatchingElement(<h1>New York Times Article Scrubber</h1>)
    ).toBe(true);
  });

  it('should have subtitle `Search for and annotate articles of interest`', () => {
    expect(
      wrapper.html()
    ).toContain('Search for and annotate articles of interest');
  });
});