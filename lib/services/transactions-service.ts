
import { Transaction } from '@/lib/models';
import { TransactionModel, dbConnect } from '@/lib/mongoose';
import { PeriodBasedService } from '@/lib/services';

export class TransactionsService extends PeriodBasedService<Transaction> {
  constructor() {
    super(TransactionModel);
  }

  public async addItem(budget: Transaction): Promise<Transaction> {
    await dbConnect();
    const newTransaction = new TransactionModel(budget);
    await newTransaction.save();

    return newTransaction;
  }
}