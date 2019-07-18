INSERT INTO fabric (name, img, current)
VALUES ($1, $2, $3)
RETURNING *;