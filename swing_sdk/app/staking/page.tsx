"use client";

import useSwing from "@/hooks/useSwing";
import { Contract } from "@swing.xyz/sdk";
import { useEffect, useState } from "react";
import ContractsList from "./(components)/contracts-list";

export default function Staking() {
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
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-2xl">Staking Contracts</p>
      <ContractsList />
    </div>
  );
}
