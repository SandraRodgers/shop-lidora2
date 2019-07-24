UPDATE flashsale
SET name = $2, price = $3, size=$4, fabric = $5, image = $6, description = $7, sold = $8
WHERE flashid = $1
