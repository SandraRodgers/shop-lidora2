INSERT INTO dresses (name, price, style, sleeves, length, fabric, customize, image, location, description, favorite)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING dressesid;