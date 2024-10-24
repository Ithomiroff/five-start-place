import { FilterBadge } from '@shared/meta/types';

const DELIVERY_FILTERS: FilterBadge[] = [
  {
    key: 'all',
    name: 'Все',
  },
  {
    key: 'new',
    name: 'Новые',
  },
  {
    key: 'active',
    name: 'Активные',
  },
  {
    key: 'done',
    name: 'Выполненные',
  },
  {
    key: 'canceled',
    name: 'Отмененные',
  },
];

export { DELIVERY_FILTERS };
