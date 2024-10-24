import { MenuItem } from '../../../../config/navigation/types';
import { FC, PropsWithChildren } from 'react';
import { cn } from '@utils/cn-bind';
import styles from './Subnavigation.module.scss';

type Props = {
  expanded: boolean;
  items: MenuItem[];
};

const cx = cn(styles);

const SubNavigation: FC<PropsWithChildren<Props>> = ({ items, expanded, children }) => {
  return <aside className={cx('root', { expanded })}>{children}</aside>;
};

export { SubNavigation };
