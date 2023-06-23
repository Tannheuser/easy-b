import { NavigationItem } from "../types";
import { bars, queueList, squaresPlus, wallet } from "./icons";

export const appNavigation: NavigationItem[] = [
  {
    title: "Overview",
    targetSegment: "overview",
    href: "/overview",
    icon: bars,
  },
  {
    title: "Incomes",
    targetSegment: "incomes",
    href: "/incomes",
    icon: squaresPlus,
  },
  {
    title: "Budgets",
    targetSegment: "budgets",
    href: "/budgets",
    icon: wallet,
  },
  {
    title: "Transactions",
    targetSegment: "transactions",
    href: "/transactions",
    icon: queueList,
  }
];