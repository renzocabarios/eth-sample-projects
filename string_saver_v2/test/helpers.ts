import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { deployFixture } from "./fixtures";

export function parseStringToBytes(value: string) {
  return hre.ethers.hexlify(hre.ethers.toUtf8Bytes(value));
}
