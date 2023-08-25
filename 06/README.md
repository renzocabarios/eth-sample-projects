# Sample Hardhat Project

- configure hardhat config
- run `npx hardhat compile`
- run `npx hardhat run ./scripts/deploy.ts --network sepolia`
- run `npx hardhat verify --contract contracts/Project06.sol:Project06 --network sepolia <program-id>`

## DESCRIPTION

```
You are not allowed to mint if you are included in the blacklisted address, otherwise you are FREE to mint
```