import React from 'react';
import { object } from 'prop-types';
import  Search  from './Search.jsx';
import '../assets/Browser.css';

const Browser = () => {
  return (
      <div className="browser">
        <h1>
        Kitty Browser
        </h1>
        <Search />
      </div>
    );
}
Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
