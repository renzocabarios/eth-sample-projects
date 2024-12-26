import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("Storage");
  const contract = await ContractFactory.deploy(/* constructor args if any */);

  console.log("Deploying contract...");
  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
