INSERT INTO bonnets (name, price, fabric, customize, image, location, description, favorite)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING bonnetsid;