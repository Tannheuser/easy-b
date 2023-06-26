import { DetailsComponentProps } from '@/lib/types';
import { Budget } from '@/app/models';
import CurrencyValue from '@/components/utils/currency-value';
import { categories } from '@/lib/const';

export default function BudgetCard({ item }: DetailsComponentProps<Budget>) {
  return (
    <div className="flex-[100%] text-neutral-content border-b-2 border-neutral">
      <div className="flex pt-4 items-center text-sm">
        { categories[item.icon] }
        <div className="ml-4 flex flex-col flex-1">
          <div className="flex justify-between">
            <div>{item.title}</div>
            <div>
              <CurrencyValue value={item.totalAmount} />
            </div>
          </div>
          <div className="my-1 text-xs text-neutral-500">Spent <CurrencyValue value={item.amountSpent} /> out of <CurrencyValue value={item.totalAmount} /></div>
        </div>
      </div>
      <progress className="progress bg-neutral accent-primary my-2 [&::-webkit-progress-value]:bg-neutral-300 [&::-moz-progress-bar]:bg-neutral-300" value={item.amountSpent} max={item.totalAmount}></progress>
    </div>
  )
}