import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { deployFixture } from "./fixtures";

function parseStringToBytes(value: string) {
  return hre.ethers.hexlify(hre.ethers.toUtf8Bytes(value));
}

describe("Saver", function () {
  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { saver } = await loadFixture(deployFixture);
      const data = "Hello, Ethers!";
      const parsed = parseStringToBytes(data);

      await saver.setData(parsed);

      expect(await saver.data()).to.equal(parsed);
    });
  });
});
