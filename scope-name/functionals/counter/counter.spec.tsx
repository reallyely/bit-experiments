import { NoChildren } from './counter.composition';
import React from 'react';
import { render } from '@testing-library/react';

it('should render with the correct text', () => {
  const { getByText } = render(<NoChildren />);
  const rendered = getByText('0');
  expect(rendered).toBeTruthy();
});
