import LayoutHeader from "@/components/layout-header";
import { ComponentProps, NavigationItemProps } from "@/lib/types/props";

export function PageLayout({ children, navigationItem }: ComponentProps & NavigationItemProps) {
  return (
    <div className="my-4">
      <LayoutHeader navigationItem={navigationItem} />
      <div className="my-4">
        {children}
      </div>
    </div>
  )
}