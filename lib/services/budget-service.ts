
import { Budget, BudgetModel } from "@/app/models";
import dbConnect from "../mongoose/db-connect";

export class BudgetService {
  public async getCurrentBudgets(): Promise<Budget[]> {
    return this.getBudgetByPeriod("current");
  }

  public async getBudgetByPeriod(period: string): Promise<Budget[]> {
    await dbConnect();
    const budgets = await BudgetModel.find();

    return budgets;
  }

  public async addBudget(budget: Budget): Promise<Budget> {
    await dbConnect();
    const newBudget = new BudgetModel(budget);
    await newBudget.save();

    return newBudget;
  }
}