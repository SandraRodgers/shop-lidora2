INSERT INTO orderdetails( orderid, customer_id, productid, size, name, quantity)
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;