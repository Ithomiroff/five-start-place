import { FC, PropsWithChildren } from 'react';
import styles from './DishStatus.module.scss';

const DishStatus: FC<PropsWithChildren> = ({ children }) => <div className={styles.root}>{children}</div>;

export { DishStatus };
