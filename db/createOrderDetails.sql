INSERT INTO orderdetails( orderid, customer_id, productid, size, name)
VALUES($1, $2, $3, $4, $5)
RETURNING *;