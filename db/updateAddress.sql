UPDATE customer_address
SET name = $1, line_one = $2, line_two = $3, city = $4, state = $5, zipcode = $6
WHERE customer_id= $7 AND current = TRUE
RETURNING *