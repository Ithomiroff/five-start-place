import styles from './TableStatus.module.scss';
import { FC } from 'react';
import { cn } from '@utils/cn-bind';
import { OrderStatus } from '../Table/meta/types';

type Props = {
  variant: OrderStatus;
};

const cx = cn(styles);

const TITLE: Record<Props['variant'], string> = {
  new: 'Новый',
  active: 'Активный',
  done: 'Выполнен',
  canceled: 'Отменен',
};

const TableStatus: FC<Props> = ({ variant }) => (
  <div className={cx('root', variant)}>
    <span>{TITLE[variant]}</span>
  </div>
);

export { TableStatus };
