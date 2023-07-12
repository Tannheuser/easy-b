import { Schema, model, models } from 'mongoose';

export const CategoryDefinition = {
  title: {
    type: String,
    required: true,
  },
  // budgetedAmount: {
  //   type: Number,
  //   required: true,
  // },
  // spentAmount: {
  //   type: Number,
  //   required: true,
  // },
  icon: {
    type: String,
    required: true,
  },
};

const categorySchema = new Schema(CategoryDefinition);

export const CategoryModel = models.Category || model("Category", categorySchema);


