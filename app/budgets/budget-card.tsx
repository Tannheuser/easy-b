import { DetailsComponentProps } from '@/lib/types';
import { Budget } from '@/app/models';
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

  return (
    <div className="card bg-neutral text-neutral-content flex-1 p-4">
      <div className="flex justify-between items-center border-b border-b-neutral-700 pb-2">
        <div className="flex flex-col flex-1">
          <div className="text-xl">{item.title}</div>
          <div className="text-xs text-neutral-500">
            Spent <CurrencyValue value={spentAmount} /> out of <CurrencyValue value={budgetedAmount} />
          </div>
        </div>
        <div className="radial-progress bg-base-100 text-neutral-content border-4 border-base-100" style={{"--value": percentValue, "--size": "2rem"}}>
          <span className="text-[.5rem]">{percentValue}%</span>
        </div>
      </div>
      <div className="">
        {
          item.categories?.map((category) => (
            <div className="flex border-b border-b-neutral-700 justify-between items-center py-3" key={category.title}>
              <div className="flex items-center">
                <div className="rounded-full bg-base-100 w-7 h-7 p-1">
                  {categories[category.icon]}
                </div>
                <div className="ml-2 text-sm">{category.title}</div>
              </div>
              <div className="text-xs bg-base-100 p-2 rounded"><CurrencyValue value={category.budgetedAmount} /></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}