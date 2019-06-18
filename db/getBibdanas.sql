SELECT products.productid, products.category, bibdanas.name, bibdanas.price, bibdanas.fabric, bibdanas.customize, bibdanas.image, bibdanas.location, bibdanas.description

FROM bibdanas 
INNER JOIN products ON products.bibdanasid = bibdanas.bloomersid
WHERE location ='Bibdanas Main Page'