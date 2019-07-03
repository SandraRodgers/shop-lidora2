INSERT INTO customer_address (name, customer_id, line_one, line_two, city, state, zipcode, current)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;
