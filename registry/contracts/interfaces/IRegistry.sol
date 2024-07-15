// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface IRegistry {
    function setContract(string memory _name, address _contract) external;
}
