SELECT products.productid, products.category, bowties.name, bowties.price, bowties.fabric, bowties.customize, bowties.image, bowties.location, bowties.description

FROM bowties 
INNER JOIN products ON products.bowtiesid = bowties.bowtiesid
WHERE location = "Closet"