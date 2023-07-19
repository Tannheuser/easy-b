import { GroupComponentProps } from '@/lib/types';
import { Transaction } from '@/lib/models';
import CurrencyValue from '@/components/utils/currency-value';
import { categories } from '@/lib/const';

export function TransactionsGroup(props: GroupComponentProps<Transaction>) {
  const { items, title } = props;
  const total = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-neutral">
      <div className="flex items-center justify-between border-b border-b-neutral-700 p-4 text-xs uppercase font-light tracking-wide">
        <div>{title}</div>
        <CurrencyValue value={total} />
      </div>
      {
        items.map((transaction) =>
          <div className="flex items-center justify-between border-b border-b-neutral-700 py-2 px-4 font-extralight" key={transaction.id}>
            <div className="flex items-center">
              <div className="rounded-full bg-base-100 w-8 h-8 p-[.3rem]">
                {categories[transaction.category!.icon]}
              </div>
              <div className="ml-2 text-sm">{transaction.title}</div>
            </div>
            <div className="ml-2 text-sm tracking-wide">
              <CurrencyValue value={transaction.amount} />
            </div>
          </div>)
      }
    </div>
  )
}