import { PageLayout } from "@/components";
import { appNavigation } from "@/lib/const";
import { BudgetService } from "@/lib/services";
import BudgetsList from '@/app/budgets/budgets-list';

export default async function Page() {
  const budgets = await new BudgetService().getCurrentBudgets();

  return (
    <PageLayout navigationItem={appNavigation.budgets}>
      <div className="flex flex-wrap gap-4">
        {
          <BudgetsList items={budgets} />
        }
      </div>
    </PageLayout>
  )
}

export const revalidate = 0;
