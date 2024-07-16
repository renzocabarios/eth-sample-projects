// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract Saver {
    bytes public data;

    function setData(bytes memory _data) public {
        data = _data;
    }
}
