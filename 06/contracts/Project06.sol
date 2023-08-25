// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project06 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    mapping(address => bool) public blacklist;
    address owner;

    constructor() ERC721("Project06", "P06") {
        owner = msg.sender;
    }

    function mint() public payable returns (uint256) {
        require(blacklist[msg.sender] == true, "You are blacklisted");
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(msg.sender, newItemId);
        return newItemId;
    }

    function addToBlacklist(address account) public {
        require(msg.sender == owner);
        blacklist[account] = true;
    }
}
