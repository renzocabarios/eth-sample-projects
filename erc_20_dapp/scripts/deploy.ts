import { ethers } from "hardhat";

async function main() {
  const FungibleToken = await ethers.deployContract("FungibleToken");
  await FungibleToken.waitForDeployment();
  console.log(` deployed to ${FungibleToken.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
