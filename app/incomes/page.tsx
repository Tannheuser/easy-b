import { PageLayout } from "@/components";
import { appNavigation } from "@/lib/const";
import { IncomeService } from "@/lib/services";
import IncomesList from "./incomes-list";

export default async function Page() {
  const incomes = await new IncomeService().getIncomes();

  return (
    <PageLayout navigationItem={appNavigation.incomes}>
      <div className="flex flex-wrap gap-4">
        <IncomesList incomes={incomes} />
        <div className="card bg-neutral text-neutral-content flex-[25%]">
          <div className="card-body items-center text-center">
            <p>title</p>
            <h2 className="card-title">&euro;1000</h2>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export const revalidate = 0;
