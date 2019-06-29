SELECT products.productid, products.category, burpcloths.name, burpcloths.price, burpcloths.fabric, burpcloths.customize, burpcloths.image, burpcloths.location, burpcloths.description

FROM burpcloths 
INNER JOIN products ON products.burpclothsid = burpcloths.burpclothsid
WHERE favorite = true