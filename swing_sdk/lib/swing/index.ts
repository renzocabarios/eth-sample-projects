import SwingSDK from "@swing.xyz/sdk";
import { SWING_PROD_CONFIG } from "../env";

const sdk = new SwingSDK(SWING_PROD_CONFIG);

export async function getSwingInstance() {
  await sdk.init();
  return sdk;
}
