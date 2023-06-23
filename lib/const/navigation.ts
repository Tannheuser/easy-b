import { NavigationItem } from "../types";
import { bars, queueList, squaresPlus, wallet } from "./icons";

export const appNavigation: Record<string, NavigationItem> =
{
  overview: {
    title: "Overview",
    targetSegment: "overview",
    href: "/overview",
    icon: bars,
  },
  incomes: {
    title: "Incomes",
    targetSegment: "incomes",
    href: "/incomes",
    icon: squaresPlus,
  },
  budgets: {
    title: "Budgets",
    targetSegment: "budgets",
    href: "/budgets",
    icon: wallet,
  },
  transactions: {

    title: "Transactions",
    targetSegment: "transactions",
    href: "/transactions",
    icon: queueList,
  }
};