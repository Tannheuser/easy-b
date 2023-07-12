import { DetailsComponentProps } from '@/lib/types';
import { Budget } from '@/lib/models';
import CurrencyValue from '@/components/utils/currency-value';
import { categories } from '@/lib/const';

export default function BudgetCard({ item }: DetailsComponentProps<Budget>) {
  let spentAmount = 0;
  let budgetedAmount = 0;

  (item.categories || []).forEach((category) => {
    spentAmount += category.spentAmount;
    budgetedAmount += category.budgetedAmount;
  });

  const percentValue = Math.floor(budgetedAmount && spentAmount / budgetedAmount * 100);

  // @ts-ignore
  return (
    <div className="card bg-neutral text-content flex-1 p-4">
      <div className="flex justify-between items-center border-b border-b-neutral-700 pb-2">
        <div className="flex flex-col flex-1">
          <div className="text-xl">{item.title}</div>
          <div className="text-xs text-neutral-400">
            Spent <CurrencyValue value={spentAmount} /> out of <CurrencyValue value={budgetedAmount} />
          </div>
        </div>
        <div className="radial-progress bg-base-100 text-neutral-400 border-4 border-base-100" style={{"--value": percentValue, "--size": "2rem"}}>
          <span className="text-[.5rem]">{percentValue}%</span>
        </div>
      </div>
      {
        item.categories?.sort((a, b) => b.budgetedAmount - a.budgetedAmount).map((category) => (
          <div className="flex border-b border-b-neutral-700 justify-between items-center py-3 text-neutral-content" key={category.title}>
            <div className="flex items-center">
              <div className="rounded-full bg-base-100 w-8 h-8 p-[.3rem]">
                {categories[category.icon]}
              </div>
              <div className="ml-2 text-sm">{category.title}</div>
            </div>
            <div className="text-xs bg-base-100 p-2 rounded"><CurrencyValue value={category.budgetedAmount} /></div>
          </div>
        ))
      }
    </div>
  )
}