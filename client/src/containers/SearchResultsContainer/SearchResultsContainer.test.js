import { SearchResultsContainer } from './SearchResultsContainer';
import { Search } from '../../components/Search/Search';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { nytApiSearch } from '../../../utils/nytApi';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../../utils/nytApi');

describe('SearchContainer.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchResultsContainer />
    );
  });

  it('should contain child component `Search`');

  it('should contain child component `SearchResults`');

  it('should initialize `this.state.articles` as `[]`');

  it('should have a `handleFormSubmit()` method');

  it('should have a `handleSaveArticle()` method');

  it('should have a `removeArticleFromResults()` method');

  describe('user submits child component `form`', () => {
    const searchObject = {
      topic: 'weather',
      startYear: '2017',
      endYear: '2018'
    };

    it('should call `nytApiSearch()` with `searchObject`');

    describe('and API returns results', () => {
      const articles = [
        {
          title: '',
          date: '',
          url: ''
        }, {
          title: '',
          date: '',
          url: ''
        }
      ];

      it('should pass `nytApiSearch()` response object to child component `SearchResults`');

      describe('user saves an article from `Results` child component', () => {
        const saveObject = {
          title: '',
          date: '',
          url: ''
        };

        it('should call `handleSaveArticle()` method with `saveObject`');

        it('should filter out saved article from `this.state.articles`');
      });
    });    
  });
});
