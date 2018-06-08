import { Home } from './Home';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchContainer } from '../../containers/SearchContainer/SearchContainer';
import { SearchResultsContainer } from '../../containers/SearchResultsContainer/SearchResultsContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Home.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Home />
    );
  });

  it('should contain `SearchContainer` component', () => {
    expect(
      wrapper.containsMatchingElement(<SearchContainer />)
    ).toBe(true);
  });

  it('should contain `SearchResultsContainer` component', () => {
    expect(
      wrapper.containsMatchingElement(<SearchResultsContainer />)
    ).toBe(true);
  });
});