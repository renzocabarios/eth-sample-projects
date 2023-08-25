// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project02 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    mapping(address => bool) public whiteList;
    uint public MINT_PRICE = 100;
    address owner;

    constructor() ERC721("Project02", "P02") {
        owner = msg.sender;
    }

    function mint() public payable returns (uint256) {
        if (whiteList[msg.sender] != true) {
            require(MINT_PRICE == msg.value, "Mint costs a 100 WEI");
            bool sent = payable(owner).send(msg.value);
            require(sent, "Didn't receive fee.");
        }

        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(msg.sender, newItemId);
        return newItemId;
    }

    function addToWhiteList(address account) public {
        require(msg.sender == owner);
        whiteList[account] = true;
    }
}
