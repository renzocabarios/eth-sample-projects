import { z } from "zod";
import { isValidETHAddress } from "../utils";

export const swapSchema = z
  .object({
    fromUserAddress: z.string().min(2).max(50),
    fromChain: z.string().min(1).max(50),
    fromToken: z.string().min(2).max(50),
    amount: z.number(),
    toUserAddress: z.string().min(2).max(50),
    toChain: z.string().min(1).max(50),
    toToken: z.string().min(2).max(50),
  })
  .refine((values) => isValidETHAddress(values.fromUserAddress), {
    message: "From Address not valid",
  })
  .refine((values) => isValidETHAddress(values.toUserAddress), {
    message: "To Address not valid",
  });

export type SwapSchema = z.infer<typeof swapSchema>;
