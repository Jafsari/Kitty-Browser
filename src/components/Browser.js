import React, { Component } from 'react';
import { object } from 'prop-types';
import  Search  from './Search.jsx';
import Web3 from 'web3';
import '../assets/Browser.css';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';

class Browser extends Component {
  constructor(props){
    super(props)
    this.state = {
        Kitty:""
    }
  } 
  render() {
    return (
      <div className="browser">
        <h1>
        Kitty Browser
        </h1>
        <Search info ={this.state}/>
      </div>
    );
  }
}
Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
