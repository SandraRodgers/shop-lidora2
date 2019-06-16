SELECT products.productid, products.category, bloomers.name, bloomers.price, bloomers.fabric, bloomers.customize, bloomers.image, bloomers.location, bloomers.description

FROM bloomers 
INNER JOIN products ON products.bloomersid = bloomers.bloomersid
WHERE location ='Bloomers Main Page'