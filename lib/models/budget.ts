import { BudgetCategory } from '@/lib/models';

export type Budget = {
  id?: string;
  title: string;
  categories: BudgetCategory[];
  totalAmount?: number;
  spentAmount?: number;
};