"use client";
import { useState } from "react";

import { Transaction } from '@/lib/models';
import { TransactionFormProps } from '@/lib/types';

type TransactionChange = Partial<Transaction> & { category?: string };

export function TransactionForm({ categories, saveTransaction }: TransactionFormProps) {
  const [transaction, setTransaction] = useState<TransactionChange>({
    title: '',
    amount: undefined,
    transactionType: 'expense',
  });

  const handleChange = (change: Record<string, unknown>) => {
    setTransaction({ ...transaction, ...change })
  }

  const createTransaction = async() => {
    await saveTransaction(transaction as Transaction);
  }

  return (
    <div className="card bg-neutral flex flex-1 p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-4">
          {
            ["income", "expense", "transfer"].map((type, index) => (
              <div key={index} className={`btn btn-neutral ml-2 text-xs w-28 ${transaction.transactionType === type ? "bg-base-100" : ""}`} onClick={() => handleChange({ transactionType: type })}>
                {type}
              </div>
            ))
          }
        </div>
        <div className="form-control w-full">
          <input name="title" type="text" placeholder="Title" className="input" value={transaction.title} onChange={(e) => handleChange({ title: e.target.value })} />
        </div>
        <div className="form-control w-full">
          <input name="title" type="text" placeholder="Amount" className="input" value={transaction.amount} onChange={(e) => handleChange({ amount: e.target.value })}/>
        </div>
        <div className="form-control w-full">
          <select className="select w-full" defaultValue="Category">
            <option disabled className="text-xl">Category</option>
            {
              categories.map((category, index) => (
                <option key={index} value={category.id} onChange={(e) => handleChange({ category: categories[index]})}>
                  {category.title}
                </option>
              ))
            }
          </select>
          {/*<input name="title" type="text" placeholder="Category" className="input" value={transaction.category} onChange={(e) => handleChange({ category: e.target.value })} />*/}
        </div>
        <button className="btn w-full mt-4" onClick={createTransaction}>
          Save
        </button>
      </div>
    </div>
  );
}