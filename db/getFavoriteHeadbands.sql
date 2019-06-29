SELECT products.productid, products.category, headbands.name, headbands.price, headbands.fabric, headbands.customize, headbands.image, headbands.location, headbands.description

FROM headbands 
INNER JOIN products ON products.headbandsid = headbands.headbandsid
WHERE favorite = true