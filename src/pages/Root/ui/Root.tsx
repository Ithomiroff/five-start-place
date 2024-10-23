import { Sidebar } from './Sidebar/Sidebar';
import { Content } from './Content/Content';
import { Outlet } from 'react-router-dom';

import styles from './Root.module.scss';

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
