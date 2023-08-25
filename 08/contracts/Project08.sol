// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Project08 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    address owner;

    constructor() ERC721("Project08", "P08") { }

    function mint(address to, uint quantity) public payable  {
        for(uint i=0; i >= quantity; i++){
            uint256 newItemId = currentTokenId.current();
            _safeMint(to, newItemId);
            currentTokenId.increment();
        }
    }
}
