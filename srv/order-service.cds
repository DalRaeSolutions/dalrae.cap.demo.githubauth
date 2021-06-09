using { dalrae.cap.auth.demo as t } from '../db/schema';

service OrderService @(path: '/orders') {

  entity WorkOrders as projection on t.WorkOrders {
    ID,
    customer.name as customerName,
    createdAt,
    description
  };
}