# Introduction

<a href="https://soliditylang.org/"><img src="https://soliditylang.org/images/SolGray.png" alt="Solidity Homepage"></a>

## Basic Syntax

```solidity
pragma solidity ^0.8.0  //declare the version of solidity >= 0.8.0

contract MyContract{    //everything is contained in a contract, similiar to a class in Java

    uint number;    //unsigned integer called `number`  

    function double(uint _number) public view returns(uint){
        return _number*2;
    }  

}
```