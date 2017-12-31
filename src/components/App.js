import React from 'react';
import { Workspace } from './Workspace';
import { Navigation } from './Navigation';
import '../styles/main.scss';

export const App = () => (
  <div>
    <Navigation />
    <Workspace />
  </div>
);

App.displayName = 'App';
