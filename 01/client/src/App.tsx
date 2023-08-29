import React, { useEffect, useState } from "react";
import { ethers, BrowserProvider, Contract } from "ethers";

import { getContract } from "./config";

function App() {
  const [provider, setProvider] = useState<null | BrowserProvider>(null);
  const [wallet, setWallet] = useState<null | string>(null);

  useEffect(() => {
    const checkProvider = async () => {
      const { ethereum } = window as any;
      try {
        const provider = new BrowserProvider(ethereum);
        setProvider(provider);
      } catch (e: any) {}
    };

    checkProvider();
  }, []);

  const connectWallet = async () => {
    const { ethereum } = window as any;

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet(accounts[0]);
  };

  const mint = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.mint();
      await tx.wait();
      alert(`Transaction Hash: ${tx} Succefully minted`);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Transaction failed: ${decodedError?.args}`);
    }
  };
  return (
    <>
      {
        <button onClick={connectWallet}>
          {provider == null ? "Connect Wallet" : wallet}
        </button>
      }
      {provider != null ? <button onClick={mint}>Mint</button> : <></>}
    </>
  );
}

export default App;
