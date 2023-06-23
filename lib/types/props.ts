import { ReactElement } from "react";

import { NavigationItem } from "./navigation-item";

export type ComponentProps = {
  children: ReactElement;
};

export type ListComponentProps<T> = {
  items: T[];
};

export type DetailsComponentProps<T> = {
  item: T;
};

export type NavigationItemProps = {
  navigationItem: NavigationItem;
}