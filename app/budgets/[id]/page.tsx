import { BudgetService } from '@/lib/services';
import { Budget } from '@/app/models';

export default async function BudgetDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  if (id && id === "new") {
    const budgetService = new BudgetService();
    const budget: Budget = {
      totalAmount: 1450,
      amountSpent: 0,
      title: "Household",
      description: "Household budget",
      icon: "household",
    };

    await budgetService.addBudget(budget);
  }

  return (
    <div>
      <h1>Budget Details</h1>
    </div>
  );
}