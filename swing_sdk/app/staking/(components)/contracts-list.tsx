"use client";
import useSwing from "@/hooks/useSwing";
import { Contract } from "@swing.xyz/sdk";
import { useEffect, useState } from "react";
import ContractCard from "./contracts-card";

export default function ContractsList() {
  const { swing } = useSwing();
  const [contracts, setcontracts] = useState<Contract[]>([]);

  useEffect(() => {
    if (swing) {
      const filtered = swing.contracts.filter(
        (contract) => contract.integration.type === "staking"
      );
      setcontracts(filtered);
    }
  }, [swing]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {contracts.map((contract) => {
        return <ContractCard contract={contract} key={contract.id} />;
      })}
    </div>
  );
}
