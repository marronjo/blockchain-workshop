// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract SimpleStorage{
    uint data;
    address recent;
    uint time;
    uint blockNum;

    function set(uint x) public {
        data = x;
        recent = msg.sender;
        time = block.timestamp;
        blockNum = block.number;
    }

    function getData() public view returns (uint){
        return data;
    }

    function getRecent() public view returns (address){
        return recent;
    }

    function getTime() public view returns (uint){
        return time;
    }

    function getBlock() public view returns (uint){
        return blockNum;
    }
}