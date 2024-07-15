// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "./interfaces/IRegistry.sol";

contract Registry is IRegistry {
    mapping(string => address) public contracts;

    function setContract(string memory _name, address _contract) public {
        contracts[_name] = _contract;
    }
}
