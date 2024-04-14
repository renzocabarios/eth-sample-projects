import { z } from "zod";
import { isValidETHAddress } from "../utils";

export const walletSchema = z
  .object({
    address: z.string().min(2).max(50),
    tokenSymbol: z.string().min(2).max(50),
  })
  .refine((values) => isValidETHAddress(values.address), {
    message: "Address not valid",
  });

export type WalletSchema = z.infer<typeof walletSchema>;
