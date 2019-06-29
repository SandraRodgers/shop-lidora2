SELECT products.productid, products.category, skirts.name, skirts.price, skirts.fabric, skirts.customize, skirts.image, skirts.location, skirts.description

FROM skirts 
INNER JOIN products ON products.skirtsid = skirts.skirtsid
WHERE favorite = true