import { OrderStatus } from '../../pages/Delivery/ui/Table/meta/types';

type FilterBadge = {
  key: OrderStatus | 'all';
  name: string;
};

export type { FilterBadge };
