import { Schema, model, models } from "mongoose";

import { CategoryDefinition } from '@/lib/mongoose/category';

const transactionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: CategoryDefinition,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  transactionDate: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

export const TransactionModel = models.Transaction || model("Transaction", transactionSchema);
