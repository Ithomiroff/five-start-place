import { FC, PropsWithChildren } from 'react';
import styles from './Content.module.scss';
import SidebarStore from '@features/Sidebar/store/sidebar.store';

export const Content: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const handleClick = () => SidebarStore.dropSubMenu();

  return (
    <main
      className={styles.content}
      onClick={handleClick}
    >
      {children}
    </main>
  );
};
