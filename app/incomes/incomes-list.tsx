import { Income } from '@/lib/models';
import { ListComponentProps } from "@/lib/types";
import IncomeCard from './income-card';

export default function IncomesList(props: ListComponentProps<Income>) {
  const { items } = props;

  return (
    items.map((income) => <IncomeCard key={income.id} item={income} />)
  )
}