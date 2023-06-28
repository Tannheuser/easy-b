import { redirect } from 'next/navigation';

import { Budget } from '@/app/models';
import { LeafPageLayout } from '@/components';
import { appNavigation } from '@/lib/const';
import { BudgetService } from '@/lib/services';

export default async function BudgetDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  if (id && id === "new") {
    // await budgetService.addBudget(budget);
  }

  async function addBudget(data: FormData) {
    "use server"
    const newBudget: Budget = {
      title: String(data?.get("title")),
      categories: [],
    }
    const budgetService = new BudgetService();

    await budgetService.addBudget(newBudget);
    redirect(appNavigation.budgets.href);
  }

  return (
    <LeafPageLayout navigationItem={appNavigation.budgets}>
      <div className="my-4">
        <form className="flex flex-col gap-4" action={addBudget}>
          <div className="form-control flex flex-col gap-4">
            <input name="title" type="text" placeholder="Budget name" className="input input-bordered w-full border-neutral-500" required />
            <input name="amount" type="number" placeholder="Budget amount" className="input input-bordered w-full border-neutral-500" required />
            <input name="description" type="text" placeholder="Budget description" className="input input-bordered w-full border-neutral-500" />
          </div>
          <button className="btn btn-neutral" type="submit">Save</button>
        </form>
      </div>
    </LeafPageLayout>
  );
}