import { PageLayout } from "@/components";
import { appNavigation } from "@/lib/const";
import { BudgetService } from "@/lib/services";

export default async function Page() {
  const budgets = await new BudgetService().getCurrentBudgets();

  return (
    <PageLayout navigationItem={appNavigation.incomes}>
      <div className="flex flex-wrap gap-4">
        {
          budgets.map((budget) => <div className="" key={budget.id}>{budget.title}</div>)
        }
      </div>
    </PageLayout>
  )
}

export const revalidate = 0;
