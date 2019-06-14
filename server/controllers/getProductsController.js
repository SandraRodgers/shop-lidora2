module.exports = {
  getDresses: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDresses()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBonnets: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBonnets()
      .then(response => {
        console.log(response)
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getProductInfo: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getProductInfo(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Error" });
        console.log(err);
      });
  },
  getDress: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDress(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  getBonnet: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getBonnet(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
