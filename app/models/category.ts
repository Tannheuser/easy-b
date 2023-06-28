import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  budgetedAmount: {
    type: Number,
    required: true,
  },
  spentAmount: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const CategoryModel = models.Category || model("Category", categorySchema);

export type Category = {
  id?: string;
  title: string;
  budgetedAmount: number;
  spentAmount: number;
  icon: string;
};