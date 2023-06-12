import dbConnect from "@/lib/mongoose/dbConnect";
import { Income, IncomeModel } from "../models/income"
import IncomesList from "./incomes-list";

async function getIncomes(): Promise<Income[]>  {
  await dbConnect();
  const incomes = await IncomeModel.find();
 
  return incomes;
}

export default async function Page() {
  const incomes = await getIncomes();

  return (
    <IncomesList incomes={incomes} />
  )
}
