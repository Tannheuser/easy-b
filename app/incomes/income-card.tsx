import { Income } from '@/lib/models';
import { DetailsComponentProps } from "@/lib/types";

export function IncomeCard({ item }: DetailsComponentProps<Income>) {
  return (
    <div className="card bg-neutral text-neutral-content flex-[45%]">
      <div className="card-body items-center text-center">
        <p>{item.title}</p>
        <h2 className="card-title">&euro;{item.amount}</h2>
      </div>
    </div>
  );
}

export default IncomeCard;
