import { ListComponentProps } from '@/lib/types';
import { Budget } from '@/app/models';

export default async function BudgetsList(props: ListComponentProps<Budget>) {
  const { items } = props;

  return (
    items.map((budget) => <div className="" key={budget.id}>{budget.title}</div>)
  )
}