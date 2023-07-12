import { Schema, model, models } from "mongoose";

const incomeSchema = new Schema({
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
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export const IncomeModel = models.Income || model("Income", incomeSchema);

export type Income = {
  id: string;
  amount: number;
  title: string;
  description?: string;
  date: Date;
  category: string;
  imageUrl: string;
};