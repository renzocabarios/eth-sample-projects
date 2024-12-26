import { expect } from "chai";
import { ethers } from "hardhat";

describe("Storage", function () {
  let storage: any;

  beforeEach(async function () {
    storage = await ethers.getContractFactory("Storage");
    const [operator] = await ethers.getSigners();
    storage = await storage.connect(operator).deploy();
    await storage.deployed();
    expect(await storage.retrieve()).to.equal(0n);
  });

  describe("Test store function", function () {
    it("should work properly", async function () {
      let tx = await storage.store(100);
      await tx.wait();
      expect(await storage.retrieve()).to.equal(100n);
    });
    it("should throw", async function () {
      await expect(storage.store(-1)).to.be.throws;
    });
  });
});
