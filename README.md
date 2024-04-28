# eth-sample-projects

## NOTES

- `npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS` to verify SC

## PROJECTS
- ```1. A wallet can only mint once. You cannot mint more than once even if you pay ETH```

- ```2. Minting is FREE for wallets included in a list of “whitelisted” addresses```

- ```3. You can mint only if you have deposited a total of 0.001 ETH in the  smart contract```

- ```4. You can mint for FREE once, and succeeding mints will require you a set amount of price.```

- ```5. The deployer of the contract can mint a maximum of 10 NFTs.  No one else can mint this NFT```

- ```6. You are not allowed to mint if you are included in the blacklisted address, otherwise you are FREE to mint```

- ```7. Paid minting is open to anyone for as long as they send X amount of set price.```

- ```8. Create a batch minting function where you can mint X amount of NFTs to a specified address```

- ```9. You can only mint an NFT if you own a specific amount of a specified ERC20 token.```