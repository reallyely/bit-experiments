import React from 'react';
import { WikiRoute } from '@org/scope-name.entities.wiki-routes';
import Welcome from '@org/scope-name.content.welcome';

export const primaryRoutes: WikiRoute[] = [
  {
    path: '',
    icon: 'lightning',
    title: 'Welcome',
    description: 'Welcome to the first component-driven wiki!',
    component: <Welcome />,
  },
];

export const basics: WikiRoute[] = [
  {
    path: '/',
    // path: 'scope',
    title: 'Scope',
  },
  {
    path: '/',
    // path: 'segment',
    title: 'Segment',
  },
  {
    path: '/',
    // path: 'team',
    title: 'Team',
  },
];

export const scopes: WikiRoute[] = [
  {
    path: 'engineering',
    title: 'Engineering',
    open: false,
    children: [],
  },
  {
    path: 'product',
    title: 'Product',
    open: false,
    children: [],
  },
  {
    path: 'design',
    title: 'Design',
    open: false,
    children: [],
  },
];

export const categories = [
  {
    title: 'Basics',
    routes: basics,
  },
  {
    title: 'Scopes',
    routes: scopes,
  },
];
