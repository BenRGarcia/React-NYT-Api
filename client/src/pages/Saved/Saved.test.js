import { Saved } from './Saved';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SavedArticlesContainer } from '../../containers/SavedArticlesContainer/SavedArticlesContainer';
Enzyme.configure({ adapter: new Adapter() });

describe('Saved.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Saved />
    );
  });

  it('should contain `SavedArticlesContainer` component', () => {
    expect(
      wrapper.containsMatchingElement(
        <SavedArticlesContainer />
      )
    ).toBe(true);
  });
});