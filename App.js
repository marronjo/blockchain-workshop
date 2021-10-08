const Web3 = require('web3');   //import web3 library
const web3 = new Web3();     //connect to ethereum node via infura service 

web3.eth.getBlockNumber().then((blockNumber) => {
    console.log("Current block number is : ", blockNumber);
})

const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

web3.eth.getBalance(address).then((balance) => {
    console.log("Balance of %s : %d", address, balance/1e18);
})

web3.eth.getBlock('latest').then((block) => {
    console.log("Current block : \n", block);
})