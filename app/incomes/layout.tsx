import React, { ReactNode } from "react";

import LayoutHeader from "@/components/layout-header";
import { appNavigation } from "@/lib/const";

export default async function Layout({children}: {children: ReactNode}) {
  return (
    <div className="my-4">
      <LayoutHeader navigationItem={appNavigation[1]} />
      <div className="my-4">
        {children}
      </div>
    </div>
  )
}