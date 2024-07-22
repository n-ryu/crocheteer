import { customAlphabet } from "nanoid";

export const createId = <T extends string>(prefix: T): `${T}:${string}` =>
  `${prefix}:${customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  )}`;
