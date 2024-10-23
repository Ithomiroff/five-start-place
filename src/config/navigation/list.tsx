import { MenuItem } from './types';
import { ReactComponent as Dashboard } from '@icons/dashboard.svg';
import { ReactComponent as Meal } from '@icons/meal.svg';
import { ReactComponent as Grill } from '@icons/grill.svg';
import { ReactComponent as HomeLine } from '@icons/home-line.svg';

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    name: 'Дашборд',
    icon: <Dashboard />,
  },
  {
    key: 'meal',
    name: 'Еда',
    icon: <Meal />,
    submenu: [
      {
        key: 'delivery',
        path: '/delivery',
        name: 'Доставка',
      },
      {
        key: 'restaurant',
        path: '/restaurant',
        name: 'Ресторан',
      },
    ],
  },
  {
    key: 'services',
    path: '/services',
    name: 'Услуги',
    icon: <Grill />,
  },
  {
    key: 'homes',
    path: '/homes',
    name: 'Коттеджи',
    icon: <HomeLine />,
  },
];

export { MENU_ITEMS };