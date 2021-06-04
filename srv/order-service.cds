using { dalrae.cap.auth.demo as t } from '../db/schema';

service OrderService @(path: '/orders', requires : 'authenticated-user') {

  entity WorkOrders as projection on t.WorkOrders;
  entity Customers  as projection on t.Customers;
}