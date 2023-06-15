import { IncomeStatProps } from "./models";

export function IncomeStat({ income }: IncomeStatProps) {
  return (
    <div className="card bg-neutral text-neutral-content flex-1 grow">
      <div className="card-body items-center text-center">
        <p>{income.title}</p>
        <h2 className="card-title">&euro;{income.amount}</h2>
      </div>
    </div>
  );
}

export default IncomeStat;

{/* <div className="stats bg-base-100 text-primary-content">
<div className="stat">
  <div className="stat-title">{income.title}</div>
  <div className="stat-value">&euro;{income.amount}</div>
  <div className="stat-actions">
    <button className="btn btn-sm btn-success">Add funds</button>
  </div>
</div>
</div> */}