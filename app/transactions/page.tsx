import { NewTransaction } from '@/components/transactions';
import { RootPageLayout } from "@/components";
import { appNavigation } from "@/lib/const";
import { TransactionsService } from "@/lib/services";
import { TransactionForm } from '@/components/transactions/transaction-form';

export default async function Page() {
  // const transactions = await new TransactionsService().getCurrentItems();

  return (
    <RootPageLayout navigationItem={appNavigation.transactions}>
      <div className="flex flex-col gap-4">
        {
          <>
            <NewTransaction />
            {/*<TransactionForm />*/}
          </>
        }
      </div>
    </RootPageLayout>
  )
}

export const revalidate = 0;
