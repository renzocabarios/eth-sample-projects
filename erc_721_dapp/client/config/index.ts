import { Contract, JsonRpcSigner } from "ethers";
import abi from "./abi.json";

export function getABI() {
  return JSON.parse(JSON.stringify(abi));
}

export async function _intializeContract(init: JsonRpcSigner) {
  return new Contract(
    "0x4f935C495d565EA7C7D7F97082B7A3001A3a4ECF",
    getABI(),
    init
  );
}
