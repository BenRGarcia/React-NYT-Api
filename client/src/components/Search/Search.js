import React from 'react';

export const Search = props => (
  <div className="card bg-light mb-4">
    <div className="card-header h2">Search for Articles</div>
    <div className="card-body">
      <div className="card-text">
        <form>
          <label className="card-title h5 d-block mb-1">
            Topic
          </label>
          <input type="text" className='d-block w-75 mx-auto mb-3' />
          <label className="card-title h5 d-block mb-1">
            Start Year
          </label>
          <input type="text" className='d-block w-75 mx-auto mb-3' />
          <label className="card-title h5 d-block mb-1">
            End Year
          </label>
          <input type="text" className='d-block w-75 mx-auto mb-3' />
          <button type="submit" className="btn btn-secondary btn-lg btn-block w-25 mx-auto">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
);
