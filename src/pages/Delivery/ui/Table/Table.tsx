import styles from './Table.module.scss';
import { TableStatus } from '../TableStatus/TableStatus';
import { DishStatus } from '../DishStatus/DishStatus';
import { ReactComponent as Comment } from '@icons/comment.svg';
import { ReactComponent as Dots } from '@icons/dots-vertical.svg';
import { ReactComponent as Arrow } from '@icons/arrow.svg';

const DeliveryTable = () => {
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <div className={styles.row}>
          <div className={styles.cell}>№ дома</div>
          <div className={styles.cell}>Время</div>
          <div className={styles.cell}>
            <div className="flex gap-1">
              <span>Статус</span>
              <Arrow />
            </div>
          </div>
          <div className={styles.cell}>Контактные данные</div>
          <div className={styles.cell}>Блюда</div>
          <div className={styles.cell}>Комментарий</div>
          <div className={styles.cell}>Стоимость, ₽</div>
          <div className={styles.cell}></div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="new" />
          </div>
          <div className={styles.cell}>
            <span>Константин Константинович K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="done" />
          </div>
          <div className={styles.cell}>
            <span>Алексей Анатльевич K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="canceled" />
          </div>
          <div className={styles.cell}>
            <span>Иван Алексеевич K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="active" />
          </div>
          <div className={styles.cell}>
            <span>Надежда Владимировна K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="new" />
          </div>
          <div className={styles.cell}>
            <span>Анастасия Андреевна K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="new" />
          </div>
          <div className={styles.cell}>
            <span>Константин Константинович K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="done" />
          </div>
          <div className={styles.cell}>
            <span>Алексей Анатльевич K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="canceled" />
          </div>
          <div className={styles.cell}>
            <span>Иван Алексеевич K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="active" />
          </div>
          <div className={styles.cell}>
            <span>Надежда Владимировна K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="new" />
          </div>
          <div className={styles.cell}>
            <span>Анастасия Андреевна K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="new" />
          </div>
          <div className={styles.cell}>
            <span>Константин Константинович K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
              <DishStatus>Кола х 2</DishStatus>
              <DishStatus>+4</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>2</div>
          <div className={styles.cell}>16:00 / 10.11.2024</div>
          <div className={styles.cell}>
            <TableStatus variant="done" />
          </div>
          <div className={styles.cell}>
            <span>Алексей Анатльевич K.</span> <br />
            <span className="text-gray-3">+7 (999) 123-45-67</span>
          </div>
          <div className={styles.cell}>
            <div className="flex gap-1 flex-wrap">
              <DishStatus>Цезарь с курицей х 2</DishStatus>
              <DishStatus>Солянка</DishStatus>
              <DishStatus>Борщ</DishStatus>
            </div>
          </div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Comment />
            </button>
          </div>
          <div className={styles.cell}>1 700</div>
          <div className={styles.cell}>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2.5"
            >
              <Dots />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DeliveryTable };
