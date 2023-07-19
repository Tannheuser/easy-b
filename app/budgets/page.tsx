import BudgetsList from '@/app/budgets/budgets-list';
import NewBudget from '@/app/budgets/new-budget';
import { RootPageLayout } from "@/components";
import { appNavigation } from "@/lib/const";
import { BudgetService } from "@/lib/services";

export default async function Page() {
  const budgets = await new BudgetService().getCurrentBudgets();

  return (
    <RootPageLayout navigationItem={appNavigation.budgets}>
      <div className="flex flex-col gap-4 px-4">
        {
          <>
          <BudgetsList items={budgets} />
          <NewBudget />
          </>
        }
      </div>
    </RootPageLayout>
  )
}

export const revalidate = 0;
