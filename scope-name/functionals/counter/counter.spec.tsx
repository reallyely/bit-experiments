import { DefaultReducer } from './counter.composition';
import React from 'react';
import { render } from '@testing-library/react';

it('should render with the correct text', () => {
  const { getByText } = render(<DefaultReducer />);
  const rendered = getByText('0');
  expect(rendered).toBeTruthy();
});
