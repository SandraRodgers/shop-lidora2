INSERT INTO coupon( code, discount, type, expired)
VALUES($1, $2, $3, $4)
RETURNING *;