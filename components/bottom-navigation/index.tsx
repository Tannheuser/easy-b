import { appNavigation } from "@/lib/const";
import { NavigationItem } from "./navigation-item";

export function BottomNavigation() {
  return (
    <div className="btm-nav text-xs bg-neutral text-neutral-content flex lg:hidden">
      {
        appNavigation.map((navigationItem, index) => (
          <NavigationItem key={index} navigationItem={navigationItem} />
        ))
      }
    </div>
  )
}