
import { revalidatePath } from 'next/cache';

import { Budget } from '@/app/models';
import { appNavigation, plusCircleOutline } from '@/lib/const';
import { BudgetService } from '@/lib/services';

export default function NewBudget() {

  async function addBudget(data: FormData) {
    "use server"
    const newBudget: Budget = {
      title: String(data?.get("title")),
      categories: [{
        title: "Mortgage",
        spentAmount: 1000,
        budgetedAmount: 1250,
        icon: "home",
      }],
    }
    const budgetService = new BudgetService();

    await budgetService.addBudget(newBudget);
    revalidatePath(appNavigation.budgets.href);
  }

  return (
    <div className="card bg-neutral flex flex-1 p-4">
      <form className="flex  " action={addBudget}>
        <div className="form-control flex-auto">
          <input name="title" type="text" placeholder="New budget" className="input w-full required" />
        </div>
        <button className="btn btn-neutral mx-auto" type="submit">
          {plusCircleOutline}
        </button>
      </form>
    </div>
  );
}

