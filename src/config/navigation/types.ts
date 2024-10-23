import { type ComponentProps, type FC, ReactNode } from 'react';

export type MenuItem = {
  key: string;
  name: string;
  path?: string;
  icon?: ReactNode;
  submenu?: MenuItem[];
};
