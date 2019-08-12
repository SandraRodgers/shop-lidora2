SELECT products.productid, products.category, dresses.name, dresses.price, dresses.style, dresses.sleeves, dresses.length, dresses.fabric, dresses.customize, dresses.image, dresses.location, dresses.description

FROM dresses 
INNER JOIN products ON products.dressesid = dresses.dressesid
WHERE location = "Closet"