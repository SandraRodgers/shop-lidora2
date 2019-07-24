module.exports = {
  editProduct: (req, res) => {
    console.log(req.body)
    console.log(req.params)
    let {id} = req.params
    const {
          name,
          price,
          style,
          sleeves,
          length,
          fabric,
          image,
          customize,
          description,
          location,
          favorite,
          category
        } = req.body;
    const dbInstance = req.app.get("db");

    if(category === 'dresses'){

      const dressesid = +id
  
      dbInstance
          .editDress(
            dressesid,
            name,
            price,
            style,
            sleeves,
            length,
            fabric,
            image,
            customize,
            description,
            location,
            favorite
          )
          .then(response => {
            res.status(200).json(response);
          })
          .catch(err => {
            res.status(500).send({ errorMessage: "Error" });
            console.log(err);
          });



    }
    if(category === 'shorts'){}
    if(category === 'bloomers'){}
    if(category === 'skirts'){}
    if(category === 'vests'){}
    if(category === 'bonnets'){}
    if(category === 'bowties'){}
    if(category === 'suspenders'){}
    if(category === 'hairbows'){}
    if(category === 'headbands'){}
    if(category === 'bibdanas'){}
    if(category === 'burpcloths'){}
    if(category === 'droolpads'){}
    if(category === 'flashsale'){}


  }
};
