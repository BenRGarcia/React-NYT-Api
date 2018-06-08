import { Footer } from './Footer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Footer.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    );
  });

  it('should have a `footer` element', () => {
    expect(
      wrapper.find('footer').length
    ).toBe(1);
  });

  it('should have class `fixed-bottom`', () => {
    const footer = wrapper.find('footer');
    expect(
      footer.hasClass('fixed-bottom')
    ).toBe(true);
  });

  it('should contain `New York Times Article Scrubber`', () => {
    expect(
      wrapper.html()
    ).toContain('New York Times Article Scrubber');
  });
});
