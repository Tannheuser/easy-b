import { TransactionForm } from '@/components/transactions/transaction-form';
import { getCategories } from '@/lib/actions/categories';
import { addTransaction } from '@/lib/actions';

export async function NewTransaction() {
  const categories = await getCategories();

  return (
    <TransactionForm categories={categories} saveTransaction={addTransaction} />
  );
}