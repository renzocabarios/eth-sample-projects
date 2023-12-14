import { ethers } from "hardhat";

async function main() {
  const MyNFT = await ethers.deployContract("MyNFT");
  await MyNFT.waitForDeployment();
  console.log(`MyNFT with deployed to ${MyNFT.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
