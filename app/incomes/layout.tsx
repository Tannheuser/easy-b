import React, { ReactNode } from "react";

export default async function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <h2>Incomes</h2>
      <div>
        {children}
      </div>
    </div>
  )
}