import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("StringSaver", function () {
  async function deployFixture() {
    const provider = ethers.provider;

    const [owner, account_1] = await ethers.getSigners();
    const contract = await ethers.deployContract("StringSaver");
    await contract.waitForDeployment();
    return { provider, contract, owner, account_1 };
  }

  it("Should Deploy", async function () {
    const { contract } = await loadFixture(deployFixture);
    console.log(`deployed to ${contract.target}`);
  });

  it("Can set data", async function () {
    const data: string = "Hello World";
    const { contract } = await loadFixture(deployFixture);
    await contract.setData(data);
    const tx = await contract.data();
    expect(tx === data);
  });
});
