const Web3 = require('web3');   //import web3 library
const link = require('../secrets.json').infura;  //import secret infura key
const web3 = new Web3(link);     //connect to ethereum node via infura service 

//callback function which fetches the current block number
web3.eth.getBlockNumber().then((blockNumber) => {
    console.log("Current block number is : ", blockNumber);
})

const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';   //address with ALOT of ETH, found on etherscan

//callback function which fetches balance of the above address
web3.eth.getBalance(address).then((balance) => {
    console.log("Balance of %s : %d", address, balance/1e18);   //NOTE: divide balance by 10^18 because there's no decimals on the blockchain and everything has 18 d.p. precision
})

//callback function which fetches latest block on the Ethereum blockchain
web3.eth.getBlock('latest').then((block) => {
    console.log("Current block : \n", block);
})

//to run this code make sure you have node js and web3 js installed

//install node js from https://nodejs.org/en/
//install web3 js by typing 'npm install web3' in your command line once node is installed

// to run this code ... navigate to the folder containing this file and type node App