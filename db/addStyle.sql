INSERT INTO style (style, img, current)
VALUES ($1, $2, $3)
RETURNING *;