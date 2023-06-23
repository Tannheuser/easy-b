import { NavigationItem } from "./navigation-item";

export type ListComponentProps<T> = {
  items: T[];
};

export type DetailsComponentProps<T> = {
  item: T;
};

export type NavigationItemProps = {
  navigationItem: NavigationItem;
}