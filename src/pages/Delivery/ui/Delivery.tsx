import { FiltersBadges, PageContent } from '@shared/ui';
import { DELIVERY_FILTERS } from '../meta/consts';
import { useState } from 'react';
import { FilterBadge } from '@shared/meta/types';

const DeliveryPage = () => {
  const [filter, setFilter] = useState<FilterBadge['key']>('all');

  return (
    <PageContent title="Доставка">
      <FiltersBadges
        activeKey={filter}
        items={DELIVERY_FILTERS}
        onChange={setFilter}
      />
    </PageContent>
  );
};

export default DeliveryPage;
