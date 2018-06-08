import { SearchContainer } from './SearchContainer';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('SearchContainer.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchContainer />
    );
  });

  it('should have a `Search` heading');

  it('should initialize `this.state.topic` as \'\'');

  it('should initialize `this.state.startYear` as \'\'');

  it('should initialize `this.state.endYear` as \'\'');

  it('should have a `handleOnChange()` method');

  it('should have a `handleFormSubmit()` method');

  describe('user populates child component `input` fields', () => {
    const topic = 'weather', startYear = 2017, endYear = 2018;

    it('`handleOnChange` method should update this.state.topic');

    it('`handleOnChange` method should update this.state.startYear');

    it('`handleOnChange` method should update this.state.endYear');

    describe('user submits child component `form`', () => {
      it('should call parent `handleFormSubmit()` method with `object`');

      it('should reset all fields of `this.state` to \'\'');
    });
  });
});
