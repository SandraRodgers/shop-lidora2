const dressesID = [];


module.exports = {
  addDress: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      name,
      price,
      style,
      sleeves,
      length,
      size,
      fabric,
      customize,
      image,
      location,
      description
    } = req.body;
    dbInstance
      .addDress([
        name,
        price,
        style,
        sleeves,
        length,
        size,
        fabric,
        customize,
        image,
        location,
        description
      ])
      .then(response => {
        console.log(response)
        dressesID.push(response[0].dressesid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  createProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const category = req.body.category
    let dressesid = dressesID[0];
    console.log(req.body);
    dbInstance
      .createProduct([dressesid, category])
      .then(response => {
        console.log(response)
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
