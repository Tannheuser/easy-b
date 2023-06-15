import { Income, IncomeModel } from "@/app/models";
import dbConnect from "../mongoose/db-connect";

export class IncomeService {
  public async getIncomes(): Promise<Income[]> {
    await dbConnect();
    const incomes = await IncomeModel.find();
   
    return incomes;
  }
}