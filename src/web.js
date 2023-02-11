

import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';
import {abi , contractAddress} from "./contract";


const web3 = new Web3(new Web3.providers.HttpProvider(''));

function minting() {

 const contract = new web3.eth.Contract(abi, contractAddress);

const mint = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.mint().send({ from: accounts[0] });
    console.log(result);
  };

    return (
      <div className="minting">
        <button onClick={mint}>Mint</button>
      </div>
    );
  }

  
  export default minting;


