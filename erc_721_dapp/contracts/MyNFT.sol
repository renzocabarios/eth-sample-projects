// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
    uint public counterId;

    constructor() ERC721("MyNFT", "MN") {}

    function mintNft() public {
        _mint(msg.sender, counterId);
        _setTokenURI(
            counterId,
            "https://ipfs.io/ipfs/QmUFbUjAifv9GwJo7ufTB5sccnrNqELhDMafoEmZdPPng7"
        );
        counterId++;
    }
}
