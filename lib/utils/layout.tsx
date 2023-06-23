import { ReactElement } from "react";

import { NavigationItem } from "../types";
import PageLayout from "@/components/page-layout";

export function getTopLevelLayout(page: ReactElement) {
  return (
    // <PageLayout navigationItem={navigationItem}>
      <>
      <h2>ok</h2>
      {page}
      </>
    // </PageLayout>
  )
}