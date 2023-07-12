"use server";
import { Transaction } from '@/lib/models';
import { TransactionsService } from '@/lib/services';

export async function addTransaction(transaction: Transaction) {
  const transactionsService = new TransactionsService();
  const newTransaction = await transactionsService.addItem(transaction);

  return transaction;
}