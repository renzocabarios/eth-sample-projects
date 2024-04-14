"use client";
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
import { Input } from "@/components/ui/input";
import { SwapSchema, swapSchema } from "@/lib/schemas/swap.schema";
import type { TransferParams } from "@swing.xyz/sdk";

export default function CreateSwapForm() {
  const { swing } = useSwing();

  const form = useForm<SwapSchema>({
    resolver: zodResolver(swapSchema),
    defaultValues: {
      fromUserAddress: "",
      fromChain: "",
      fromToken: "",
      amount: 0,
      toUserAddress: "",
      toChain: "",
      toToken: "",
    },
  });

  async function onSubmit(values: SwapSchema) {
    const transferParams: TransferParams = {
      fromChain: values.fromChain,
      fromToken: values.fromToken,
      fromUserAddress: values.fromUserAddress,
      amount: values.amount.toString(),
      toChain: values.toChain,
      toToken: values.toToken,
      toUserAddress: values.toUserAddress,
    };
    if (swing) {
      const quote = await swing.getQuote(transferParams);
      const transferRoute = quote.routes[0];
      await swing.transfer(transferRoute, transferParams);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
      >
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="fromUserAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From Wallet address</FormLabel>
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
        </div>
        <FormField
          control={form.control}
          name="fromToken"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Token Symbol</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="fromChain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Chain</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="toUserAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To Wallet address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter the wallet address to send to.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="toChain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To Token Symbol</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toToken"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To Chain</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 flex items-center justify-end">
          <Button type="submit">Start Transfer</Button>
        </div>
      </form>
    </Form>
  );
}
