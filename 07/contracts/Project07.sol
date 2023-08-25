// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project07 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    mapping(address => bool) public walletsMinted;
    uint public MINT_PRICE;
    address owner;

    constructor(uint _price) ERC721("Project01", "P01") {
        owner = msg.sender;
        MINT_PRICE = _price;
    }

    function mint() public payable returns (uint256) {
        require(MINT_PRICE == msg.value, "Mint costs a 100 WEI");
        bool sent = payable(owner).send(msg.value);
        require(sent, "Didn't receive fee.");
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(msg.sender, newItemId);
        return newItemId;
    }
}
