// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Fungible is ERC721 {
    constructor() ERC721("FungibleToken", "FToken"){}
}
