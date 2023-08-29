import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
  return new Contract(
    "0x337f31DF87a1fc7473096FB9258b9d249809DA69",
    abi,
    signer
  );
}
