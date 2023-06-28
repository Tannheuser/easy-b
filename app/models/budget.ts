import { Schema, model, models } from "mongoose";

import { Category, CategoryModel } from '@/app/models/category';

const budgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: [{
    title: String,
    budgetedAmount: Number,
    spentAmount: Number,
    icon: String,
  }]
});

export const BudgetModel = models.Budget || model("Budget", budgetSchema);

export type Budget = {
  id?: string;
  title: string;
  categories: Category[];
  totalAmount?: number;
  spentAmount?: number;
};