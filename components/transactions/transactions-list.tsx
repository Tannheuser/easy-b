import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
dayjs.extend(isToday);
dayjs.extend(isYesterday);

import { ListComponentProps } from '@/lib/types';
import { Transaction } from '@/lib/models';
import { TransactionsGroup } from '@/components/transactions/transactions-group';

export function TransactionsList(props: ListComponentProps<Transaction>) {
  const { items } = props;
  const groups = items.reduce((groups: Record<string, Transaction[]>, transaction) => {
    const date = transaction.transactionDate;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});

  console.log(groups);

  const getGroupTitle = (date: string) => {
    let transactionDate = dayjs(date);

    if (transactionDate.isToday()) {
      return "Today";
    } else if(transactionDate.isYesterday()) {
      return "Yesterday";
    } else {
      return transactionDate.format('dddd, DD MMMM');
    }
  };

  return (
    Object.keys(groups).map(
      (key) =>
        <div className="bg-neutral mb-2" key={key}>
          <TransactionsGroup items={groups[key]} title={getGroupTitle(key)} />
        </div>
    )

  )
}