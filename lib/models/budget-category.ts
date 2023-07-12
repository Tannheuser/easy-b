import { Category } from '@/lib/models';

export type BudgetCategory = Category & {
  budgetedAmount: number;
  spentAmount: number;
};

