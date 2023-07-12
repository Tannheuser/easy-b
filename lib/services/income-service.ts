import { Income, IncomeModel } from '@/lib/models';
import { dbConnect } from '@/lib/mongoose';

export class IncomeService {
  public async getIncomes(): Promise<Income[]> {
    await dbConnect();
    const incomes = await IncomeModel.find();

    return incomes;
  }
}