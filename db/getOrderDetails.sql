SELECT orders.orderid, orders.customer_id, orders.date, orders.coupon, orders.fulfilled, orders.payment, orders.shipped_date, orders.total, orderdetails.name, orderdetails.quantity, orderdetails.size
FROM orderdetails
INNER JOIN orders ON orders.orderid = orderdetails.orderid
WHERE orders.customer_id = $1;