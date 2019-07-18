module.exports = {
  postFabrics: (req, res) => {
   
    const dbInstance = req.app.get("db");
    const { name, img, current } = req.body;
    dbInstance
      .addFabric([name, img, current])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getFabrics: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getFabrics()
      .then(response => {

        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  postStyles: (req, res) => {
    const dbInstance = req.app.get("db");
    const { style, img, current } = req.body;
    dbInstance
      .addStyle([style, img, current])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  getStyles: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
    .getStyles()
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
  }
};
