"use client";
import { _intializeContract } from "@/config";
import { BrowserProvider } from "ethers";
import { useState } from "react";

export default function Home() {
  const [walletKey, setwalletKey] = useState(null);
  const [name, setname] = useState("");
  const [symbol, setsymbol] = useState("");
  const [decimals, setdecimals] = useState(0);
  const [totalSupply, settotalSupply] = useState(0);
  const [balanceOf, setbalanceOf] = useState(0);
  const [mainProvider, setmainProvider] = useState<null | BrowserProvider>(
    null
  );
  const [userBalance, setuserBalance] = useState(0);
  const [balanceOfForm, setbalanceOfForm] = useState({ address: "" });

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

  const handleBalanceOfForm = (e: any) => {
    const { value, name } = e.target;
    setbalanceOfForm((prev: any) => ({ ...prev, [name]: value }));
  };
  async function getName() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const transaction = await contract.name();
      setname(transaction);
    }
  }

  async function getSymbol() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const transaction = await contract.symbol();
      setsymbol(transaction);
    }
  }

  async function getDecimals() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const transaction = await contract.decimals();
      setdecimals(Number(transaction));
    }
  }

  async function getTotalSupply() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const transaction = await contract.totalSupply();
      settotalSupply(Number(transaction));
    }
  }

  async function getBalanceOf() {
    const temp = await mainProvider?.getSigner();
    if (temp) {
      const contract = await _intializeContract(temp);
      const { address } = balanceOfForm;
      const transaction = await contract.balanceOf(address);
      setbalanceOf(Number(transaction));
    }
  }

  return (
    <main>
      <div className="w-screen flex justify-between items-center bg-slate-500 p-2">
        <div className="">
          <p>Balance: {userBalance}</p>
        </div>

        <button onClick={connectWallet}>
          {walletKey ? walletKey : "Connect Wallet"}
        </button>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={getName}>Get Name</button>
        <p>Value: {name}</p>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={getSymbol}>Get Symbol</button>
        <p>Value: {symbol}</p>
      </div>

      <div className="flex items-center gap-5">
        <button onClick={getDecimals}>Get Decimals</button>
        <p>Value: {decimals}</p>
      </div>

      <div className="flex items-center gap-5">
        <button onClick={getTotalSupply}>Get Total Supply</button>
        <p>Value: {totalSupply}</p>
      </div>

      <div className="flex items-center gap-5">
        <button onClick={getBalanceOf}>Get Balance Of</button>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <p>Address</p>
            <input type="text" name="address" onChange={handleBalanceOfForm} />
          </div>
        </div>
        <p>Value: {balanceOf}</p>
      </div>
    </main>
  );
}
