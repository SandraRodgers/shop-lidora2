SELECT products.productid, products.category, shorts.name, shorts.price, shorts.fabric, shorts.customize, shorts.image, shorts.location, shorts.description

FROM shorts 
INNER JOIN products ON products.shortsid = shorts.shortsid
WHERE favorite = true