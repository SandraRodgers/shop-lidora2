let dressesID = [];
let bonnetsID = [];
let shortsID = [];
let bloomersID = [];
let skirtsID = [];
let shirtsID = [];
let vestsID = [];
let bowtiesID = [];
let suspendersID = [];
let hairbowsID = [];
let headbandsID = [];
let bibdanasID = [];
let burpclothsID = [];
let droolpadsID = [];
let flashID = [];

module.exports = {
  addDress: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      style,
      sleeves,
      length,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    console.log('favorite',favorite)

    dbInstance
      .addDress([
        name,
        price,
        style,
        sleeves,
        length,
        fabric,
        customize,
        image,
        location,
        description,
        favorite
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
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addBonnet([name, price, fabric, customize, image, location, description, favorite])
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
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addShorts([name, price, fabric, customize, image, location, description, favorite])
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
    console.log(req.body);
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addBloomers([
        name,
        price,
        fabric,
        customize,
        image,
        location,
        description,
        favorite
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
    console.log(req.body);
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addSkirt([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        skirtsID.push(response[0].skirtsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addShirt: (req, res) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addShirt([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        shirtsID.push(response[0].shirtsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addVest: (req, res) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addVest([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        vestsID.push(response[0].vestsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addBowtie: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addBowtie([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        bowtiesID.push(response[0].bowtiesid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addSuspenders: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addSuspenders([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        suspendersID.push(response[0].suspendersid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addHairbow: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addHairbow([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        hairbowsID.push(response[0].hairbowsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addHeadband: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addHeadband([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        headbandsID.push(response[0].headbandsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addBibdana: (req, res) => {
    const dbInstance = req.app.get("db");
   let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addBibdana([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        bibdanasID.push(response[0].bibdanasid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addBurpcloth: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addBurpcloth([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        burpclothsID.push(response[0].burpclothsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addDroolpad: (req, res) => {
    const dbInstance = req.app.get("db");
    let {
      name,
      price,
      fabric,
      customize,
      image,
      location,
      description,
      favorite
    } = req.body;
    console.log(favorite)
    if(favorite === 'Yes'){
      favorite = true
    } else {
      favorite = false
    }

    dbInstance
      .addDroolpad([name, price, fabric, customize, image, location, description, favorite])
      .then(response => {
        droolpadsID.push(response[0].droolpadsid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  addFlashsale: (req, res) => {
    const dbInstance = req.app.get("db");
    const {name, price, size, description, fabric, image, sold} = req.body
    dbInstance
      .addFlashsale([name, price, size, description, fabric, image, sold])
      .then(response => {
        flashID.push(response[0].flashid);
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  createProduct: (req, res) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    const category = req.body.category;
    let dressesid = dressesID[0];
    let bonnetsid = bonnetsID[0];
    let shortsid = shortsID[0];
    let bloomersid = bloomersID[0];
    let skirtsid = skirtsID[0];
    let shirtsid = shirtsID[0];
    let vestsid = vestsID[0];
    let bowtiesid = bowtiesID[0];
    let suspendersid = suspendersID[0];
    let hairbowsid = hairbowsID[0];
    let headbandsid = headbandsID[0];
    let bibdanasid = bibdanasID[0];
    let burpclothsid = burpclothsID[0];
    let droolpadsid = droolpadsID[0];
    let flashid = flashID[0]
    console.log(flashid)
    
    dbInstance
      .createProduct([
        dressesid,
        bonnetsid,
        shortsid,
        bloomersid,
        skirtsid,
        shirtsid,
        vestsid,
        bowtiesid,
        suspendersid,
        hairbowsid,
        headbandsid,
        bibdanasid,
        burpclothsid,
        droolpadsid,
        flashid,
        category
      ])
      .then(response => {
        dressesID = [];
        bonnetsID = [];
        shortsID = [];
        bloomersID = [];
        skirtsID = [];
        shirtsID = [];
        vestsID = [];
        bowtiesID = [];
        suspendersID = [];
        hairbowsID = [];
        headbandsID = [];
        bibdanasID = [];
        burpclothsID = [];
        droolpadsID = [];
        flashID = [];
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
