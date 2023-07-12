import { Schema, model, models } from 'mongoose';

const budgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: [{
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
  }]
});

export const BudgetModel = models.Budget || model("Budget", budgetSchema);
