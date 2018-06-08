import { Navbar } from './Navbar';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { Saved } from '';

describe('Navbar.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Navbar />
    );
  });

  it('should have a `nav` element', () => {
    expect(
      wrapper.find('nav').length
    ).toBe(1);
  });

  it('should have 2 react-router-dom `Link` elements', () => {
    expect(
      wrapper.find('Link').length
    ).toEqual(2)
  });

  it('First `Link` should have an `active` CSS class', () => {
    const activeLink = wrapper.find('Link').first();
    expect(
      activeLink.hasClass('active')
    ).toBe(true);
  });

  it('Last `Link` should NOT have an `active` CSS class', () => {
    const activeLink = wrapper.find('Link').last();
    expect(
      activeLink.hasClass('active')
    ).toBe(false);
  });
});
