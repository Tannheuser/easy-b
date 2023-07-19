import { RootPageLayout } from "@/components";
import { TransactionsList } from '@/components/transactions';
import { appNavigation } from "@/lib/const";
import { TransactionsService } from "@/lib/services";
import { Transaction } from '@/lib/models';

export default async function Page() {
  const transactions = await new TransactionsService().getCurrentItems();
  // const transactions2: Transaction[] = [
  //   {
  //     id: '1',
  //     title: 'Transaction 1',
  //     amount: 37.50,
  //     transactionType: 'expense',
  //     transactionDate: new Date('2023-07-12'),
  //     category: {
  //       id: '1',
  //       title: 'Gas',
  //       icon: 'gas',
  //     }
  //   },
  //   {
  //     id: '1',
  //     title: 'Transaction 2',
  //     amount: 75.10,
  //     transactionType: 'expense',
  //     transactionDate: new Date('2023-07-11'),
  //     category: {
  //       id: '2',
  //       title: 'Car insurance',
  //       icon: 'insurance',
  //     }
  //   },
  //   {
  //     id: '3',
  //     title: 'Transaction 3',
  //     amount: 2.50,
  //     transactionType: 'expense',
  //     transactionDate: new Date('2023-07-10'),
  //     category: {
  //       id: '3',
  //       title: 'Parking',
  //       icon: 'parking',
  //     }
  //   }
  // ];

  return (
    <RootPageLayout navigationItem={appNavigation.transactions}>
      <div className="flex flex-col gap-4">
        {
          <>
            <TransactionsList items={transactions} />
          </>
        }
      </div>
    </RootPageLayout>
  )
}

export const revalidate = 0;
