module.exports = {
  editProduct: (req, res) => {
    console.log(req.body)
    console.log('req.parms',req.params)
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
    } else if(category === 'shorts'){
      const shortsid = +id
      console.log('shortsid',shortsid)
      dbInstance
          .editShort(
            shortsid,
            name,
            price,
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
    if(category === 'bloomers'){
      const bloomersid = +id

      dbInstance
          .editBloomer(
            bloomersid,
            name,
            price,
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
    if(category === 'skirts'){
      const skirtsid = +id

      dbInstance
          .editSkirt(
            skirtsid,
            name,
            price,
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
    if(category === 'vests'){
      const vestsid = +id

      dbInstance
          .editVest(
            vestsid,
            name,
            price,
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
    if(category === 'bonnets'){
      const bonnetsid = +id

      dbInstance
          .editBonnet(
            bonnetsid,
            name,
            price,
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
    if(category === 'bowties'){
      const bowtiesid = +id

      dbInstance
          .editBowtie(
            bowtiesid,
            name,
            price,
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
    if(category === 'suspenders'){
      const suspendersid = +id
      dbInstance
          .editSuspender(
            suspendersid,
            name,
            price,
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
    if(category === 'hairbows'){
      const hairbowsid = +id
      dbInstance
          .editHairbow(
            hairbowsid,
            name,
            price,
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
    if(category === 'headbands'){
      const headbandsid = +id
      dbInstance
          .editHeadband(
            headbandsid,
            name,
            price,
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
    if(category === 'bibdanas'){
      const bibdanasid = +id
      dbInstance
          .editBibdana(
            bibdanasid,
            name,
            price,
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
    if(category === 'burpcloths'){
      const burpclothsid = +id
      dbInstance
          .editBurpcloth(
            burpclothsid,
            name,
            price,
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
    if(category === 'droolpads'){
      const droolpadsid = +id
      dbInstance
          .editDroolpad(
            droolpadsid,
            name,
            price,
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
    if(category === 'flashsale'){
      const flashid = +id
      let {sold, size} = req.body
      if(sold === 'false'){
        sold = false
      } else {sold = true}
      dbInstance
          .editFlashsale(
            flashid,
            name,
            price,
            size,
            fabric,
            image,
            description,
            sold
      
          
          )
          .then(response => {
            res.status(200).json(response);
          })
          .catch(err => {
            res.status(500).send({ errorMessage: "Error" });
            console.log(err);
          });
    }


  }
};


