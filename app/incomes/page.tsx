import { IncomeService } from "@/lib/services";

import IncomesList from "./incomes-list";

export default async function Page() {
  const incomes = await new IncomeService().getIncomes();

  return (
    <div className="flex gap-4">
      <IncomesList incomes={incomes} />
    </div>
  )
}

export const revalidate = 0;

