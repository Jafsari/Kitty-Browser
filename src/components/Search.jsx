import React, { Component } from 'react';
import { object } from 'prop-types';
import '../assets/input.css';
import Results from './Results.jsx';
import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            Search:"",
            Kitty:"",
            Image:""
        }
    }
    // 887674

    random = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    handleRequest = (e) => {
        e.preventDefault();
        const web3 = new Web3(window.web3.currentProvider);
    
        // Initialize the contract instance
    
        const kittyContract = new web3.eth.Contract(
          KittyCoreABI, // import the contracts's ABI and use it here
          CONTRACT_ADDRESS,
        );
    
        // Add the contract to the drizzle store
        this.context.drizzle.addContract({
          contractName: CONTRACT_NAME,
          web3Contract: kittyContract,
        });
        // console.log(kittyContract.methods.getKitty(887674))
        kittyContract.methods.getKitty(this.state.Search).call({from: CONTRACT_ADDRESS}).then((result) => {
            this.setState({Kitty:result})
        }).then(() => {
            axios.get(`https://api.cryptokitties.co/kitties/${this.state.Search}`).then((item) => {
            this.setState({Image:item})
            this.setState({Search:""})
            })
        }).catch((err) => {
          console.log(err)
          alert('There was a problem with your request')
        });
    
        }
    handleRandom = (e) => {
        e.preventDefault();
        const web3 = new Web3(window.web3.currentProvider); 
        const kittyContract = new web3.eth.Contract(
          KittyCoreABI, 
          CONTRACT_ADDRESS,
        );
        this.context.drizzle.addContract({
          contractName: CONTRACT_NAME,
          web3Contract: kittyContract,
        });
        kittyContract.methods.getKitty(this.random(999999)).call({from: CONTRACT_ADDRESS}).then((result) => {
            this.setState({Kitty:result})
        }).then(() => {
            axios.get(`https://api.cryptokitties.co/kitties/${this.random(999999)}`).then((item) => {
            this.setState({Image:item})
            this.setState({Search:""})
            })
        }).catch((err) => {
          console.log(err)
          alert('There was a problem with your request')
        });
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
             [e.target.name]: e.target.value
           });
     }
    render(){
    return(
        <div>
         <div><strong>Kitty ID:</strong></div>
         <form>
        <input onChange={this.handleChange} className='input' type="text" name="Search" value={this.state.Search} />
        <button className='button' onClick={this.handleRequest}> FIND KITTY </button>
        <button className='random' onClick={this.handleRandom}> RANDOM </button>
        </form>
        <Results information = {this.state.Kitty} picture={this.state.Image}/>
        </div>
    )
}
}
Search.contextTypes = {
    drizzle: object,
  };

export default Search;
