import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './Header.js';

export default {
  component: Header,
  title: 'Header',
};

export const Base = () => (
    <div className="bg-primary">
    <div className="container text-white pt-5 h1">
      <a href="/home">HOME<small>vBETA</small></a>
    </div>
  </div>
);