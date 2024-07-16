import hre from "hardhat";

export async function deployFixture() {
  const [owner, otherAccount] = await hre.ethers.getSigners();

  const Saver = await hre.ethers.getContractFactory("Saver");
  const saver = await Saver.deploy();

  return { saver, owner, otherAccount };
}
