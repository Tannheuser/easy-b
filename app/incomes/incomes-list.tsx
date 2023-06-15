import IncomeStat from "./income-stat";
import { IncomesListProps } from "./models";

function IncomesList(props: IncomesListProps) {
  const { incomes } = props;

  return (
    incomes.map((income) => (
      <IncomeStat key={income.id} income={income} />
    ))

  )
}

export default IncomesList;