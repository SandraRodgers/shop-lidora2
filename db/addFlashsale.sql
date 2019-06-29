INSERT INTO flashsale (name, price, size, description, fabric, image, sold)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING flashid;