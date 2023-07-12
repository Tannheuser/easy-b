'use server';
import { CategoriesService } from '@/lib/services';

export async function fillCategories() {
  const categoriesService = new CategoriesService();
  await categoriesService.fill();
}

export async function getCategories() {
  const categoriesService = new CategoriesService();
  const categories = await categoriesService.getItems();

  return JSON.parse(JSON.stringify(categories));
}