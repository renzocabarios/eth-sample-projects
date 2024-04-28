// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Implementation is Initializable, OwnableUpgradeable {
    string name;

    function initialize(string memory _name) public initializer {
        __Ownable_init(msg.sender);
        name = _name;
    }
}
