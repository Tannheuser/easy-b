import { IncomeStatProps } from "./models";

export function IncomeCard({ income }: IncomeStatProps) {
  return (
    <div className="card bg-neutral text-neutral-content flex-[45%]">
      <div className="card-body items-center text-center">
        <p>{income.title}</p>
        <h2 className="card-title">&euro;{income.amount}</h2>
      </div>
    </div>
  );
}

export default IncomeCard;
