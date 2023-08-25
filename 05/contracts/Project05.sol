// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project05 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    uint public MINT_PRICE = 100;
    address owner;

    constructor() ERC721("Project05", "P05") {
        owner = msg.sender;
    }

    function mint() public payable returns (uint256) {
        uint256 newItemId = currentTokenId.current();
        require(msg.sender == owner, "Only owner can mint");
        require(10 <= newItemId, "Can only mint 10 NFT");
        _safeMint(msg.sender, newItemId);
        currentTokenId.increment();
        return newItemId;
    }
}
