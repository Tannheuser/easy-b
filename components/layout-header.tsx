import { NavigationItem, NavigationItemProps } from "@/lib/types";

export default function LayoutHeader({ navigationItem }: NavigationItemProps) {
  return (
    <div className="prose">
      <h2 className="m-0">{navigationItem.title}</h2>
    </div>
  );
}