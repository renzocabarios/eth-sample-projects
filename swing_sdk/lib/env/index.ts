import { Options } from "@swing.xyz/sdk";

type Environment = "prod" | "dev";
const environment: Environment =
  (process.env.NEXT_PUBLIC_ENVIRONMENT as Environment) ?? "dev";

export const SWING_PROD_CONFIG: Options = {
  projectId: "renzo-test",
  environment: "production",
  analytics: false,
  debug: false,
};

export const SWING_DEV_CONFIG: Options = {
  projectId: "renzo-test",
};
