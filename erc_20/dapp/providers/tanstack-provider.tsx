"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CLIENT_INSTANCE } from "@/config";

export default function TanstackProvider({ children }: any) {
  return (
    <QueryClientProvider client={QUERY_CLIENT_INSTANCE}>
      {children}
    </QueryClientProvider>
  );
}
