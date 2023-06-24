import { DetailsComponentProps } from '@/lib/types';
import { Budget } from '@/app/models';
import { homeModern } from '@/lib/const';

export default function BudgetCard({ item }: DetailsComponentProps<Budget>) {
  return (
    <div className="flex-[100%] bg-neutral text-neutral-content">
      <div className="flex p-2">
        { homeModern }
        <div className="ml-4 flex flex-col flex-1">
          <div className="flex justify-between">
            <div>{item.title}</div>
            <div>{item.amount.toLocaleString("nl", { maximumFractionDigits: 2, currency: "EUR", style: "currency"})}</div>
          </div>
        </div>
      </div>
    </div>
  )
}