import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const SendEther = await ethers.getContractFactory("SendEther");
    const sendEther = await SendEther.deploy();
    return { sendEther, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should send Ether to the specified recipient", async function () {
      const { sendEther, owner, otherAccount } = await loadFixture(
        deployOneYearLockFixture
      );

      const amountToSend = ethers.parseEther("1.0");
      const initialReceiverBalance = await ethers.provider.getBalance(
        otherAccount.address
      );

      await owner.sendTransaction({
        to: owner.address,
        value: amountToSend,
      });

      await sendEther
        .connect(owner)
        .sendEther(otherAccount.address, { value: amountToSend });

      const finalReceiverBalance = await ethers.provider.getBalance(
        otherAccount.address
      );
      console.log(Number(ethers.formatUnits(finalReceiverBalance, "ether")));

      expect(
        Number(ethers.formatUnits(finalReceiverBalance, "ether")) -
          Number(ethers.formatUnits(initialReceiverBalance, "ether"))
      ).to.equal(Number(ethers.formatUnits(amountToSend, "ether")));
    });
  });
});
