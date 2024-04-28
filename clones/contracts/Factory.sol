// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IImplementation.sol";
import "./shared/Errors.sol";

contract Factory is Ownable(msg.sender) {
    constructor() {}

    function create(
        address _implementation,
        string calldata _name
    ) public onlyOwner {
        address clone = Clones.clone(_implementation);
        IImplementation(clone).initialize(_name);
    }
}
