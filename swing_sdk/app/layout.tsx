"use client";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import useSwing from "@/hooks/useSwing";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { swing } = useSwing();

  const onConnectWallet = async () => {
    if (swing) {
      const { ethereum } = window as any;
      await swing.wallet.connect(ethereum, "ethereum");
    }
  };
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="flex min-h-screen flex-col">
          <div className="h-[8vh] w-full bg-primary top-0 absolute flex justify-between items-center px-3">
            <p className="text-2xl font-semibold  text-white">Swing App</p>
            <Button onClick={onConnectWallet}>Connect Wallet</Button>
          </div>
          <div className="h-[8vh]"></div>
          <div className="min-h-[92vh] grid grid-cols-12">
            <div className="col-span-2 flex flex-col gap-1 p-2">
              <Link
                href={"/balance"}
                className="bg-primary text-white px-5 py-3 rounded-lg"
              >
                <p>Check balance</p>
              </Link>
              <Link
                href={"/swap"}
                className="bg-primary text-white px-5 py-3 rounded-lg"
              >
                <p>Swap</p>
              </Link>
              <Link
                href={"/transactions"}
                className="bg-primary text-white px-5 py-3 rounded-lg"
              >
                <p>Transactions</p>
              </Link>
              <Link
                href={"/staking"}
                className="bg-primary text-white px-5 py-3 rounded-lg"
              >
                <p>Staking</p>
              </Link>
            </div>
            <div className="col-span-10 p-2">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
