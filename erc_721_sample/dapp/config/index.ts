import { Contract, JsonRpcSigner } from "ethers";
import abi from "./abi.json";

export function getABI() {
  return JSON.parse(JSON.stringify(abi));
}

export async function _intializeContract(init: JsonRpcSigner) {
  return new Contract(
    "0xc80CAb6431C93e5191adDe1dCe9431F3709bfF37",
    getABI(),
    init
  );
}
