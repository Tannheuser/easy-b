"use client"

import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';

import { NavigationItemProps } from "@/lib/types";

export function NavigationItem({ navigationItem }: NavigationItemProps ) {
  const activeSegment = useSelectedLayoutSegment();
  const active = activeSegment === navigationItem.targetSegment;

  return (
    <Link href={navigationItem.href}>
      <div className={`flex flex-col items-center ${active ? " text-accent-content" : ""}`}>
        {navigationItem.icon}
        <div className="mt-1">{navigationItem.title}</div>
      </div>
    </Link>
  )
}