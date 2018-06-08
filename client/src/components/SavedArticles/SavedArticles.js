import React from 'react';

export const SavedArticles = props => (
  <div className="card bg-light mb-4">
    <div className="card-header h2 mb-3">
      Saved Articles
    </div>
    {/* Insert Ternary statement here */}
    <div className='mx-auto mb-3'>
      <div className="card-body d-flex justify-content-center py-2">
        <span className="card-text">
          Saved Articles Appear Here
        </span>
      </div>
    </div>
    {/* map start */}
    <div className='border border-secondary rounded w-75 mx-auto mb-3'>
      <div className="card-body d-flex justify-content-between align-items-center py-2">
        <span className="card-text h4">
          Hard Coded Article Title 1
        </span>
        <button type='button' className='btn btn-secondary'>
          Remove
        </button>
      </div>
      <form className='px-3 text-left'>
        <label className='mb-0'>Notes:</label>
        <textarea name="" id="" className='w-100 p-1 rounded' style={{ height: '50px' }} value='hello world'></textarea>
      </form>
    </div>
    {/* map end: */}
    {/* map start */}
    <div className='border border-secondary rounded w-75 mx-auto mb-3'>
      <div className="card-body d-flex justify-content-between align-items-center py-2">
        <span className="card-text h4">
          Hard Coded Article Title 2
        </span>
        <button type='button' className='btn btn-secondary'>
          Remove
        </button>
      </div>
      <form className='px-3 text-left'>
        <label className='mb-0'>Notes:</label>
        <textarea name="" id="" className='w-100 p-1 rounded' style={{ height: '50px' }}></textarea>
      </form>
    </div>
    {/* map end: */}
    {/* map start */}
    <div className='border border-secondary rounded w-75 mx-auto mb-3'>
      <div className="card-body d-flex justify-content-between align-items-center py-2">
        <span className="card-text h4">
          Hard Coded Article Title 3
        </span>
        <button type='button' className='btn btn-secondary'>
          Remove
        </button>
      </div>
      <form className='px-3 text-left'>
        <label className='mb-0'>Notes:</label>
        <textarea name="" id="" className='w-100 p-1 rounded' style={{ height: '50px' }}></textarea>
      </form>
    </div>
    {/* map end: */}
    {/* map start */}
    <div className='border border-secondary rounded w-75 mx-auto mb-3'>
      <div className="card-body d-flex justify-content-between align-items-center py-2">
        <span className="card-text h4">
          Hard Coded Article Title 4
        </span>
        <button type='button' className='btn btn-secondary'>
          Remove
        </button>
      </div>
      <form className='px-3 text-left'>
        <label className='mb-0'>Notes:</label>
        <textarea name="" id="" className='w-100 p-1 rounded' style={{ height: '50px' }}></textarea>
      </form>
    </div>
    {/* map end: */}
    {/* map start */}
    <div className='border border-secondary rounded w-75 mx-auto mb-3'>
      <div className="card-body d-flex justify-content-between align-items-center py-2">
        <span className="card-text h4">
          Hard Coded Article Title 5
        </span>
        <button type='button' className='btn btn-secondary'>
          Remove
        </button>
      </div>
      <form className='px-3 text-left'>
        <label className='mb-0'>Notes:</label>
        <textarea name="" id="" className='w-100 p-1 rounded' style={{ height: '50px' }}></textarea>
      </form>
    </div>
    {/* map end: */}
  </div>
);
