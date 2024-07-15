import hre from "hardhat";

export async function deploymentFixture() {
  const [owner, otherAccount] = await hre.ethers.getSigners();
  const Registry = await hre.ethers.getContractFactory("Registry");
  const registry = await Registry.deploy();
  return { registry, owner, otherAccount };
}
