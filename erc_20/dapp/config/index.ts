import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient } from "@tanstack/react-query";
import { injected, metaMask, safe } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const QUERY_CLIENT_INSTANCE = new QueryClient();
