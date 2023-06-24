import { Schema, model, models } from "mongoose";

const budgetSchema = new Schema({
  amount: {
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
  amount: number;
  title: string;
  description?: string;
  icon: string;
};