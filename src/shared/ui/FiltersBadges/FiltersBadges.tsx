import React, { FC, PropsWithChildren } from 'react';
import { CustomFlowbiteTheme, Tabs } from 'flowbite-react';
import { FilterBadge } from '@shared/meta/types';

const theme: CustomFlowbiteTheme['tabs'] = {
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
    >
      {items.map((item) => (
        <Tabs.Item
          key={item.key}
          active={item.key === activeKey}
          title={item.name}
          onClick={() => onChange(item.key)}
        />
      ))}
    </Tabs>
  );
};

export { FiltersBadges };
