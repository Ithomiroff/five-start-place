import { FC, useState } from 'react';
import styles from './Sidebar.module.scss';
import { cn } from '@utils/cn-bind';
import { ReactComponent as Logo } from '@icons/logo.svg';
import { ReactComponent as LogoFull } from '@icons/logo-full.svg';
import { ReactComponent as Notifications } from '@icons/notifications.svg';
import { ReactComponent as Settings } from '@icons/settings.svg';
import { ReactComponent as HideSidebar } from '@icons/hide-sidebar.svg';
import { ReactComponent as User } from '@icons/user.svg';
import { ReactComponent as Logout } from '@icons/logout.svg';
import { ReactComponent as Settings1 } from '@icons/settings-01.svg';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import { MenuItem } from '@config/navigation/types';
import { MENU_ITEMS } from '@config/navigation/list';
import { SubNavigation } from '@features/Sidebar/ui/Subnavigation/Subnavigation';
import { observer } from 'mobx-react';
import SidebarStore from '@features/Sidebar/store/sidebar.store';

const cx = cn(styles);

export const Sidebar: FC = observer(() => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSelect = (item: MenuItem) => () => {
    SidebarStore.dropSubMenu();

    if (item.submenu) {
      SidebarStore.selectSubMenu(item.submenu);
    } else {
      if (item.path) {
        navigate(item.path);
      }
    }
  };

  const togglePanel = () => setExpanded((prev) => !prev);

  return (
    <section className={cx('wrapper', { expanded })}>
      <aside className={cx('sidebar')}>
        <div className={cx('logo')}>{expanded ? <LogoFull /> : <Logo />}</div>

        <ul className={cx('nav')}>
          {MENU_ITEMS.map((item) => (
            <Tooltip
              key={item.key}
              placement="bottom"
              content={item.name}
              arrow={false}
            >
              <li
                className={cx('navItem', { navItemEvents: Boolean(item.badge) && !expanded })}
                onClick={handleSelect(item)}
              >
                <span className={cx('navItemIcon')}>{item.icon}</span>
                {expanded && <span className={cx('navItemText')}>{item.name}</span>}
                {Boolean(item.badge) && expanded && <span className={styles.badgeEvents}>{item.badge}</span>}
              </li>
            </Tooltip>
          ))}
        </ul>

        <div className={styles.space}></div>

        <ul className={cx('nav')}>
          <Tooltip
            placement="bottom"
            content="Уведомления"
            arrow={false}
          >
            <li className={cx('navItem')}>
              <span className={cx('navItemIcon')}>
                <Notifications />
              </span>
              {expanded && <span className={cx('navItemText')}>Уведомления</span>}
            </li>
          </Tooltip>

          <Tooltip
            placement="bottom"
            content="Настройки"
            arrow={false}
          >
            <li className={cx('navItem')}>
              <span className={cx('navItemIcon')}>
                <Settings />
              </span>
              {expanded && <span className={cx('navItemText')}>Настройки</span>}
            </li>
          </Tooltip>
        </ul>

        <ul className={cx('nav')}>
          <li
            className={cx('navItem', 'navItemBordered')}
            onClick={togglePanel}
          >
            <span className={cx('navItemIcon', { reverseIcon: !expanded })}>
              <HideSidebar />
            </span>
            {expanded && <span className={cx('navItemText')}>Свернуть панель</span>}
          </li>
          <li className={cx('navItem', 'navItemBordered')}>
            <span className={cx('navItemIcon')}>
              <span className={cx('avatar')}>
                <User />
              </span>
            </span>
            {expanded && (
              <div className={cx('user')}>
                <span className={cx('userName')}>Иванов Роман</span> <br />
                <span>ivanov@untitled.com</span>
                <span className={cx('userLogo')}>
                  <Logout />
                </span>
              </div>
            )}
          </li>
        </ul>
      </aside>

      {SidebarStore.subPanelExpanded && (
        <SubNavigation expanded={expanded}>
          <ul className={styles.nav}>
            {SidebarStore.subPanelItems.map((item) => (
              <li
                key={item.key}
                className={cx('navItem')}
                onClick={handleSelect(item)}
              >
                {item.icon && <span className={cx('navItemIcon')}>{item.icon}</span>}
                <span className={cx('navItemText')}>{item.name}</span>
                <span className={styles.badgeEvents}>{item.badge}</span>
              </li>
            ))}

            <li className={cx('navItem', 'navItemBordered')}>
              <span className={cx('navItemIcon')}>
                <Settings1 />
              </span>
              <span className={cx('navItemText')}>Управление меню</span>
            </li>
          </ul>
        </SubNavigation>
      )}
    </section>
  );
});
