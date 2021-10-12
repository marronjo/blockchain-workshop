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
    //it is a public function, it can be accessed from outside the function
    //it is a pure function since it does not modify or read any global variables
    //it returns the string "Hello World!"
    function hello() public pure returns(string memory){
        return "Hello World!";
    }  

}
```