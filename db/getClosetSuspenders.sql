SELECT products.productid, products.category, suspenders.name, suspenders.price, suspenders.fabric, suspenders.customize, suspenders.image, suspenders.location, suspenders.description

FROM suspenders 
INNER JOIN products ON products.suspendersid = suspenders.suspendersid
WHERE location = 'Closet'