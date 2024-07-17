import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { deployFixture } from "./fixtures";
import { parseStringToBytes } from "./helpers";

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
