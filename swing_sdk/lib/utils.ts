import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidETHAddress(str: string) {
  let regex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);

  if (str == null) {
    return false;
  }

  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
}
