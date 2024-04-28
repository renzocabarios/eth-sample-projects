import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ETHERSCAN_API_KEY, PRIVATE_KEY, SEPOLIA_RPC } from "./config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
