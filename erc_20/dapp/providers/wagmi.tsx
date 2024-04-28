"use client";

import { config } from "@/config";
import { WagmiProvider } from "wagmi";

export default function Wagmi({ children }: any) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
