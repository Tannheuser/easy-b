
import { Budget, BudgetModel } from "@/app/models";
import dbConnect from "../mongoose/db-connect";

export class BudgetService {
  public async getCurrentBudgets(): Promise<Budget[]> {
    return this.getBudgetByPeriod("current");
  }

  public async getBudgetByPeriod(period: string): Promise<Budget[]> {
    await dbConnect();
    const budgets = await BudgetModel.find({ period });
   
    return budgets;
  }
}