// import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

const config: HardhatUserConfig = {
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: "https://rpc.test.btcs.network",
      accounts: [process.env.PRIVATE_KEY ?? ""],
      chainId: 1115,
    },
    mainnet: {
      url: "https://1rpc.io/core",
      accounts: [process.env.PRIVATE_KEY ?? ""],
      chainId: 1116,
    },
  },
  solidity: "0.8.28",
};

export default config;
