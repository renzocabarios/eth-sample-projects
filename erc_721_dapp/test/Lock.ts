import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyNFT", function () {
  async function myNftLoadFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNft = await MyNFT.deploy();

    return { myNft, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { myNft, owner, otherAccount } = await loadFixture(
        myNftLoadFixture
      );
      myNft.mintNft(otherAccount.address);
    });
  });
});
