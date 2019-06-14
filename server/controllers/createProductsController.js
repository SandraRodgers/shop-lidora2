let dressesID = [];
let bonnetsID = []


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
    
        dressesID.push(response[0].dressesid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addBonnet: (req, res) => {
    console.log(req.body)
    const dbInstance = req.app.get("db");
    const {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description
    } = req.body;
    dbInstance
      .addBonnet([
        name,
        price,
        fabric,
        customize,
        image,
        location,
        description
      ])
      .then(response => {
    
        bonnetsID.push(response[0].bonnetsid);
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
    let bonnetsid = bonnetsID[0]
    
    dbInstance
      .createProduct([dressesid, bonnetsid, category])
      .then(response => {
        dressesID=[] 
        bonnetsID = []
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
