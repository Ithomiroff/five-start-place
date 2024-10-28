import styles from './Table.module.scss';
import { TableStatus } from '../TableStatus/TableStatus';
import { DishStatus } from '../DishStatus/DishStatus';
import { ReactComponent as Comment } from '@icons/comment.svg';
import { ReactComponent as Dots } from '@icons/dots-vertical.svg';
import { Table } from 'flowbite-react';
import { DATA } from './meta/data';
import { FilterBadge } from '@shared/meta/types';
import { FC, useMemo } from 'react';

type Props = {
  filter: FilterBadge['key'];
};

const DeliveryTable: FC<Props> = ({ filter }) => {
  const filtered = useMemo(() => {
    if (filter === 'all') {
      return DATA;
    }

    return DATA.filter((item) => item.status === filter);
  }, [filter]);

  return (
    <div className={styles.root}>
      <Table>
        <Table.Head>
          <Table.HeadCell>№ дома</Table.HeadCell>
          <Table.HeadCell>Время</Table.HeadCell>
          <Table.HeadCell>Статус</Table.HeadCell>
          <Table.HeadCell>Контактные данные</Table.HeadCell>
          <Table.HeadCell>Блюда</Table.HeadCell>
          <Table.HeadCell>Комментарий</Table.HeadCell>
          <Table.HeadCell>Стоимость, ₽</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {filtered.map((item) => (
            <Table.Row
              key={item.id}
              className="bg-white"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-blue-1">{item.num}</Table.Cell>
              <Table.Cell className="text-blue-1 font-normal">{item.time}</Table.Cell>
              <Table.Cell>
                <TableStatus variant={item.status} />
              </Table.Cell>
              <Table.Cell className="font-normal">
                <span>{item.name}</span> <br />
                <span className="text-gray-3">{item.phone}</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-1 flex-wrap">
                  {item.dishes.map((dish) => (
                    <DishStatus key={dish}>{dish}</DishStatus>
                  ))}
                </div>
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="bg-transparent hover:bg-gray-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
                >
                  <Comment />
                </button>
              </Table.Cell>
              <Table.Cell className="text-blue-1">{item.price}</Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="bg-transparent hover:bg-gray-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
                >
                  <Dots />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export { DeliveryTable };
