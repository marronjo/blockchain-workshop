# Introduction

<a href="https://soliditylang.org/"><img src="https://soliditylang.org/images/SolGray.png" alt="Solidity Homepage"></a>

## Basic Syntax

```solidity
pragma solidity ^0.8.0  //declare the version of solidity >= 0.8.0

contract MyContract{    //everything is contained in a contract, similiar to a class in Java

    //global variables, can be accessed from anywhere in the contract
    uint number;        //unsigned integer called `number`  
    string name;        //string (word) called `name`

    //created a function called hello
    //it is a public function, it can be accessed from outside the contract
    //it is a pure function since it does not modify or read any global variables
    //it returns the string "Hello World!"
    function hello() public pure returns(string memory){
        return "Hello World!";
    }  

}
```

<a href="https://www.npmjs.com/package/web3"><img src="https://repository-images.githubusercontent.com/24655114/c71c5800-6a8c-11e9-9117-8ec357c9f69e" alt="Web3 JS"></a>

```javascript
const Web3 = require('web3');                //import web3 library
const web3 = new Web3("MY INFURA LINK");     //connect to ethereum node via infura service 

//you can sign up to infura for free at https://infura.io/

//callback function which fetches the current block number
//uses the eth library within web3 to fetch the current block number on the Ethereum blockchain 
web3.eth.getBlockNumber().then((blockNumber) => {
    console.log("Current block number is : ", blockNumber);
})
```