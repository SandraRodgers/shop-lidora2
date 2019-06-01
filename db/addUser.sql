INSERT INTO customer (display_name, email,firebase_uid, profile_photo, isadmin) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;