import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";

import hre from "hardhat";

describe("Factory", function () {
  async function deployFactoryFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Factory = await hre.ethers.getContractFactory("Factory");
    const factory = await Factory.deploy();

    const Implementation = await hre.ethers.getContractFactory(
      "Implementation"
    );
    const implementation = await Implementation.deploy();

    return { factory, implementation, owner, otherAccount };
  }

  describe("Factory", function () {
    it("Should Deploy Launchpad", async function () {
      const { factory, implementation } = await loadFixture(
        deployFactoryFixture
      );

      const response = await factory.create(
        await implementation.getAddress(),
        "TEST"
      );

      console.log(response);
    });
  });
});
