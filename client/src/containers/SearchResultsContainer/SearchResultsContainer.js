import React, { Component } from 'react';
import { SearchContainer } from '../SearchContainer/SearchContainer';
import { ResultsContainer } from '../ResultsContainer/ResultsContainer';

export class SearchResultsContainer extends Component {
  state = {};

  render() {
    return (
      <div className='container'>
        <SearchContainer />
        <ResultsContainer />
      </div>
    );
  }
}
