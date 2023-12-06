import { Contract, JsonRpcSigner } from "ethers";
import abi from "./abi.json";

export function getABI() {
  return JSON.parse(JSON.stringify(abi));
}
export async function _intializeContract(init: JsonRpcSigner) {
  return new Contract(
    "0xcD5A5482bcF5bAf4Ef016105db8167Ce260C8c5c",
    getABI(),
    init
  );
}
