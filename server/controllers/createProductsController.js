let dressesID = []
let bonnetsID = []
let shortsID = []
let bloomersID = []
let skirtsID = []
let vestsID = []


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
  addShorts: (req, res) => {
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
      .addShorts([
        name,
        price,
        fabric,
        customize,
        image,
        location,
        description
      ])
      .then(response => {
    
        shortsID.push(response[0].shortsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addBloomers: (req, res) => {
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
      .addBloomers([
        name,
        price,
        fabric,
        customize,
        image,
        location,
        description
      ])
      .then(response => {
    
        bloomersID.push(response[0].bloomersid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addSkirt: (req, res) => {
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
     .addSkirt([
       name,
       price,
       fabric,
       customize,
       image,
       location,
       description
     ])
     .then(response => {
   
      skirtsID.push(response[0].skirtsid);
       res.status(200).json(response);
     })
     .catch(error => {
       console.log(error);
       res.status(500).send(error);
     });
 },
 addVest: (req, res) => {
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
   .addVest([
     name,
     price,
     fabric,
     customize,
     image,
     location,
     description
   ])
   .then(response => {
 
    vestsID.push(response[0].vestsid);
     res.status(200).json(response);
   })
   .catch(error => {
     console.log(error);
     res.status(500).send(error);
   });
},
  createProduct: (req, res) => {
    console.log(req.body)
    const dbInstance = req.app.get("db");
    const category = req.body.category
    let dressesid = dressesID[0];
    let bonnetsid = bonnetsID[0]
    let shortsid = shortsID[0]
    let bloomersid = bloomersID[0]
    let skirtsid = skirtsID[0]
    let vestsid = vestsID[0]
   
    dbInstance
      .createProduct([dressesid, bonnetsid, shortsid, bloomersid, skirtsid, vestsid, category])
      .then(response => {
        dressesID=[] 
        bonnetsID = []
        shortsID = []
        bloomersID = []
        skirtsID = []
        vestsID = []
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
