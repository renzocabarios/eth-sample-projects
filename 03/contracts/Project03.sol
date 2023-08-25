// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project03 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    mapping(address => uint) public accounts;
    uint public MINT_PRICE = 100;
    address owner;

    constructor() ERC721("Project03", "P03") {
        owner = msg.sender;
    }

    function mint() public payable returns (uint256) {
        require(
            accounts[msg.sender] >= 1000000000000000,
            "You need to deposit 0.001 Ether"
        );

        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(msg.sender, newItemId);
        return newItemId;
    }

    function deposit(address account) public payable {
        accounts[account] += msg.value;
    }
}
