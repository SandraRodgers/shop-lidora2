SELECT products.productid, products.category, droolpads.name, droolpads.price, droolpads.fabric, droolpads.customize, droolpads.image, droolpads.location, droolpads.description

FROM droolpads 
INNER JOIN products ON products.droolpadsid = droolpads.droolpadsid
WHERE favorite = true