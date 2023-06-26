import { Budget } from '@/app/models';
import { ListComponentProps } from '@/lib/types';
import BudgetCard from './budget-card';

export default async function BudgetsList(props: ListComponentProps<Budget>) {
  const { items } = props;

  return (
    items.map((budget) => <BudgetCard item={budget} key={budget.id} />)
  )
}