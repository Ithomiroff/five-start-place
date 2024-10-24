import { FC, PropsWithChildren } from 'react';
import styles from './PageContent.module.scss';

type Props = {
  title: string;
};

const PageContent: FC<PropsWithChildren<Props>> = ({ title, children }) => (
  <section>
    <h1 className={styles.title}>{title}</h1>
    <section>{children}</section>
  </section>
);

export { PageContent };
