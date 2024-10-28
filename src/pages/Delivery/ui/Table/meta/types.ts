export type DeliveryTable = {
  id: number;
  num: number;
  time: string;
  status: OrderStatus;
  name: string;
  phone: string;
  dishes: string[];
  price: string;
};

export type OrderStatus = 'new' | 'active' | 'done' | 'canceled';
