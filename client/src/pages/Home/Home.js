import React from 'react';
import { SearchContainer } from '../../containers/SearchContainer/SearchContainer';
import { SearchResultsContainer } from '../../containers/SearchResultsContainer/SearchResultsContainer';

export const Home = () => (
  <div>
    <SearchContainer />
    <SearchResultsContainer />
  </div>
);
