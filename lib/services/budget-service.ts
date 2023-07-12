import { Budget } from '@/lib/models';
import { BudgetModel, dbConnect } from '@/lib/mongoose';

export class BudgetService {
  public async getCurrentBudgets(): Promise<Budget[]> {
    return this.getBudgetByPeriod('current');
  }

  public async getBudgetByPeriod(period: string): Promise<Budget[]> {
    await dbConnect();
    const budgets = await BudgetModel.find();

    console.log(budgets);

    return budgets;
  }

  public async addBudget(budget: Budget): Promise<Budget> {
    await dbConnect();
    const newBudget = new BudgetModel(budget);
    await newBudget.save();

    return newBudget;
  }
}