import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Box", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Box = await ethers.getContractFactory("Box");
    const box = await Box.deploy();

    return { box, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the store data", async function () {
      const { box, owner, otherAccount } = await loadFixture(deployFixture);
      await box.store(1);
      expect(await box.retrieve()).to.equal(1);
    });
  });
});
