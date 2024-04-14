import { Contract } from "@swing.xyz/sdk";

interface IContractsListProps {
  contract: Contract;
}

export default function ContractCard({ contract }: IContractsListProps) {
  return (
    <div
      className="border rounded-lg bg-primary p-3 text-white"
      key={contract.id}
    >
      <div className="flex gap-2 items-center">
        <p className="font-semibold text-base">{contract.chain.name}</p>
        <p className="text-xs">({contract.type})</p>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-sm">{contract.inputToken.symbol}</p>
          <p className="text-xs">{contract.inputToken.chain}</p>
        </div>

        <p>{">"}</p>
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-sm">{contract.outputToken.symbol}</p>
          <p className="text-xs">{contract.outputToken.chain}</p>
        </div>
      </div>
    </div>
  );
}
