import Link from "next/link";

import { NavigationItemProps } from "@/lib/types";

export function NavigationItem({ navigationItem }: NavigationItemProps ) {
  return (
    <Link href={navigationItem.href}>
      <div className="flex flex-col items-center text-accent-content">
        {navigationItem.icon}
        <div className="mt-1">{navigationItem.title}</div>
      </div>
    </Link>
  )
}