import { Content } from './Content/Content';
import { Outlet } from 'react-router-dom';

import styles from './Root.module.scss';
import { Sidebar } from '@features/Sidebar/ui/Sidebar';

export const RootPage = () => {
  return (
    <section className={styles.layout}>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </section>
  );
};
