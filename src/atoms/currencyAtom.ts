import { atom } from "@mongez/react-atom";

export const currencyAtom = atom({
  key: "currency",
  default: "EUR",
});