import { fillCategories } from '@/lib/actions/categories';

export default async function CategoryDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  if (id && id === "fill") {
    await fillCategories()
  }

  return (
    <div>Categories</div>
  );
}