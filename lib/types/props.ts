import { ReactElement } from "react";

import { NavigationItem } from "./navigation-item";
import { Category, Transaction } from '@/lib/models';

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

export type TransactionFormProps = {
  saveTransaction: (transaction: Transaction) => void;
  categories: Category[];
}