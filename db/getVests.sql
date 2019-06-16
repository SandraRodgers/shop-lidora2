SELECT products.productid, products.category, vests.name, vests.price, vests.fabric, vests.customize, vests.image, vests.location, vests.description

FROM vests 
INNER JOIN products ON products.vestsid = vests.vestsid
WHERE location ='Vests Main Page'