import { DetailsComponentProps } from '@/lib/types';
import { Budget } from '@/app/models';
import CurrencyValue from '@/components/utils/currency-value';

export default function BudgetCard({ item }: DetailsComponentProps<Budget>) {
  let spentAmount = 0;
  let budgetedAmount = 0;

  (item.categories || []).forEach((category) => {
    spentAmount += category.spentAmount;
    budgetedAmount += category.budgetedAmount;
  });

  const percentValue = budgetedAmount && spentAmount / budgetedAmount * 100;

  return (
    <div className="card bg-neutral text-neutral-content flex-1 p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col flex-1">
          <div className="text-xl">{item.title}</div>
          <div className="text-xs text-neutral-500">Spent <CurrencyValue value={spentAmount} /> out of <CurrencyValue value={budgetedAmount} /></div>
        </div>
        <div className="radial-progress bg-base-100 text-neutral-content border-4 border-base-100" style={{"--value": {percentValue}, "--size": "2rem"}}>
          <span className="text-[.5rem]">{percentValue}%</span>
        </div>
      </div>
    </div>
  )
}