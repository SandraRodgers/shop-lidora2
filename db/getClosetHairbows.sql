SELECT products.productid, products.category, hairbows.name, hairbows.price, hairbows.fabric, hairbows.customize, hairbows.image, hairbows.location, hairbows.description

FROM hairbows 
INNER JOIN products ON products.hairbowsid = hairbows.hairbowsid
WHERE location = 'Closet'