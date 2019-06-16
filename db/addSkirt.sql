INSERT INTO skirts (name, price, fabric, customize, image, location, description)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING skirtsid;