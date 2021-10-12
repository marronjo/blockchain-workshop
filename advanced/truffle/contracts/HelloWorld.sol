// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld{

    string hello;

    constructor() {
        hello = "Hello World";
        sayHello();
    }

    function setHello(string memory _hello) public {
        hello = _hello;
    }

    function sayHello() public view returns(string memory){
        return hello;
    }
}
