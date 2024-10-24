import { FC, PropsWithChildren } from 'react';
import { cn } from '@utils/cn-bind';
import styles from './Subnavigation.module.scss';

type Props = {
  expanded: boolean;
};

const cx = cn(styles);

const SubNavigation: FC<PropsWithChildren<Props>> = ({ expanded, children }) => {
  return (
    <aside className={cx('root', { expanded })}>
      <div className={styles.inner}>{children}</div>
    </aside>
  );
};

export { SubNavigation };
