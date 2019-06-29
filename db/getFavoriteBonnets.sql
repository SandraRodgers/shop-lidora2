SELECT products.productid, products.category, bonnets.name, bonnets.price, bonnets.fabric, bonnets.customize, bonnets.image, bonnets.location, bonnets.description

FROM bonnets 
INNER JOIN products ON products.bonnetsid = bonnets.bonnetsid
WHERE favorite = true