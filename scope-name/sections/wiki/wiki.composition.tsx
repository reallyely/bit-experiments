import React from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { Wiki } from './wiki';

const hasRouterContext = () => {
  try {
    useLocation();
    return true;
  } catch (err) {
    return false;
  }
};

export const BasicWiki = () => {
  if (hasRouterContext()) return <Wiki />;
  return (
    <MemoryRouter initialEntries={['/']}>
      <Wiki />
    </MemoryRouter>
  );
};
