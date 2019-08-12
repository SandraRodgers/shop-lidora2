SELECT products.productid, products.category, shirts.name, shirts.price, shirts.fabric, shirts.customize, shirts.image, shirts.location, shirts.description

FROM shirts 
INNER JOIN products ON products.shirtsid = shirts.shirtsid
WHERE location = 'Closet'