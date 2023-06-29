import { revalidatePath } from 'next/cache';

import { Budget } from '@/app/models';
import { appNavigation, plusCircleOutline } from '@/lib/const';
import { BudgetService } from '@/lib/services';

export default function NewBudget() {
  const household: Budget = {
    title: "Household",
    categories: [
      {
        title: "Mortgage",
        spentAmount: 0,
        budgetedAmount: 1256.00,
        icon: "bank",
      },
      {
        title: "Phone",
        spentAmount: 0,
        budgetedAmount: 99.27,
        icon: "phone",
      },
      {
        title: "Internet",
        spentAmount: 0,
        budgetedAmount: 44.98,
        icon: "internet",
      }
    ],
  };

  const transportation: Budget = {
    title: "Transportation",
    categories: [
      {
        title: "Car insurance",
        spentAmount: 0,
        budgetedAmount: 82.16,
        icon: "insurance",
      },
      {
        title: "Gas",
        spentAmount: 36.80,
        budgetedAmount: 300.00,
        icon: "gas",
      },
      {
        title: "Parking",
        spentAmount: 44.98,
        budgetedAmount: 44.98,
        icon: "parking",
      },
      {
        title: "Repair",
        spentAmount: 0,
        budgetedAmount: 50.00,
        icon: "repair",
      },
      {
        title: "Public transport",
        spentAmount: 0,
        budgetedAmount: 20.00,
        icon: "publicTransport",
      }
    ],
  };

  async function addBudget(data: FormData) {
    "use server"
    const newBudget: Budget = {
      // title: String(data?.get("title")),
      ...transportation
    };
    const budgetService = new BudgetService();

    await budgetService.addBudget(newBudget);
    revalidatePath(appNavigation.budgets.href);
  }

  return (
    <div className="card bg-neutral flex flex-1 p-4">
      <form className="flex  " action={addBudget}>
        <div className="form-control flex-auto">
          <input name="title" type="text" placeholder="New budget" className="input w-full required"/>
        </div>
        <button className="btn btn-neutral mx-auto ml-2" type="submit">
          {plusCircleOutline}
        </button>
      </form>
    </div>
  );
}

