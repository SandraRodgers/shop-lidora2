SELECT products.productid, products.category, flashsale.name, flashsale.price, flashsale.description, flashsale.fabric, flashsale.image, flashsale.sold

FROM flashsale 
INNER JOIN products ON products.flashid = flashsale.flashid
WHERE sold = false