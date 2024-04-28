"use client";
import { WalletOptions } from "@/components/connect-wallet";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap gap-5">
        <WalletOptions />
      </div>
    </main>
  );
}
