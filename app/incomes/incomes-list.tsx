import IncomeCard from "./income-card";
import { IncomesListProps } from "./models";

function IncomesList(props: IncomesListProps) {
  const { incomes } = props;

  return (
    incomes.map((income) => (
      <IncomeCard key={income.id} income={income} />
    ))

  )
}

export default IncomesList;