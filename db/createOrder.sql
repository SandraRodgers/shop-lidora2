INSERT INTO orders( total, payment, date, shipped_date, fulfilled, productids, coupon, customer_id )
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;