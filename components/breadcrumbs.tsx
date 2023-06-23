import Link from "next/link";

export function Breadcrumbs() {
  return (
    <div className="text-sm breadcrumbs hidden lg:block">
      <ul>
        <li><Link href="/">Home</Link></li> 
        <li>Incomes</li>
      </ul>
    </div>
  );
}