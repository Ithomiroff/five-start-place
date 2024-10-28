import React, { FC } from 'react';
import { CustomFlowbiteTheme, Tabs } from 'flowbite-react';
import { FilterBadge } from '@shared/meta/types';

const theme: CustomFlowbiteTheme['tabs'] = {
  tablist: {
    tabitem: {
      variant: {
        pills: {
          base: 'py-2 px-3 no-outline',
          active: {
            on: 'rounded-lg bg-blue-3 text-blue-2',
            off: 'rounded-lg text-gray-2',
          },
        },
      },
    },
  },
};

type Props = {
  activeKey: FilterBadge['key'];
  items: FilterBadge[];
  onChange: (key: FilterBadge['key']) => void;
};

const FiltersBadges: FC<Props> = ({ activeKey, items, onChange }) => {
  return (
    <Tabs
      variant="pills"
      theme={theme}
      onActiveTabChange={(num) => onChange(items[num].key)}
    >
      {items.map((item) => (
        <Tabs.Item
          key={item.key}
          active={item.key === activeKey}
          title={item.name}
        />
      ))}
    </Tabs>
  );
};

export { FiltersBadges };
