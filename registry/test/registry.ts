import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { deploymentFixture } from "./fixtures";

describe("Register Contract", function () {
  it("Should register owner address", async function () {
    const { registry, owner } = await loadFixture(deploymentFixture);
    await registry.setContract("Owner", owner.address);
    expect(await registry.contracts("Owner")).is.equal(owner.address);
  });
});
