UPDATE customer_address
SET current = false
WHERE customer_id= $1
