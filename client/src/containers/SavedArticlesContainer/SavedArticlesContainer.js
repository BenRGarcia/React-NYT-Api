import React, { Component } from 'react';
import { SavedArticles } from '../../components/SavedArticles/SavedArticles';

export class SavedArticlesContainer extends Component {
  state = {};

  render() {
    return (
      <div className='container'>
        <SavedArticles />
      </div>
    );
  }
}
