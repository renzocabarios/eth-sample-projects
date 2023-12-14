"use client";
import { _intializeContract } from "@/config";
import { BrowserProvider } from "ethers";
import { useState } from "react";

export default function Home() {
  const [walletKey, setwalletKey] = useState(null);
  const [mainProvider, setmainProvider] = useState<null | BrowserProvider>(
    null
  );
  const [userBalance, setuserBalance] = useState(0);
  const [data, setdata] = useState("");

  const connectWallet = async () => {
    const { ethereum } = window as any;
    try {
      const provider = new BrowserProvider(ethereum);
      const account = await provider.send("eth_accounts", []);
      setuserBalance(Number(await provider.getBalance(account[0], "latest")));
      setwalletKey(account[0]);
      setmainProvider(new BrowserProvider(ethereum));
    } catch (e: any) {}
  };

  async function mint() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const transaction = await contract.mintNft(temp.address);
      await transaction.wait();
      console.log(transaction);
    }
  }

  return (
    <main>
      <p>Balance: {userBalance}</p>
      <p>Current Data: {data}</p>
      <button onClick={connectWallet}>
        {walletKey ? walletKey : "Connect Wallet"}
      </button>
      <button onClick={mint}>Mint NFT</button>
    </main>
  );
}
