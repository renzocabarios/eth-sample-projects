import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FungibleTokenModule = buildModule("FungibleTokenModule", (m) => {
  const lock = m.contract("FungibleToken");

  return { lock };
});

export default FungibleTokenModule;
