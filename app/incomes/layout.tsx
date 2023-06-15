import React, { ReactNode } from "react";

import { squaresPlus } from "@/lib/const/icons";

export default async function Layout({children}: {children: ReactNode}) {
  return (
    <div className="my-4">
      <div className="flex flex-row">
        <div className="pr-2">{squaresPlus}</div>
        <h2>Incomes</h2>
      </div>
      <div className="my-4">
        {children}
      </div>
    </div>
  )
}