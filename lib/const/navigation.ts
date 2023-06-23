import { NavigationItem } from "../types";
import { bars, queueList, squaresPlus, wallet } from "./icons";

export const appNavigation: NavigationItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: bars,
  },
  {
    title: "Incomes",
    href: "/incomes",
    icon: squaresPlus,
  },
  {
    title: "Budgets",
    href: "/budgets",
    icon: wallet,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: queueList,
  }
];