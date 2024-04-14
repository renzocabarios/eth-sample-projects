"use client";
import { ChainSlug, TokenSymbol } from "@swing.xyz/sdk";
import useSwing from "@/hooks/useSwing";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WalletSchema, walletSchema } from "@/lib/schemas/wallet.schema";
import { Input } from "@/components/ui/input";

export default function CheckBalanceForm() {
  const { swing } = useSwing();

  const form = useForm<WalletSchema>({
    resolver: zodResolver(walletSchema),
    defaultValues: {
      address: "",
    },
  });

  const onCheckBalance = async (
    tokenSymbol: TokenSymbol,
    walletAddress: string
  ) => {
    const chainSlug: ChainSlug = "ethereum";
    const { ethereum } = window as any;

    if (swing && ethereum) {
      const balance = await swing.wallet.getBalance(
        chainSlug,
        tokenSymbol,
        walletAddress
      );

      alert(balance);
    }
  };

  async function onSubmit(values: WalletSchema) {
    await onCheckBalance(values.tokenSymbol, values.address);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wallet address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is your public wallet address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tokenSymbol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token Symbol</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>This is the token symbol.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Check Wallet balance</Button>
      </form>
    </Form>
  );
}
