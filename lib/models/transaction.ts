
import { Category } from '@/lib/models';

export const TransactionTypes = <const> ["expense", "income", "transfer"];

export type TransactionType = typeof TransactionTypes[number];

export type Transaction = {
  id?: string;
  title: string;
  category?: Category;
  amount: number;
  transactionType: TransactionType;
};