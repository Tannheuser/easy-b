import { Schema, model, models } from "mongoose";

const budgetSchema = new Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  amountSpent: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false
  }
});

export const BudgetModel = models.Budget || model("Budget", budgetSchema);

export type Budget = {
  id?: string;
  totalAmount: number;
  amountSpent: number;
  title: string;
  description?: string;
  icon: string;
};