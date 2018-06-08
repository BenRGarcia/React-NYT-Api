import React from 'react';
import { Saved } from "./Saved";
import renderer from 'react-test-renderer';

describe('Saved.js', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Saved />).toJSON();
    expect(rendered).toBeTruthy();
  });
});