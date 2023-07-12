import { Category } from '@/lib/models';
import { BaseService } from '@/lib/services/base-service';
import { CategoryModel, dbConnect } from '@/lib/mongoose';

export class CategoriesService extends BaseService<Category>{
  constructor() {
    super(CategoryModel);
  }

  public async addItem(category: Category): Promise<Category> {
    await dbConnect();
    const newCategory = new CategoryModel(category);
    await newCategory.save();

    return newCategory;
  }

  public async fill(): Promise<void> {
    const categories: Category[] = [
      {
        title: "Mortgage",
        icon: "bank",
      },
      {
        title: "Phone",
        icon: "phone",
      },
      {
        title: "Internet",
        icon: "internet",
      },
      {
        title: "Car insurance",
        icon: "insurance",
      },
      {
        title: "Gas",
        icon: "gas",
      },
      {
        title: "Parking",
        icon: "parking",
      },
      {
        title: "Repair",
        icon: "repair",
      },
      {
        title: "Public transport",
        icon: "publicTransport",
      }
    ];
    await dbConnect();
    await CategoryModel.create(categories);
  }
}