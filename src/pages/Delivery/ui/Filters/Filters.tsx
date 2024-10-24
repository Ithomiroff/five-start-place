import { FC } from 'react';
import { CustomFlowbiteTheme, Tabs } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['tabs'] = {
  tablist: {
    tabitem: {
      variant: {
        pills: {
          base: 'py-2 px-3 no-outline',
          active: {
            on: 'rounded-lg bg-blue-2 text-blue-1',
            off: 'rounded-lg text-gray-1',
          },
        },
      },
    },
  },
};

const DeliveryFilters: FC = () => (
  <Tabs
    variant="pills"
    theme={customTheme}
  >
    <Tabs.Item
      active
      title="Все"
    />
    <Tabs.Item
      active
      title="Новые"
    />
  </Tabs>
);

export { DeliveryFilters };
