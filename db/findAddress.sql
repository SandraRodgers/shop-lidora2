SELECT * FROM customer_address WHERE customer_id = $1
RETURNING customer_id;