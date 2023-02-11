
import {useState } from "react";
import './App.css';
// import {ethers} from "ethers";
// import Web3 from 'web3';
// import {abi , contractAddress} from "./contract";
// const provider = new ethers.providers.Web3Provider(window.Ethereum)

function Wallet() {
  // const [walletAddress, setWalletAddress ] = useState("");
  const [defaultAccount,setDefaultAccount ] = useState("")
  const [userbalance, setUserbalance] = useState("");
  const [connButtonText , setConnButton] = useState("connet wallet")
    

  const connection = async() =>{

    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        accountsChanged(accounts[0])
        setConnButton("Wallet connected");
        // setWalletAddress(accounts[0]);
        getBalance(accounts[0])
      } catch (error) {
        console.log('Connection error');
      }
    } else {
      alert('Meta Mask not detected');
    }
  };

  const accountsChanged = async (newaccount) =>{
    setDefaultAccount(newaccount)
}

const getBalance = (account) => {
  window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
  .then(balance => {
    setUserbalance(balance);
  })
  .catch(error => {
    console.log("Connection failed")
  });
};



window.ethereum.on('accountsChanged', accountsChanged);



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={connection}>{connButtonText}</button>
        <h3>Wallet Address: {defaultAccount}</h3>
         <div className='balanceDisplay'>
				<h3>Balance: {userbalance}</h3>
        </div>
      </header>
    </div>
  );
}



export default Wallet;
