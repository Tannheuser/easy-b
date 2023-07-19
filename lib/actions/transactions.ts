"use server";
import dayjs from 'dayjs';

import { Transaction } from '@/lib/models';
import { TransactionsService } from '@/lib/services';

export async function addTransaction(transaction: Transaction) {
  const transactionsService = new TransactionsService();
  const newTransaction = await transactionsService.addItem({ ...transaction, createdAt: dayjs().unix() });

  return transaction;
}