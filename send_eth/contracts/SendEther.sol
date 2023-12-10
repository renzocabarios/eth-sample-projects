// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SendEther {
    function sendEther(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Insufficient balance in the contract");
    }
}
