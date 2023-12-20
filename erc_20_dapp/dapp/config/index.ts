import { Contract, JsonRpcSigner } from "ethers";
import abi from "./abi.json";

export function getABI() {
  return JSON.parse(JSON.stringify(abi));
}

export async function _intializeContract(init: JsonRpcSigner) {
  return new Contract(
    "0x31a759d43fDb2bEeCd6dB06cEF2c5ea27bAB0982",
    getABI(),
    init
  );
}
