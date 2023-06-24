import { ListComponentProps } from "@/lib/types";
import { Income } from "../models";
import IncomeCard from "./income-card";

function IncomesList(props: ListComponentProps<Income>) {
  const { items } = props;

  return (
    items.map((income) => (
      <IncomeCard key={income.id} item={income} />
    ))

  )
}

export default IncomesList;