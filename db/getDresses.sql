SELECT products.productid, products.category, dresses.name, dresses.price, dresses.style, dresses.sleeves, dresses.length, dresses.size, dresses.fabric, dresses.customize, dresses.image, dresses.location, dresses.description

FROM dresses 
INNER JOIN products ON products.productid = dresses.dressesid
WHERE location ='Dresses Main Page'